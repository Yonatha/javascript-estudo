/* Questão 11: Dado uma função que tem a finalidade que retorna as funcionalidades
que o usuário tem permissão de acessar. Implemente essa função na qual ao receber 
o seguinte parâmetro
{usuario_id: 1, perfil: “ADMINISTRADOR”} ou 
{usuario_id: 2, perfil: “NORMAL”}

a) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array 
de funcionalidades [“LISTAR”,”CADASTRAR”,”VISUALIZAR”,”ALTERAR”,”EXCLUIR”];

b) - Se o perfil é igual ADMINISTRADOR então deve retornar uma array 
de funcionalidades [“LISTAR”,”VISUALIZAR”]

*/

var permissaoAcesso = [
    {
        usuario_id: 1,
        perfil: "ADMINISTRADOR",
        parametros: ["Listar", "Cadastrar", "Visualizar", "Alterar", "Excluir"]
    },
    {
        usuario_id: 2,
        perfil: "NORMAL",
        parametros: ["Listar", "Visualizar"]
    }
];

function acessoUsuario (usuarioID) {    
    
    for (var i = 0; i < permissaoAcesso.length; i++) {
        if (permissaoAcesso[i].usuario_id == usuarioID) {
            console.log("Bem vindo, suas funcionalidades são: ")
            return permissaoAcesso[i].parametros;
        }
    }
    
}

let resultado = acessoUsuario(2);
console.log(resultado)



