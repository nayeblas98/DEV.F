//Determinar si una palabra es un palíndromo

function palindromo(palabra) {
    let splitPalabra = palabra.split('');
    let reversePalabra = splitPalabra.reverse();

    return palabra == reversePalabra.join('');

}


console.log(palindromo('madam'))
console.log(palindromo('computadora'))
