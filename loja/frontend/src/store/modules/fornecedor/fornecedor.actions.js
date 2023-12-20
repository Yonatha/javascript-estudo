import axios from 'axios'

const minhaApi = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    'Content-Type': 'application/json'
  }
})

const actions = {
    cadastrar: async ({state, dispatch}) => {
      try {
        const response = await minhaApi.post("/fornecedor/cadastrar", state.fornecedor);
        dispatch("notificacao/exibir", response.data, {root: true})
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
    editar: ({commit}, id) => {
        commit("Edição feita com sucesso", id)
    },
    deletar: async ({ dispatch }, id) => {
        const response = await minhaApi.delete(`/fornecedor/${id}`)
        dispatch("notificacao/exibir", response.data, {root: true})
        dispatch("listar")
    },
    listar: async ({commit}) => {
      const response = await minhaApi.get("/fornecedor/")
      commit("listar", response.data)
    }
}

export default actions