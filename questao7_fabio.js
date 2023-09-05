/*Questão 7: Chegando ao caixa, Monique e Dimitri verificam se esqueceram de comprar laranjas. 
Desenvolva o código que imprima na tela se eles esqueceram ou não de comprar laranja. 

Obs: Implemente os testes unitários

*/

// TODO Fábio mover esse mock sacolaCompras para o teste
var sacolaCompras = [
    {
        nome: "Dimitri",
        sacola: [
            { fruta: "banana", preco: 2.50, quantidade: 12 },
            { fruta: "abacaxi", preco: 2.78, quantidade: 1 },
            { fruta: "maçãs", preco: 6.94, quantidade: 5 },
            { fruta: "laranja", preco: 6.94, quantidade: 5 }
        ]
    },
    {
        nome: "Monique",
        sacola: [
            { fruta: "banana", preco: 2, quantidade: 10 },
            { fruta: "tomate", preco: 5, quantidade: 6 },
            { fruta: "abacaxi", preco: 5, quantidade: 2 },
            { fruta: "morango", preco: 10, quantidade: 10 }
        ]
    },
]

function verificarProdutoEsquecido(sacolaCompras, nomeProduto) {
    sacolaCompras.forEach(function (pessoa) {
        const produto = pessoa.sacola.some((item) => item.fruta === nomeProduto)
        if (!produto)
            return pessoa.nome + `Esqueceu de comprar ${nomeProduto}.`;
    });
}

module.exports = verificarProdutoEsquecido