document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-agregar");
  const listaProductos = document.querySelector(".lista-productos");
  const inputBuscar = document.querySelector(".input-buscar");
  const listaFiltrada = document.querySelector(".lista-filtrada");

  // Cargar productos guardados
  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  // Renderizar los productos
  function mostrarProductos(lista, contenedor) {
    contenedor.innerHTML = "";
    lista.forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <span>${prod.nombre} - $${prod.precio}</span>
        <span class="badge ${prod.categoria}">${prod.categoria}</span>
      `;
      contenedor.appendChild(div);
    });
  }

  mostrarProductos(productos, listaProductos);

  // Guardar en LocalStorage
  function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  // Agregar producto
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = form.querySelector('[name="nombre"]').value.trim();
    const precio = parseFloat(form.querySelector('[name="precio"]').value);
    const categoria = form.querySelector('[name="categoria"]').value;

    if (nombre && !isNaN(precio) && categoria) {
      const nuevo = { nombre, precio, categoria };
      productos.push(nuevo);
      guardarProductos();
      mostrarProductos(productos, listaProductos);
      form.reset();
    }
  });

  // Buscar / filtrar productos
  inputBuscar.addEventListener("input", () => {
    const texto = inputBuscar.value.toLowerCase();
    const filtrados = productos.filter(p =>
      p.nombre.toLowerCase().includes(texto) ||
      p.categoria.toLowerCase().includes(texto) ||
      String(p.precio).includes(texto)
    );
    mostrarProductos(filtrados, listaFiltrada);
  });
});
