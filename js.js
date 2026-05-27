let produtos = [];
let somaProdutos = 0;
let preco;
let nome;

let precoMenor = {
    valor: 0,
    produto: 0,
}

let precoMaior = {
    valor: 0,
    produto: 0,
}

for (let i = 0; i < 5; i++) {

    while (true) {
        nome = prompt("Digite o nome do produto: ")

        if (nome.trim() == "") {
            alert("Digite um produto válido")
        } else {
            break;
        }
    }

    while (true) {
        preco = Number(prompt("Digite o preço do produto"))

        if (isNaN(preco)) {
            alert("Você não digitou um número")
        } else {
            break;
        }
    }

    if (preco < precoMenor.valor || precoMenor.valor === 0) {
        precoMenor.valor = preco
        precoMenor.produto = i
    }

    if (preco > precoMaior.valor || precoMaior.valor === 0) {
        precoMaior.valor = preco
        precoMaior.produto = i
    }

    produtos[i] = {
        nomeProduto: nome,
        precoProduto: preco,
    }
}

let mensagem = "=== PRODUTOS MAIS CAROS QUE R$15 ===\n\n"

for (let i = 0; i < produtos.length; i++) {

    somaProdutos = somaProdutos + produtos[i].precoProduto

    if (produtos[i].precoProduto > 15) {

        mensagem += "Produto: " + produtos[i].nomeProduto + "\n";
        mensagem += "Preço: R$" + produtos[i].precoProduto.toFixed(2) + "\n";
        mensagem += "=====================\n";
    }
}

mensagem += "\nA soma dos produtos é: R$" + somaProdutos.toFixed(2)

alert(mensagem);

alert(`O preço maior foi R$${precoMaior.valor.toFixed(2)}, e o preço menor foi R$${precoMenor.valor.toFixed(2)}`)