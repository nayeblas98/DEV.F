// Imprimir los valores mayores a 3 del array

let numbers = [1,4,6,10,22,55,46,2,5,0]

for(i = 0; i < numbers.length; i++){
    if (numbers[i] > 3){
        console.log(numbers[i])
    }
}

//Agregar elementos a un array con ciclo while

let cities = [];
let i = 0

while(i < 5){
    let inputCities = prompt('Ingrese una ciudad');
    cities.push(inputCities);
    i++
}

console.log(cities)

//Iterar el array anterior con el ciclo for e imprima los elementos ordenados

let newArray = cities.sort();

for(let i = 0; i <= newArray.length; i++){
    console.log(newArray[i]);
}

console.log(newArray)
