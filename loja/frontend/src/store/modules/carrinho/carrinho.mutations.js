const mutations = {
    adicionar: (state, produto) => {
        state.produtos.push(produto)
        
        state.total = state.produtos
        .map(produto => parseFloat(produto.valor))
        .reduce((acumulador, valor) => acumulador + valor, 0)
        .toFixed(2)
    },
    listar: (state, response) => {
        state.produtos = response
        
        state.total = state.produtos
        .map(produto => parseFloat(produto.valor))
        .reduce((acumulador, valor) => acumulador + valor, 0)
        .toFixed(2)
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
        .toFixed(2)
    },
    atualizarTotal: () => {
        // TODO
    }
}

export default mutations