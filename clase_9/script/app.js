//capturar elementos de dom

const contenedor= document.getElementById("contenedor");
document.getElementById("contenedor");
//vemos si lo hicimos bien :)
console.log(contenedor);
//moderno
const otrocontenedor = document.querySelector("#otrocontenedor");
console.log(otrocontenedor);
// api classlist - conecta js cpm html
otrocontenedor.classList.add("azul")