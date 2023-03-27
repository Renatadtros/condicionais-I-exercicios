//# Exercício 2

function verificaInfo(idade,completouEnsinoMedio,cursaFacul) {
    if (idade >= 18 ) {
        console.log("A pessoa é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }
    if (completouEnsinoMedio === true) {
        console.log("Você terminou o Ensino Médio, Parabéns.");
    }else {
        console.log("Você não terminou o Ensino Médio, Sinto muito.");
    }
    if (cursaFacul === true) {
        console.log("Você está na Faculdade.");
    }else {
        console.log("Você não cursa nenhuma Faculdade.");
    }
}
verificaInfo(18,true,false); //aqui estou testando o codigo.

//Linha 3:Criei uma função chamada verificaInfo que recebeu três parâmetros: idade, completouEnsinoMedio e cursaFacul.
//Linha 4: A função vai verificar esses parâmetros usando if e imprimir mensagens diferentes no console, dependendo dos valores que são passados como argumento quando a função é chamada.
//por ultimo testei o código chamando a função e colocando valores aleatórios para validar os argumentos.