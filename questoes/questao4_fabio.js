/*Questão 4: Fulano da Silva Sauro é correntista do Banco do Brasil, ele mora na Rua da Lama, no estado XPTO 
e na cidade XYZ. O saldo da conta bancária de Fulano é de 100 reais e ele pagou a conta de água no valor de 
R$ 30,00, a conta de energia no valor de R$ 50,00 e fez um lanche que custou R$ 26,00.Implemente um algoritmo 
que representa o cenário de Fulano e exiba uma mensagem “Conseguiu pagar a conta na lanchonete” ou 
“Saldo insuficiente, falta R$ ?,00 para pagar a conta”

saldoBancario = 100

conta de água = 30
conta de energia = 50
lanche = 26

Exibir uma mensagem "conseguiu pagar a conta na lanchonete"  ou "saldo insuficiente", falta R$ para pagar a conta.

*/

function pagamento(saldoBancario) {    

    var despesasFulano = {
        contaAgua: 30,
        contaEnergia: 50,
        lanche: 26
    };

    somaDespesas = (despesasFulano.contaAgua + despesasFulano.contaEnergia + despesasFulano.lanche)

    if (saldoBancario >= somaDespesas) {
        return 'Pagamento aprovado'
    } else if (saldoBancario < somaDespesas) {
        return 'Pagamento reprovado'
    }
};


// var resultado = pagamento(105);
// console.log(resultado)

// criando modulo para exportar a função
module.exports = pagamento;