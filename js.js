let numero = []

let numerosDigitados = [];
for (let i = 0; i < 5; i++) {

    while (true) {
        numero = Number(prompt("Digite um número"))

        if (isNaN(numero)
        ) {
            alert("Você não digitou um número")

        } else {
            break;
        }
    }
    numerosDigitados[i] = { numeroInserido: numero }


} 

    let mensagem = "Os números inseridos foram; \n"
for (let i = 0; i < numerosDigitados.length; i++) {

    mensagem += "\n" + numerosDigitados[i].numeroInserido + "\n"

} alert(mensagem)