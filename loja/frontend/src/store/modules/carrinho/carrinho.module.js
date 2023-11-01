
// import mutations from "./patient.mutations";
import actions from "./patient.actions";
import state from "./carrinho.state";

const getters = {
    produtos: state => state.produtos
}

export default {
    namespaced: true,
    state,
    // mutations,
    actions,
    getters,
}