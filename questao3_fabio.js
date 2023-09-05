/*Implemente um algoritmo que receba a idade de uma pessoa e apresente na tela se ela ainda não tem idade para votar,
se ela é obrigada a votar e se o voto dela é opcional.
*/

/* Observações:
    Menor que 16 anos, NÃO tem direito a votar;
    Maior que 16 anos e menor que 18 anos voto é FACULTATIVO;
    Maior que 18 anos o voto é OBRIGATÓRIO;
    Maior que 70 anos o voto é FACULTATIVO.
*/

function direitoVoto(idade) {
    if (idade < 16) {
        return 'Não tem direito ao voto'
    } else if ((idade >= 16) && (idade < 18) || (idade >= 70)) {
        return 'Voto é facultativo'
    } else if (idade >= 18) {
        return 'Voto obrigatório'
    }
}

//var resultado = direitoVoto(15);
//console.log(resultado)

// criando modulo para exportar a função:
module.exports = direitoVoto;
