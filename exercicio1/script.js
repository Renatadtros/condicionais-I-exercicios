/* Exercício 1
Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.*/

function verificarPar(num) {
    if (num % 2 === 0) {
        return "O número é par";
    }
}

const numero = parseInt(prompt("Digite um número:"));
const resultado = verificarPar(numero);

if (resultado) {
    console.log(resultado);
} else {
    console.log("O número é ímpar");
}
