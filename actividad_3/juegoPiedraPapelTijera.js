//Juego de piedra, papel o tijera con if//

var player_1 = prompt("Jugador 1: piedra, papel o tijera");
var player_2 = prompt("Jugador 2: piedra, papel o tijera");

if (player_1 == "piedra" && player_2 == "papel"){
    alert("Jugador 2 es el ganador");
} else if (player_1 == "piedra" && player_2 == "tijera"){
    alert("Jugador 1 es el ganador");
} else if (player_1 == "papel" && player_2 == "piedra"){
    alert("Jugador 1 es el ganador");
} else if (player_1 == "papel" && player_2 == "tijera"){
    alert("Jugador 2 es el ganador");
} else if (player_1 == "tijera" && player_2 == "piedra"){
    alert("Jugador 2 es el ganador");
} else if (player_1 == "tijera" && player_2 == "papel"){
    alert("Jugador 1 es el ganador");
} else if (player_1 == player_2){
    alert("Empate");
} else {
    alert("Error al ingresar dato");
}


//Juego de piedra, papel o tijera con switch//

var player_1 = prompt("Jugador 1: piedra, papel o tijera");
var player_2 = prompt("Jugador 2: piedra, papel o tijera");

switch (true){
    case player_1 == "piedra" && player_2 == "papel":
        alert("Jugador 2 es el ganador");
    break;

    case player_1 == "piedra" && player_2 == "tijera":
        alert("Jugador 1 es el ganador");
    break;

    case player_1 == "papel" && player_2 == "piedra":
        alert("Jugador 1 es el ganador");
    break;

    case player_1 == "papel" && player_2 == "tijera":
        alert("Jugador 2 es el ganador");
    break;
    
    case player_1 == "tijera" && player_2 == "piedra":
        alert("Jugador 2 es el ganador");
    break;

    case player_1 == "tijera" && player_2 == "papel":
        alert("Jugador 1 es el ganador");
    break;

    case player_1 == player_2:
        alert("Empate");
    break;

    default:
        alert("Error al ingresar dato");     
} 