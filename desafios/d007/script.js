let cot = prompt("Antes de mais nada. Quanto está a cotação do dólar atualmente?")

function convert() {
    let resposta = document.getElementById("res")
    let r$ = prompt("Quantos R$ você tem na carteira?")
    let dolar = Number(r$) / Number(cot)

    resposta.innerHTML = `Você tem <strong>R$${r$}</strong> na sua carteira, convertendo este valor para a cotação do dólar atual que é de <strong>${cot}</strong> você tem <strong>U$${dolar.toFixed(2)}</strong> `
}