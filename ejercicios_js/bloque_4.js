// 1️ 
let frutas = ["manzana", "banana", "pera", "uva", "naranja"];
console.log("Lista de frutas:", frutas);


// 2️ 
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}


// 3️ 
let numeros = [2, 5, 8, 3, 10];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
}

console.log("La suma total es:", suma);


// 4️
let numero = prompt("Ingrese un número para ver su tabla de multiplicar:");

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}


// 5️ 
let contador = 1;

while (contador <= 10) {
  console.log("Contando:", contador);
  contador = contador + 1;
}
