<!-- Teste -->
<template>
    <div class="listagemProdutos">
        <h3>Produtos Cadastrados</h3>
        {{ mensagem }}

        <ul class="produtos-lista">
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"  width="100"/>
                <p>{{ produto.nome }}</p>
                <span class="valor">R$ {{ produto.valor }}</span>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios'

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
        async listar() {
            const responce = await minhaApi.get("/produto/")
            this.produtos = responce.data
            console.log(responce.data);
        },       
        
        },

        async deletar(id) {
            const responce = await minhaApi.delete(`/produto/${id}`)
            this.mensagem = responce.data
            this.listar()
        }
    }

</script>

<style>
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
    position: relative;
}
ul li span.valor{
    background: green;
    color: #ffffff;
    position: absolute;
    top: 0;
    padding: 3px;
    right: 0;
    font-size: 13px;
}
</style>