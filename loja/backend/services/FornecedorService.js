import db from "../config/db.js"

db.connect()

export async function cadastrarFornecedor(fornecedor) {
    const { nome, cnpj, situacao } = fornecedor

    const fornecedorCadastrado = await findByCnpj(cnpj)
    if (fornecedorCadastrado)
        return "CNPJ já cadastrado."

    return new Promise((resolve, reject) => {
        const query = `INSERT INTO fornecedores (nome, cnpj, situacao) VALUES (?, ?, ?)`;
        db.query(query, [nome, cnpj, situacao], function (error, resultado, fields) {
            if (error)
                reject(error);

            resolve("Cadastro realizado com sucesso");
        });
    });
}

export function findByCnpj(cnpj) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM fornecedores WHERE cnpj = ?'

        db.query(query, [cnpj], function (error, fornecedores, fields) {
            if (error) {
                reject(error);
            }

            if (fornecedores.length > 0) {
                resolve(fornecedores[0]);
            } else {
                resolve(null);
            }
        });
    });
}

export async function listarFornecedores() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM fornecedores`;
        db.query(query, function (error, fornecedores) {
            if (error)
                reject(error);
            resolve(fornecedores);
        });
    });
}

export async function deletarFornecedor(id) {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM fornecedores WHERE id = ?"
        db.query(query, [id], function (error) {
            if (error)
                reject(error)

            resolve("Fornecedor excluido com sucesso");
        })
    })
}

export function validaCNPJ (cnpj) {
    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
    var c = String(cnpj).replace(/[^\d]/g, '')
    
    if(c.length !== 14)
        return false

    if(/0{14}/.test(c))
        return false

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    return true
}