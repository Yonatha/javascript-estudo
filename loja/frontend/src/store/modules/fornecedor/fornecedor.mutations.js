const mutations = {
    adicionar: (state, fornecedor) => {
        state.fornecedor.push(fornecedor)
    },
    remover: (state, id) => {
        for (let index = 0; index < state.fornecedor.lenght; index++) {
            const fornecedor = state.fornecedor[index];
            if (fornecedor.id == id)
                state.fornecedor.splice(index, 1)
        }
    },
}

export default mutations