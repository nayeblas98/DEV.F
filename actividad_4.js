// Usar while para mostrar los solo números multiplos de 5 hasta el número que ingresa el usuario

var num = Number(prompt('Digite un múmero'));
let i = 1;

while (i <= num){
    if (i % 5 == 0){ 
        console.log(i);
    }
    i++;
}


//Usar do while para mostrar solo los números multiplos de 5  hasta el número que ingresa el usuario

var num = Number(prompt('Digite un múmero'));
let counter = 1;

do{
    if(counter % 5 == 0){
        console.log(counter)
    }
    counter++;
}while(counter <= num);


//Usar for para mostrar los números impares del 1 al 50

for(let i = 1; i <= 50; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}