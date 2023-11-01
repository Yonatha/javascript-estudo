import state from "./carrinho.state";

const actions = {
    adicionarProdutoAoCarrinho: ({commit}, produto) => {
        commit('adicionar', produto)
    }
}

export default actions;