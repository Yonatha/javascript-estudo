import {createStore} from 'vuex'
import carrinho from "./modules/carrinho/carrinho.module"
import fornecedor from "./modules/fornecedor/fornecedor.module"

export default createStore({
    modules: {
        carrinho,
        fornecedor
    }
})
