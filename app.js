const celsiusEl=document.getElementById("celsius");
const fahrenheitEl=document.getElementById("fahrenheit");
const kelvinEl=document.getElementById("kelvin");

celsiusEl.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        let celsius =parseFloat(celsiusEl.value);
        let kelvin=celsius + 273.15;
        let fahrenheit=celsius_to_fahrenheit(celsius);
        kelvinEl.value=kelvin.toFixed(2);
        fahrenheitEl.value=fahrenheit.toFixed(2);
    }
});

kelvinEl.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        let kelvin= parseFloat(kelvinEl.value);
        let celsius= kelvin - 273.15;
        let fahrenheit=celsius_to_fahrenheit(celsius);
        celsiusEl.value=celsius.toFixed(2);
        fahrenheitEl.value=fahrenheit.toFixed(2);
    }
})

fahrenheitEl.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        let fahrenheit=parseFloat(fahrenheitEl.value);
        let celsius=fahrenheit_to_celsius(fahrenheit);
        let kelvin=celsius;
        kelvinEl.value=kelvin.toFixed(2);
    }
})

function celsius_to_fahrenheit(celsius){
    return (celsius * 1.8)+32
}
function fahrenheit_to_celsius(fahrenheit){
    return (fahrenheit - 32)/1.8
}