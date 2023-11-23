import mutations from "./fornecedor.mutations"
import actions from "./fornecedor.actions"
import state from "./fornecedor.state"

const getters = {
    fornecedores: state => state.fornecedores,
    fornecedor: state => state.fornecedor,
}

export default {
    namespaced: true,
    mutations,
    actions,
    state,
    getters
}