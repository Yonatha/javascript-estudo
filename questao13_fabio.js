/* Questão 13: Crie 4 métodos onde cada um receba dois parâmetros e realize, 
respectivamente, as seguintes operações aritméticas

a) - Somar
b) - Subtrair
c) - Multiplicar
d) - Dividir
*/

function adicionarParametros() {
    let parametros = [];
    soma = 0;
    subtracao = 0;
    multiplicacao = 0;
    divisao = 0;

    for (let i = 0; i < 2; i++) {
        var readline = require('readline-sync');
        var valor = readline.questionInt('Insira o valor: ');
        parametros.push(valor);
        soma += valor;
        subtracao = parametros[0] - parametros[1];
        multiplicacao = parametros[0] * parametros[1];
        if (parametros[1] != 0) {
            divisao = (parametros[0] / parametros[1]).toFixed(2)
        } else {
            divisao = "Operação inválida."
            console.log(divisao)
        }
    }
};

let resultado = adicionarParametros()
console.log(`Os resultados para cada operação aritmética: \nSoma = ${soma} \nSubtração = ${subtracao} \nMultiplicação = ${multiplicacao} \nDivisão = ${divisao} `)