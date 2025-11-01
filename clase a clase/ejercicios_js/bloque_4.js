// 1️ Declarar un array con 5 frutas y mostrarlo en consola
let frutas = ["manzana", "banana", "pera", "uva", "naranja"];
console.log("Lista de frutas:", frutas);


// 2️ Usar un for para mostrar cada fruta
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}


// 3️ Crear un array con 5 numeros y mostrar la suma total
let numeros = [2, 5, 8, 3, 10];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
}

console.log("La suma total es:", suma);


// 4️ Pedir un numero y generar su tabla de multiplicar con un for
let numero = prompt("Ingrese un número para ver su tabla de multiplicar:");

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}


// 5️ Usar while para contar de 1 a 10
let contador = 1;

while (contador <= 10) {
  console.log("Contando:", contador);
  contador = contador + 1;
}
