// 1️ 
let persona = {
  nombre: "Julai",
  edad: 17,
  ciudad: "San Martin de los Andes"
};

console.log("Objeto persona:", persona);


// 2️ 
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);


// 3️ 
let personas = [
  { nombre: "Ana", edad: 25, ciudad: "Buenos Aires" },
  { nombre: "Luis", edad: 30, ciudad: "Cordoba" },
  { nombre: "Maria", edad: 28, ciudad: "Mendoza" }
];

for (let i = 0; i < personas.length; i++) {
  console.log("Nombre:", personas[i].nombre);
}


// 4️ 
function mostrarPersona(p) {
  console.log("Hola, soy " + p.nombre + " y tengo " + p.edad + " años.");
}

mostrarPersona(persona);

mostrarPersona(personas[1]);
