<!-- Teste -->
<template>
    <div class="listagemProdutos">
        <h3>Produtos Cadastrados</h3>
        {{ mensagem }}

        <a href="/produtos/cadastrar">Cadastrar</a>

        <ul class="produtos-lista">
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"  width="100"/>
                <p>{{ produto.nome }}</p>
                <span class="valor">R$ {{ produto.valor }}</span>
                <a class="btnAdicionarAoCarrinho" href="#" @click="adicionarProdutoAoCarrinho(produto)">Adicionar ao carrinho</a>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'
import {mapActions} from "vuex";

const minhaApi = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "ListarProduto",
    data() {
        return {
            produtos: [],
            mensagem: null
        }
    },
    async mounted() {
        this.listar()
    },
    methods: {
            ...mapActions("carrinho", ["adicionarProdutoAoCarrinho"]),
            async listar() {
                const responce = await minhaApi.get("/produto/")
                this.produtos = responce.data
            },       
        },
        async deletar(id) {
            const responce = await minhaApi.delete(`/produto/${id}`)
            this.mensagem = responce.data
            this.listar()
        }
    }

</script>

<style scoped>
ul {
    width: 500px;
}
ul li {
    float: left;
    width: 100px;
    height: 207px;
    margin-bottom: 10px;
    margin-right: 10px;
    list-style: none;
    font-size: 12px;
    height: 288px;
    position: relative;
    padding: 20px;
}
ul li span.valor{
    padding: 3px;
    right: 0;
    font-size: 22px;
    position: absolute;
    bottom: 37px;
    left: 25px;
    color: green;
}

.btnAdicionarAoCarrinho {
    color: #ffffff;
    background: orange;
    text-decoration: none;
    padding: 4px;
    width: 100px;
    display: block;
    text-align: center;
    border-radius: 16px;
    position: absolute;
    bottom: 0;
}
</style>