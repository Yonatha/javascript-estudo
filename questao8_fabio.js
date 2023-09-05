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

// var coresOrdemAlfabetica = cores.sort();
// console.log(coresOrdemAlfabetica)


function favorita() {
    const cores = ["Preto", "Rosa", "Azul", "Verde", "Vermelho", "Amarelo", "Branco"];
    const corFavorita = "Amarelo";

    for (var i = 0; i < cores.length; i++) {
        if (cores[i] == corFavorita) {
            console.log(`Opa...achei minha cor ${cores[i]}`)
            break
        }
    }
};

var resultado = favorita();

// criando um modulo para exportar a função
module.exports = favorita;