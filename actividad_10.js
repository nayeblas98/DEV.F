/*Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia
 y regresa como resultado, sus respectivas edades y la diferencia de edad.*/

 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];

  function agesDifferences(family) {
    ages = family.map(function (person) {
        return person.age;
    })

    youngest = ages.sort(function (a, b) {
        return a - b
    })[0]
    oldest = ages.sort(function (a, b) {
        return b - a
    })[0]

    // Regresa como resultado, sus respectivas edades y la diferencia de edad. 
    console.log(`La persona más joven tiene ${youngest} años, y el de mayo edad tiene ${oldest} años.`);
    console.log(`La diferencia entre estas dos edades es de ${oldest - youngest} años.`);
}

agesDifferences(Family);

/**
 * Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 
 */

const numbers = [ 1, -4, 12, 0, -3, 29, -150];

function sumArray (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }   
    }
    return sum
}

console.log(sumArray (numbers));


//Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

  /*Ejemplo

  La matriz es la lista original. Los números que faltan son:

Los números que faltan en arr son [4,6]
*/

matriz = [7,2,5,3,5,3]
br = [7,2,5,4,6,3,5,3]

function number (matriz,br) {
  let arr = []
  let shift = 0
    for (let i = 0; i < matriz.length; i++){
        while (!(matriz[i] == br[i+shift])) {
            arr.push(br[i+shift])
            shift++
        }
    }
    return arr
}

console.log(number (matriz,br))

/**
 * Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir y el valor sea las ocurrencias
 * que encontró dentro de ese arreglo.  
 * Resultado esperado:
 *  {
      one: 4,
      two: 3,
      three: 1,
      ...
    }
 */

const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];
function sorter(arr){
  let justOne=[] 
  const newArray={}
  var j =0
  for(var i=0;i<arr.length;i++){
      if(!justOne.includes(arr[i])){    
          justOne.push(arr[i])  
          num = arr.filter(item=>item==arr[i]) 
          Object.defineProperty(newArray,justOne[j], {
              enumerable: true,
              writable: true,
              value: num.length
            })
          j++
      }
  }
 
  return(newArray)
}
console.log(sorter(arr))




 /**
  * Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
  * Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:
  * const a = [1,2,3]
  * const b = [a,b,c]
  * 
  * Resultado esperado:
  * 
  * 
  * [1,a,2,b,3,c]
  */

const a = [1,2,3]
const b = ['a','b','c']
  

function combination(a,b){
  let salida=[]
  for(let i=0; i<a.length;i++){
      salida.push(a[i])
      salida.push(b[i])
    }
  return salida
 }

 console.log(combination(a,b))