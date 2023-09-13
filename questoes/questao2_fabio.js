/*Questão 2: Implemente um algoritmo que dada a idade de um nadador classifica-o 
em uma das seguintes categorias e imprima-a na tela:

infantil A = 5 - 7 anos
infantil B = 8-10 anos
juvenil A = 11-13 anos
juvenil B = 14-17 anos
adulto = maiores de 18 anos

const faixa_classificacao = {
    infantilA: (idade >= 5 && idade <= 7),
    infantilB: (idade >= 8 && idade <= 10),
    juvenilA: (idade >= 11 && idade <= 13),
    juvenilB: (idade >= 14 && idade <= 17),
    adulto: (idade >= 18)
}
*/

function faixa_etaria(idade) {
    if ((idade >= 5) && (idade <= 7)) {
        return "Infantil A";
    } else if ((idade >= 8) && (idade <= 10)) {
        return "Infantil B";
    } else if ((idade >= 11) && (idade <= 13)) {
        return "Juvenil A";
    } else if ((idade >= 14) && (idade <= 17)) {
        return "Juvenil B";
    } else if (idade >= 18) {
        return "Adulto"
    } else {
        return "Idade fora da faixa permitida"
    }
}
resultado = faixa_etaria(12)
console.log(resultado)

// Criar o modulo para exportar a função:
module.exports = faixa_etaria;
