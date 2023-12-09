const mutations = {
    listar: (state, data) => {
      state.fornecedores = data
    },
    cadastrar: (state, fornecedor) => {
        // state.fornecedores.post(fornecedor)
    },
    exibir: (state, response) =>{
      state.fornecedor = response
    },
    listar: (state, data) => {
      state.fornecedores = data
    },
    salvarEdicao: (state, fornecedor) => {
      state.fornecedores.put(fornecedor)
    },    
    cnpjInvalido: (state, situacao) => {
      state.fornecedor.cnpjInvalido = situacao
    },
}

export default mutations