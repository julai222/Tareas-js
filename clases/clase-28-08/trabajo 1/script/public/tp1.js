let opciones = ["piedra", "papel", "tijera"];

let jugador = prompt(" Elige: piedra, papel o tijera").toLowerCase();

if (!opciones.includes(jugador)) {
  alert(" Esa no es una opción válida. Intentá de nuevo.");
} else {
  let computadora = opciones[Math.floor(Math.random() * opciones.length)];

  alert(" La computadora eligió: " + computadora);

  let resultado = "";

  switch (jugador) {
    case "piedra":
      if (computadora === "piedra") resultado = " Empate!";
      else if (computadora === "tijera") resultado = " Ganaste! La piedra aplasta tijera.";
      else resultado = " Perdiste! El papel envuelve la piedra.";
      break;

    case "papel":
      if (computadora === "papel") resultado = " Empate!";
      else if (computadora === "piedra") resultado = "Ganaste! El papel envuelve la piedra.";
      else resultado = " Perdiste! La tijera corta el papel.";
      break;

    case "tijera":
      if (computadora === "tijera") resultado = " Empate!";
      else if (computadora === "papel") resultado = " Ganaste! La tijera corta el papel.";
      else resultado = " Perdiste! La piedra aplasta tijera.";
      break;
  }

  alert(resultado);
  console.log(`Jugador: ${jugador} | Computadora: ${computadora} | Resultado: ${resultado}`);
}
