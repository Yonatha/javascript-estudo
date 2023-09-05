/* Questão 5: Dimitri e Monique foram à feira, cada um comprou e colocou na sua 
respectiva sacola as frutas que mais gostava. 

Na sacola de Dimitri tinha:
    12 bananas que ele comprou por R$ 2,50; 
    1 abacaxi que custou 2,78;
    5 maçãs que custou 6,94.

Já na sacola de Monique tinha:
    10 bananas que custaram R$ 2,00;
    6 tomates que foi R$ 5,00, 
    2 abacaxi R$ 5,00 
    10 morangos que custaram R$10,00. 

 Implemente um algoritmo que mostre quanto cada um gastou.
 */

var sacolaCompras = [
    {
        nome: "Dimitri",
        sacola: [
            { fruta: "banana", preco: 2.50, quantidade: 12 },
            { fruta: "abacaxi", preco: 2.78, quantidade: 1 },
            { fruta: "maçãs", preco: 6.94, quantidade: 5 }
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

// Total realizado da compra de Dimitri:
var dimitriSacola = sacolaCompras.find(function (pessoa) {
    return pessoa.nome === "Dimitri";
});

var precoTotalDimitri = dimitriSacola.sacola.reduce(function (total, item) {
    return total + (item.preco);
}, 0);

// total realizado da compra de Monique:

var MoniqueSacola = sacolaCompras.find(function (pessoa) {
    return pessoa.nome === "Monique";
});

var precoTotalMonique = MoniqueSacola.sacola.reduce(function (total, item) {
    return total + (item.preco);
}, 0);

console.log('O total da compra de Dimitri foi de R$' + precoTotalDimitri.toFixed(2));
console.log('O total da compra de Monique foi de R$' + precoTotalMonique.toFixed(2));