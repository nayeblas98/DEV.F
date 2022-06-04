//Elegir entre tres números cual es el mayor//

var num1 = Number(prompt('Digite un número'));
var num2 = Number(prompt('Digite otro número'));
var num3 = Number(prompt('Digite otro número'));

if (num1 > num2 && num1 > num3){
    alert(`El número ${num1} es mayor que el número ${num2} y ${num3}.`);
} else if(num2 > num1 && num2 > num3) {
    alert(`El número ${num2} es mayor que el número ${num1} y ${num3}.`);
} else {
    alert(`El número ${num3} es mayor que el número ${num1} y ${num2}.`);
}
