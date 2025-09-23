let contador = 0;

function agregarAlCarrito() {
  contador++;
  document.getElementById('contador').textContent = contador;
}


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-form');
    const closeButton = document.querySelector('.close-form');
    const formPopup = document.querySelector('.form-popup');

    toggleButton.addEventListener('click', function() {
        formPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        formPopup.style.display = 'none';
    });
});