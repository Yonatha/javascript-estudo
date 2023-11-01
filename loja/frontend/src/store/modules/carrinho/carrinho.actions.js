import state from "./carrinho.state";

const actions = {
    adicionarProduto: () => {
        state.produtos.push({id: 1, nome: "Produto 1"})
    }
}

export default actions;