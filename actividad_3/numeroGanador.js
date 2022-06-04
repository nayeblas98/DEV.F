//Si el usuario ingresa el número 1000, se imprime "Ganaste un premio"//

var num = Number(prompt('Ingrese un número'));

if (num == 1000) {
    document.write('¡Ganaste un premio!')
} else {
    document.write('Lo sentimos, sigue participando');
}