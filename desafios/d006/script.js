function convert() {
    let res = document.getElementById("res")
    let celsius = prompt("Digite uma temperatura em *C (Celsius)")  
    let kelvin = Number(celsius) + 273.15
    let fahrenheit = (Number(celsius) * 9 / 5) + 32
    
    res.innerHTML = `<h1>A temperatura de °${celsius} corresponde a...</h1></br>`
    res.innerHTML += `${kelvin.toFixed(2)}°K (Kelvin) </br>`
    res.innerHTML += `</br>`
    res.innerHTML += `${fahrenheit.toFixed(2)}°F (Fahrenheit)`
}