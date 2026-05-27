let produtos = [];
let somaProdutos = 0;
let preco;
 let nome;
for (let i = 0; i < 5; i++) {
   

    while (true) {
        nome = prompt("Digite o nome do produto: ")

        //Trim remove os espaços da variável!
        if (nome.trim() == "") {

            alert("Digite um produto válido")   
        } else {
            break; // Vai parar o lopping 
        }

    }


    

    while (true) {
        preco = Number(prompt("digite o preço do produto"))
        if (isNaN(preco)) {

            alert("Você não digitou um número")

        } else {break;}

    }

    produtos[i] = { 
        nomeProduto: nome, 
        precoProduto: preco,

    }

} 

console.log(produtos    )

// \n quebra de linha do alert
let mensagem = "=== PRODUTOS ===\n\n"

for (let i = 0; i < produtos.length; i++) {
    console.log(typeof produtos[i].precoProduto)
    somaProdutos = somaProdutos + produtos[i].precoProduto
    mensagem += "Produto: " + produtos[i].nomeProduto + "\n";
    mensagem += "Preço: R$" + produtos[i].precoProduto + "\n";
    mensagem += "===================== \n" 
} 

mensagem += "A Soma dos produtos é" + somaProdutos
alert(mensagem);