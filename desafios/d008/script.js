
function desconto() {
    let resposta = document.getElementById("res")
    let produto = prompt("Qual é o produto que você está comprando?")
    let preco = prompt("Qual é o preço do " + produto)
    let desconto = Number(preco) * (10 / 100)
    let newpreco = Number(preco) - desconto

    resposta.style.marginTop = "2em"
    resposta.innerHTML = `<h1>Calculando desconto de 10% para ${produto}</h1>`
    resposta.innerHTML += `<p>O preço original era de <strong>R$${preco}<strong></p>`
    resposta.innerHTML += `<p>Você acaba de ganhar <strong>R$ ${desconto.toFixed(2)}</strong> de desconto (-10%)</p>`
    resposta.innerHTML += `No fim, você vai pagar <strong>R$ ${newpreco.toFixed(2)} </strong>`
}