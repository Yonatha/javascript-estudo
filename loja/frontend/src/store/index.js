import {createStore} from 'vuex'
import carrinho from "./modules/carrinho/carrinho.module"
import fornecedor from "./modules/fornecedor/fornecedor.module"
import notificacao from "./modules/notificacao/notificacao.module"
import categoria from "./modules/categoria/categoria.module"

export default createStore({
    modules: {
        carrinho,
        fornecedor,
        notificacao,
        categoria
    }
})
