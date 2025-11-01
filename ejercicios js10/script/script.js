// =======================
// Ejercicio 1
// =======================
document.getElementById("f1").addEventListener("submit", function(ev) {
  ev.preventDefault();
  const nom = ev.target.nombre.value;
  const mail = ev.target.correo.value;
  document.getElementById("out1").innerHTML = "Nombre: " + nom + "<br>Correo: " + mail;
});

// =======================
// Ejercicio 2
// =======================
document.getElementById("f2").addEventListener("submit", function(ev) {
  ev.preventDefault();
  const salida = document.getElementById("out2");
  salida.innerHTML = ""; // limpiar antes
  let p = document.createElement("p");
  p.textContent = "Nombre: " + ev.target.nombre.value + " | Email: " + ev.target.correo.value;
  salida.appendChild(p);
});

// =======================
// Ejercicio 3
// =======================
document.getElementById("f3").addEventListener("submit", function(ev) {
  ev.preventDefault();
  let datos = Object.fromEntries(new FormData(ev.target));
  document.getElementById("out3").textContent = JSON.stringify(datos, null, 2);
});

// =======================
// Ejercicio 4 y 5
// =======================
document.getElementById("f4").addEventListener("submit", function(ev) {
  ev.preventDefault();
  let info = Object.fromEntries(new FormData(ev.target));
  localStorage.setItem("usuarioGuardado", JSON.stringify(info));
  document.getElementById("out4").textContent = JSON.stringify(info, null, 2);
});

document.getElementById("btnClearUser").addEventListener("click", function() {
  localStorage.removeItem("usuarioGuardado");
  document.getElementById("out4").textContent = "";
});

// =======================
// Ejercicio 6
// =======================
document.getElementById("f6").addEventListener("submit", function(ev) {
  ev.preventDefault();
  let col = ev.target.colorFavorito.value;
  localStorage.setItem("miColor", col);
  document.getElementById("boxColor").style.background = col;
});

// =======================
// Ejercicio 7 y 8
// =======================
let tareas = JSON.parse(localStorage.getItem("misTareas")) || [];
const ulTareas = document.getElementById("taskList");

function mostrarTareas() {
  ulTareas.innerHTML = "";
  for (let i = 0; i < tareas.length; i++) {
    let li = document.createElement("li");
    li.textContent = tareas[i];
    ulTareas.appendChild(li);
  }
}

document.getElementById("f7").addEventListener("submit", function(ev) {
  ev.preventDefault();
  tareas.push(ev.target.tarea.value);
  localStorage.setItem("misTareas", JSON.stringify(tareas));
  mostrarTareas();
  ev.target.reset();
});

document.getElementById("btnClearTasks").addEventListener("click", function() {
  tareas = [];
  localStorage.removeItem("misTareas");
  mostrarTareas();
});

mostrarTareas();

// =======================
// Ejercicio 9 y 10
// =======================
let productos = JSON.parse(localStorage.getItem("misProductos")) || [];
const cuerpoTabla = document.getElementById("tablaProd");

function dibujarTabla() {
  cuerpoTabla.innerHTML = "";
  for (let i = 0; i < productos.length; i++) {
    let fila = "<tr><td>" + productos[i].producto + "</td><td>" + productos[i].precio + "</td></tr>";
    cuerpoTabla.innerHTML += fila;
  }
}

document.getElementById("f9").addEventListener("submit", function(ev) {
  ev.preventDefault();
  let nuevo = Object.fromEntries(new FormData(ev.target));
  productos.push(nuevo);
  localStorage.setItem("misProductos", JSON.stringify(productos));
  dibujarTabla();
  ev.target.reset();
});

document.getElementById("btnDeleteLast").addEventListener("click", function() {
  productos.pop();
  localStorage.setItem("misProductos", JSON.stringify(productos));
  dibujarTabla();
});

dibujarTabla();
