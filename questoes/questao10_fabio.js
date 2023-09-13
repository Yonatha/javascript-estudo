/*Questão 10: Considere objeto de correntistas


A) Implemente uma função de depositar, a qual deve incrementar o valor do saldo;
B) Implemente uma função de sacar, a qual deve subtraia o valor do saldo;
C) Implemente uma função comprar que deve adicionar o valor da compra na array compras 
do respectivo correntista. Obs: Implemente os testes unitários.

*/


var correntistas = [
    {
        idconta: 1,
        nome: "Fábio José",
        saldo: 10,
        cartaoDeCredito: {
            limite: 100,
            compras: [50,30]
        }
    },
    {
            idconta: 2,
            nome: "Samara Raquel",
            saldo: 100,
            cartaoDeCredito: {
                limite: 150,
                compras: []
            }
    },     
]

function depositar(conta, valor) {
    for(var i = 0; i < correntistas.length; i++) {
        correntistas[i].idconta == conta;        
        return correntistas[i].saldo += valor
    }
}
// resultado = depositar(0, 50);
// console.log(resultado)

function sacar(conta, valor) {
    for(var i = 0; i < correntistas.length; i++) {
        correntistas[i].idconta == conta;
        if (valor > correntistas[i].saldo) {
            return "Saque não permitido, saldo insuficiente.";
        } else {return correntistas[i].saldo -= valor;
        }
    }
}

/* C) Implemente uma função comprar que deve adicionar o valor da compra na array compras 
do respectivo correntista. Obs: Implemente os testes unitários.*/

function cartaCredito (conta, credito) {
    for (var i = 0; i < correntistas.length; i++) {
        correntistas[i].idconta == conta;
        

    }
}
