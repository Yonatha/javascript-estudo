<!-- Teste -->
<template>
    <div class="listagemProdutos">
        <h3>Produtos Cadastrados</h3>
        {{ mensagem }}

        <ul class="produtos-lista">
            <li v-for="produto in produtos">
                {{ produto.id }}
                {{ produto.nome }}
                {{ produto.situacao }}
                {{ produto.valor }}
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