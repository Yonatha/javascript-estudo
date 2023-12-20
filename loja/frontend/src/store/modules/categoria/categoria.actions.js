import axios from "axios";

const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  const actions = {
      cadastrar: async ({state, dispatch}) => {
        try {
          const response = await minhaApi.post("/categoria/cadastrar", state.categoria);
          dispatch("notificacao/exibir", response.data, {root: true})
        } catch (error) {
          console.error("Erro ao cadastrar categoria:", error);
        }
      
      },
      editar: ({commit}, id) => {
          commit("Edição feita com sucesso", id)
      },
      deletar: async ({ dispatch }, id) => {
          const response = await minhaApi.delete(`/categoria/${id}`)
          dispatch("notificacao/exibir", response.data, {root: true})
          dispatch("listar")
      },
      listar: async ({commit}) => {
        const response = await minhaApi.get("/categoria/")
        commit("listar", response.data)
      }
  }
  
  export default actions