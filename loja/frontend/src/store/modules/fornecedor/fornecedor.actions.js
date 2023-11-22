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
    listar: async ({commit}) => {
      // const response = await minhaApi.get("/fornecedor/")      
      // commit("listar", response.data)      
      console.log("hello world") 
    }
}


export default actions



/*
saiu de listar fornecedores para aqui, ajustar ainda.
methods: {
        async deletar(id) {
            const responce = await minhaApi.delete(`/fornecedor/${id}`)
            this.mensagem = responce.data
            this.listar()
        },
        async editar(id) {
            this.$router.push(`/fornecedores/${id}`)
        }
    }

    */