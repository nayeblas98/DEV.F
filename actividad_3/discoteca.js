//Ingresar a la discoteca usando IF//

var name = prompt("Ingresa tu nombre");
var age = Number(prompt("Ingresa tu edad"));

if (age >= 18){
    if ((name === "Mario") || (name === "Carlos")){
        console.log("Puede ingresar a la zona VIP");
} else {
    console.log("Puede entrar a la discoteca")
}
}
else {
    alert("No puede ingresar a la discoteca");
}