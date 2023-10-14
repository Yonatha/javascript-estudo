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