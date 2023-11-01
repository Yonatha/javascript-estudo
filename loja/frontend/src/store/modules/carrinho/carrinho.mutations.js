const mutations = {
    adicionar: (state, produto) => {
        state.produtos.push(produto)

        state.total = state.produtos
        .map(produto => parseFloat(produto.valor))
        .reduce((acumulador, valor) => acumulador + valor, 0)
    },
}
export default mutations;