let nomePersonagem;
let nomeObra;
let categoria;
let personagem; 

while (true) {
    nomePersonagem = prompt("Digite o nome do personagem:");

    if (nomePersonagem.trim() !== "") {
        break;
    }

    alert("Digite um nome válido!");
}

while (true) {
    nomeObra = prompt("Digite o nome da obra:");

    if (nomeObra.trim() !== "") {
        break;
    }

    alert("Digite uma obra válida!");
}

while (true) {
    categoria = prompt("Digite o tipo da obra:");

    if (categoria.trim() !== "") {
        break;
    }

    alert("Digite um tipo válido!");
}

personagem = { //Atribuindo, nome, tipo e obra ao um único objeto.
    nome: nomePersonagem, 
    obra: nomeObra,
    tipo: categoria
};

alert( `${personagem.nome} aparece na ${personagem.tipo} "${personagem.obra}".`);