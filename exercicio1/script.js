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
















/*fiz uma função chamada verificarPar que recebe um parâmetro num.
na linha 5 tem a estrutura condicional if que ta vendo se num é divisível por 2 sem deixar resto, ou seja se é um número par.

linha 10 solicita ao usuário que digite um número. O prompt retorna uma string que é então convertida em um número inteiro usando a função parseInt e atribuído a variável numero.

linha 11 chama a função verificarPar() com o argumento numero e armazena o resultado na variável resultado.
if (resultado) { - esta é outra estrutura condicional if que verifica se resultado é verdadeiro.
console.log(resultado); - se resultado for verdadeiro (ou seja, se verificarPar() retornou a string "O número é par"), esta instrução imprime a string "O número é par" no console.
} else { - se resultado for falso (ou seja, se verificarPar() não retornou nada), esta instrução imprime a string "O número é ímpar" no console.
console.log("O número é ímpar"); - esta instrução é executada se resultado for falso, imprimindo a string "O número é ímpar" no console.*/