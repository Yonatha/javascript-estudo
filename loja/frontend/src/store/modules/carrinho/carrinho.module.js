import mutations from "./carrinho.mutations"
import actions from "./carrinho.actions"
import state from "./carrinho.state"

const getters = {
    produtos: state => state.produtos,
    total: state => state.total,
    valores: state => state.valores,
    cupom: state => state.cupom
}

export default {
    namespaced: true,
    mutations,
    actions,
    state,
    getters
}