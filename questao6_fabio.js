/* 
Questão 6: Ainda sobre a questão anterior, Dimitri e Monique colocaram as suas sacolas em um único 
carrinho de compras. Desenvolva um algoritmo que junte as duas sacolas no carrinho, imprima na tela 
cada um dos produtos contidos no carrinho da seguinte forma

Produto: ? 
Preço: R$ ? 
Quantidade: ?

E no final apresente o total a ser pago e a quantidade de frutas adicionadas. 
Obs: Implemente os testes unitários.

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

 var sacola_dimitri = [
    {produto: 'banana', preco: 2.5, quantidade: 12},
    {produto: 'abacaxi', preco: 2.78, quantidade: 1},
    {produto: 'maca', preco: 6.94, quantidade: 5}
]

var sacola_monique = [
    {produto: 'banana', preco: 2, quantidade: 10},
    {produto: 'tomate', preco: 5, quantidade: 6},
    {produto: 'abacaxi', preco: 5, quantidade: 2 },
    {produto: 'morango', preco: 10, quantidade: 10}
]

const carrinho_compras = sacola_dimitri.concat(sacola_monique);

var total_pago_carrinho = carrinho_compras.reduce(Total_Pago, 0);
function Total_Pago(total_pago_carrinho, item){
    return total_pago_carrinho + (item.preco)
}

var quantidade_total_carrinho = carrinho_compras.reduce(quantidade_Total, 0);
function quantidade_Total(quantidade_total_carrinho, item){
    return quantidade_total_carrinho + (item.quantidade)
}

const novaLista = carrinho_compras.reduce((soma, cur) => {
    let produto = cur.produto;
    let repetido = soma.find(Element => Element.produto === produto)
    if (repetido) repetido.preco += cur.preco;
    else soma.push(cur);
    return soma;
    }, []);


console.log(novaLista)
console.log('Total a ser pago no carrinho foi de R$:'+ total_pago_carrinho);
console.log(`Quantidade de frutas no carro é de: ${quantidade_total_carrinho} unidades.`)