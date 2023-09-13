/* Questão 14: Implemente um algoritmo que possibilita que você adicione os 5 filmes ou seriados 
que você mais gostou de assistir. Esse código deve impedir que registros sejam informados em duplicidade.
*/

function meusFavoritos() {
    let filmesSeriesFavoritos = [];

    console.log('Informe CINCO filmes e/ou series favoritos');
    console.log('------------------------------------------------------')
    for (let i = 0; i <= 5; i++) {
        var readline = require('readline-sync');
        var adicionar = readline.question(`Informe o seu filme ou serie favorito: `);
        if (!filmesSeriesFavoritos.includes(adicionar)) {
            filmesSeriesFavoritos.push(adicionar);
        } else {
            console.log("Elemento já existe na sua lista")
        }
    }
    console.log('------------------------------------------------------')

    return filmesSeriesFavoritos
}

let resultado = meusFavoritos();
console.log(resultado)
