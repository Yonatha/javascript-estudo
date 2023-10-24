import {createWebHistory, createRouter} from "vue-router";
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import DeletarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarFornecedor from "./components/fornecedores/ListarFornecedor.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
import CadastrarCategoria from "./components/categorias/CadastrarCategoria.vue"
import CadastrarProduto from "./components/produtos/CadastrarProduto.vue"
import ListarProduto from "./components/produtos/ListarProduto.vue"
import DeletarProduto from "./components/produtos/ListarProduto.vue"
import CadastrarCarrinho from "./components/carrinhos/CadastrarCarrinho.vue"
import ListarCarrinhos from "./components/carrinhos/ListarCarrinhos.vue"


const routes = [
    {
        path: "/clientes",
        component: ListarCliente
    },
    {
        path: "/clientes/cadastrar",
        component: CadastrarCliente
    },
    {
        path: "/cliente/:id",
        component: DeletarCliente
    },
    {
        path: "/fornecedores",
        component: ListarFornecedor
    },    
    {
        path: "/fornecedores/cadastrar",
        component: CadastrarFornecedor
    },
    {
        path: "/categorias",
        component: CadastrarCategoria
    },
    {
        path: "/produtos/cadastrar",
        component: CadastrarProduto
    },
    {
        path: "/produtos",
        component: ListarProduto
    },
    {
        path: "/produto/:id",
        component: DeletarProduto
    },
    {
        path: "/carrinho/cadastrar",
        component: CadastrarCarrinho
    },
    {
        path: "/carrinho",
        component: ListarCarrinhos
    } 

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;