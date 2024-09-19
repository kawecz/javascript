function med() {
    let result = document.getElementById("res")
    result.innerHTML = ""
    let metros = prompt("Digite uma distância em metros (m)")
    let km = Number(metros) / 1000
    let hm = Number(metros) / 100
    let dam = Number(metros) / 10
    let dm = Number(metros) * 10
    let cm = Number(metros) * 100
    let mm = Number(metros) * 1000

   
   result.innerHTML =`<h1>A distancia de ${metros} metros correspondem a:</h1></br>`
    result.innerHTML += `<h3>${km.toFixed(3)} quilômetros (km)</h3> </br>`
    result.innerHTML += `<h3>${hm.toFixed(3)} hectômetros (hm)</h3></br>`
    result.innerHTML += `<h3>${dam.toFixed(3)} decâmetros (hm)</h3></br>`
    result.innerHTML += `<h3>${dm.toFixed(3)} decímetros (hm) </h3></br>`
    result.innerHTML += `<h3>${cm.toFixed(3)} centímetros (hm)</h3></br>`
    result.innerHTML += `<h3>${mm.toFixed(3)} milímetros (hm)</h3>`

}