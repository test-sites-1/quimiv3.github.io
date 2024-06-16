document.addEventListener("DOMContentLoaded", function() {
    // Simulando una carga ficticia con un temporizador
    setTimeout(function() {
      // Ocultar la página de carga
      document.querySelector('.loader-wrapper').style.display = 'none';
      // Mostrar el contenido principal de la página
      document.getElementById('content').style.display = 'block';
    }, 2000); // 2000 milisegundos (2 segundos) - puedes ajustar este valor según sea necesario
  });