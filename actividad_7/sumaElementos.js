// Mediante una función y dado un arreglo encontrar la suuma d elos elementos
//Mediante una función realizar  la suma de los elementos de un arreglo

const numbers = [1, 2, 3 , 4, 10, 11];

function sumNumbers (numbers){
    let suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }

    return suma
}

console.log(sumNumbers(numbers))

