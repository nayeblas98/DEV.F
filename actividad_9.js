/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo: */

 const arr = [3,4,6,1,5,2,9,10,23,12]

 function findNumbers()
{
    secondLowestNumber = arr.sort(function (a,b){return a-b})[1];
    secondHighestNumber = arr.sort(function (a,b){return b-a})[1];

    console.log(secondLowestNumber, secondHighestNumber);
}

findNumbers();





/*Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name" para que devuelva algo así: 

            ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/

const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

function myFun(object)
{
    result = object.map(function(obj){
        return String(obj.a + obj.b) +" " + obj.name;
        
    });

    console.log(result);
}

console.log(myFun(coleccion));