const mutations = {
    listar: (state, data) => {
      state.fornecedores = data
    },
    cadastrar: (state, categoria) => {
        state.categorias.post(categoria)
    },
    remover: (state, id) => {
        for (let index = 0; index < state.categorias.length; index++) {
            const categorias = state.categorias[index];
            if (categorias.id == id)
            state.categorias.splice(index, 1)
            
        }
    },
    editar: (state, categoria) => {
        state.categorias.put(categoria)
    }
    
}

export default mutations