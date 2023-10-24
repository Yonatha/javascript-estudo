<template>

        <h3>Produtos Cadastrados</h3>
        <a href="/produtos/cadastrar">Cadastrar</a>
        {{ mensagem }}

       
        <ul class="produtos-lista">
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"  width="200"/>
                <p>{{ produto.nome }}</p>
                <span class="valor">R$ {{ produto.valor }}</span>
            </li>
        </ul>
      

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