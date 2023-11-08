const mutations = {
    adicionar: (state, produto) => {
        state.produtos.push(produto)
        
        state.total = state.produtos
        .map(produto => parseFloat(produto.valor))
        .reduce((acumulador, valor) => acumulador + valor, 0)
    },
    remover: (state, id) => {
        for (let index = 0; index < state.produtos.length; index++) {
            const produto = state.produtos[index];
            if (produto.id == id)
                state.produtos.splice(index, 1)
        }

        state.total = state.produtos
        .map(produto => parseFloat(produto.valor))
        .reduce((acumulador, valor) => acumulador + valor, 0)
    },
    atualizarTotal: () => {
        // TODO
    }
}

export default mutations