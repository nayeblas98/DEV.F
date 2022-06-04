//Elegir entre dos números cual es el menor//

var num1 = Number(prompt('Digite un número'));
var num2 = Number(prompt('Digite otro número'));

if (num1 < num2){
    alert(`El número ${num1} es menor que el número ${num2}.`);
} else {
    alert(`El número ${num2} es menor que el número ${num1}.`);
}
