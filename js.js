
let numerosDigitados = [];
for (let i = 0; i < 5; i++) {

    while (true) {
    //Este while se repetirá enquanto essa condição for verdadeira, logo caso não seja (else) é necessário "brecar" ela.
    while (true) { 
        numero = Number(prompt("Digite um número"))

        if (isNaN(numero)
        ) {
            alert("Você não digitou um número")

        } else {
            break;
            break;// Break vai parar o lopping while
        }
    }
    numerosDigitados[i] = { numeroInserido: numero }
@@ -23,6 +23,6 @@ for (let i = 0; i < 5; i++) {
    let mensagem = "Os números inseridos foram; \n"
for (let i = 0; i < numerosDigitados.length; i++) {

    mensagem += "\n" + numerosDigitados[i].numeroInserido + "\n"
    mensagem += "\n" + numerosDigitados[i].numeroInserido + "\n" // "\n" Serve para quebrar uma linha na mensagem exibida.

} alert(mensagem)