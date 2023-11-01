
import mutations from "./carrinho.mutations";
import actions from "./carrinho.actions";
import state from "./carrinho.state";

const getters = {
    produtos: state => state.produtos
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}