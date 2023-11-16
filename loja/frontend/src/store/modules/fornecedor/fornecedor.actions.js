import axios from 'axios'

const minhaApi = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    'Content-Type': 'application/json'
  }
})

const actions = {
    cadastrar: async ({state}) => {
        try {
            const response = await minhaApi.post("/fornecedor/cadastrar", state.fornecedor.cnpj);
            //this.notificacao = response.data;
            console.log(response.data);
          } catch (error) {
            console.error("Erro ao cadastrar fornecedor:", error);
          }
    },
    validaCNPJ: ({commit}) => {
        commit("validaCNPJ")
    },
    isValidCNPJ: ({commit}, fornecedor) => {
        commit("Verificando...", fornecedor)
    },
    verificar: ({commit}, fornecedor) => {
        commit("Resultado da verificação CNPJ", fornecedor)
    },
    salvarEdicao: ({commit}, id) => {
        commit("Edição feita com sucesso", id)
    },
    removerFornecedor: ({commit}, id) => {
        console.log("Excluindo fornecedor " + id)
        commit("remover", id)
    },
    listarFornecedores: () => {
        
    }
}


export default actions