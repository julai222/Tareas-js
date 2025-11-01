// 1️ Funcion que muestra "Hola mundo"
function saludar() {
  console.log("Hola mundo");
}

// Llamamos a la funcion
saludar();


// 2️ Funcion que suma dos numeros
function suma(a, b) {
  return a + b;
}

// Probamos la funcion
let resultado = suma(5, 3);
console.log("La suma es:", resultado);


// 3️ Funcion que recibe un nombre y devuelve un saludo personalizado
function saludarPersona(nombre) {
  return "Hola, " + nombre;
}

let saludo = saludarPersona("Julai");
console.log(saludo);


// 4️ Convertimos las funciones anteriores a funciones flecha

const saludarFlecha = () => {
  console.log("Hola, mundo (con funcion flecha)");
};

const sumaFlecha = (a, b) => a + b;

const saludarPersonaFlecha = (nombre) => "Hola, " + nombre;

// Probamos las funciones flecha
saludarFlecha();
console.log("Suma con flecha:", sumaFlecha(10, 4));
console.log(saludarPersonaFlecha("Julai"));
