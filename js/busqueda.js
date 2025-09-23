function buscarProducto() {
  const input = document.getElementById("input-busqueda").value.toLowerCase();
  const productos = document.querySelectorAll(".tarjeta-producto");

  productos.forEach(producto => {
    const nombre = producto.querySelector("h3").textContent.toLowerCase();
    if (nombre.includes(input)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
}