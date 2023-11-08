import {createStore} from 'vuex'
import carrinho from "./modules/carrinho/carrinho.module"

export default createStore({
    modules: {
        carrinho
    }
})