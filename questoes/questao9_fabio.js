/*
Questão 9: Como desenvolvedor, você recebeu uma tarefa para implementar uma função de autenticação 
de usuário e controle de acesso.

Obs: Implemente os testes unitário.

a) - Crie uma função que receba dois parâmetros: um é o email e o outro é a senha, essa função deve 
retornar um Boolean (true ou false).
b) - Crie outra função que utiliza a função criada anteriormente (A) e exiba a mensagem na tela
“Seja bem vindo” caso o usuário esteja autenticado ou a mensagem “Acesso negado”.

*/

var usuarioAutenticado = " ";
var email_informado = " ";
var senha_informado = " ";

function acesso_usuario(email_informado, senha_informada) {
  var readline = require('readline-sync');
  console.log("======AUTENTICAÇÃO DE USUÁRIO======")
  var email_informado = readline.question("Informe seu e-mail: ");
  var senha_informada = readline.question("Infome sua senha: ");

  if (email_informado === "fabio123@gmail.com" && senha_informada === "123456") {
    return true;
  } else {
    return false;
  }
};

resultado = acesso_usuario();
console.log(resultado)