import mutations from "./categoria.mutations"
import actions from "./categoria.actions"
import state from "./categoria.state"

const getters = {
    categorias: state => state.categoria,
    categorias: state => state.categorias
}

export default {
    namespaced: true,
    mutations,
    actions,
    state,
    getters
}