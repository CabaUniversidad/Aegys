let contador = 0;

function agregarAlCarrito() {
  contador++;
  document.getElementById('contador').textContent = contador;
}


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-form');
    const formPopup = document.querySelector('.form-popup');
    const closeButton = document.querySelector('.close-form');

    // Muestra/oculta el formulario al hacer clic en el botón del icono
    toggleButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
        formPopup.style.display = (formPopup.style.display === 'block') ? 'none' : 'block';
    });

    // Cierra el formulario al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', function() {
        formPopup.style.display = 'none';
    });

    // Cierra el formulario al hacer clic en cualquier lugar fuera de él
    document.addEventListener('click', function(event) {
        // Verifica si el clic no ocurrió dentro del formulario ni en el botón de alternar
        if (!formPopup.contains(event.target) && !toggleButton.contains(event.target)) {
            formPopup.style.display = 'none';
        }
    });
});