/*Dado a seguinte array de cores [“Preto”,”Rosa”,”Azul”,”Verde”,”Vermelho”,”Amarelo”,”Branco”], 
Desenvolva um código que imprima na tela em ordem alfabética cada uma das cores e que apresente 
a frase Cor favoritas ao lado da sua cor favorita, exemplo:

Amarelo
Azul
Branco
Vermelho
-> Cor favoritas: Preto
-> Cor favoritas: Verde

Obs: Implemente os testes unitários
*/

function verificarCorFavorita(cores, coresFavoritas) {
    /*
    TODO Fabio remover essas variaveis pois elas são passadas como argumento da função
    const cores = ["Preto", "Rosa", "Azul", "Verde", "Vermelho", "Amarelo", "Branco"];
    const coresFavoritas = ["Preto","Verde"];
    */

    let coresFavoritasEncontradas = []
    for (var i = 0; i < cores.sort().length; i++) {
        if (coresFavoritas.includes(cores[i]))
            coresFavoritasEncontradas.push(cores[i])
    }

    return coresFavoritasEncontradas
};

module.exports = verificarCorFavorita;