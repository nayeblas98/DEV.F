// Programa para covertir temperaturas de celsius a Fahrenheit y/o viceversa

function celsius(gradesFahrenheit) {
    let totalCelsius = (gradesFahrenheit-32) * 5/9;
    return totalCelsius 
}

function fahrenheit(gradesCelsius) {
    let totalFahrenheit = gradesCelsius * 9/5 + 32;
    return totalFahrenheit
}


console.log(celsius(40).toFixed(2) + '°C.')
console.log(fahrenheit(38).toFixed(2)+ '°F.')
