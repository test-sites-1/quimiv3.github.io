const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');

const htmlFilePath = 'index.html';
const cssFilePath = 'styles.css';
const jsFilePath = 'script.js';

// Leer el archivo html
fs.readFile(htmlFilePath, 'utf8', (err, htmlContent) => {
  if (err) {
    console.error('Error al leer el archivo html:', err);
    return;
  }

  // Leer el archivo css
  fs.readFile(cssFilePath, 'utf8', (err, cssContent) => {
    if (err) {
      console.error('Error al leer el archivo css:', err);
      return;
    }

    // Optimizar el css
    const optimizedCSS = new CleanCSS().minify(cssContent);

    // Leer el archivo js
    fs.readFile(jsFilePath, 'utf8', (err, jsContent) => {
      if (err) {
        console.error('Error al leer el archivo js:', err);
        return;
      }

      // Optimizar el js
      const optimizedJS = UglifyJS.minify(jsContent);

      // Reemplazar el css y js en el html
      const optimizedHTML = htmlContent
        .replace(`<link rel="stylesheet" href="${cssFilePath}">`, `<style>${optimizedCSS.styles}</style>`)
        .replace(`<script src="${jsFilePath}"></script>`, `<script>${optimizedJS.code}</script>`);

      // Guardar el archivo html optimizado
      fs.writeFile('optimized-index.html', optimizedHTML, 'utf8', (err) => {
        if (err) {
          console.error('Error al guardar el archivo html optimizado:', err);
          return;
        }

        console.log('Archivo html optimizado guardado correctamente.');
      });
    });
  });
});