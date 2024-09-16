function somando() {
    let produto = prompt("Que produto você está comprando?")
    let preco = prompt(`Quando custa o ${produto} que você está comprando ?`)
    let dg = prompt(`Qual foi o valor que você deu para pagar ${produto}`)
    let res = Number(preco) - Number(dg)

    alert(`Você comprou ${produto} que custou R$ ${preco}
        Deu ${dg} em dinheiro e vai receber ${res} de troco.
        Volte sempre!`)

}