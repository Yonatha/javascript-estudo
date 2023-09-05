/*Questão 7: Chegando ao caixa, Monique e Dimitri verificam se esqueceram de comprar laranjas. 
Desenvolva o código que imprima na tela se eles esqueceram ou não de comprar laranja. 

Obs: Implemente os testes unitários

*/

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

var laranjasEsquecidas = false;

sacolaCompras.forEach(function (pessoa) {
    var temLaranjas = pessoa.sacola.some(function (item) {
        return item.fruta === "laranja";
    })
    if (!temLaranjas) {
        console.log(pessoa.nome + "Esqueceu de comprar laranjas.");
        laranjasEsquecidas = true;
    };

});

if (!laranjasEsquecidas) {
    console.log("Ninguem esqueceu de comprar laranjas.");
}