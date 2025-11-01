// 1️ 
function saludar() {
  console.log("Hola mundo");
}

saludar();


// 2️ 
function suma(a, b) {
  return a + b;
}

let resultado = suma(5, 3);
console.log("La suma es:", resultado);


// 3️ 
function saludarPersona(nombre) {
  return "Hola, " + nombre;
}

let saludo = saludarPersona("Julai");
console.log(saludo);


// 4️ 

const saludarFlecha = () => {
  console.log("Hola, mundo (con funcion flecha)");
};

const sumaFlecha = (a, b) => a + b;

const saludarPersonaFlecha = (nombre) => "Hola, " + nombre;

saludarFlecha();
console.log("Suma con flecha:", sumaFlecha(10, 4));
console.log(saludarPersonaFlecha("Julai"));
