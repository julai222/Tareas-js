// 1️ Pedir dos numeros y mostrar cual es mayor
let numero1 = prompt("Ingrese el primer numero:");
let numero2 = prompt("Ingrese el segundo numero:");

if (numero1 > numero2) {
  console.log("El primer numero es mayor");
} else if (numero2 > numero1) {
  console.log("El segundo numero es mayor");
} else {
  console.log("Los dos numeros son iguales");
}

// 2️ Ver si una persona es mayor o menor de edad
let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}

// 3️ Ver si el dia es laboral o fin de semana
let dia = prompt("Ingrese un dia de la semana (por ejemplo: lunes):");

if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes") {
  console.log("Es un día laboral");
} else if (dia == "sabado" || dia == "domingo") {
  console.log("Es fin de semana");
} else {
  console.log("Ese no parece ser un dia");
}

// 4️ Calculadora simple
let n1 = prompt("Ingrese el primer numero:");
let operador = prompt("Ingrese el operador (+, -, *, /):");
let n2 = prompt("Ingrese el segundo numero:");

n1 = Number(n1);
n2 = Number(n2);

if (operador == "+") {
  console.log("Resultado:", n1 + n2);
} else if (operador == "-") {
  console.log("Resultado:", n1 - n2);
} else if (operador == "*") {
  console.log("Resultado:", n1 * n2);
} else if (operador == "/") {
  console.log("Resultado:", n1 / n2);
} else {
  console.log("Operador no valido");
}
