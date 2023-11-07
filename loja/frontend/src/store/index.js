import {createStore} from 'vuex'
import carrinho from "./modules/carrinho.module"

export default createStore({
    modules: {
        carrinho
    }
})