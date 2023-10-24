<template>
    <h3>Carrinhos Cadastrados</h3>
    <a href="/carrinho/cadastrar">Cadastrar</a>
    <br>

    <p>{{ mensagem }}</p>

    <ul>
        <li v-for="carrinho in carrinhos">
            {{ carrinho.cliente_id }}
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
    name: "ListarCarrinhos",
    data() {
        return {
            carrinhos: [],
            mensagem: null
        }
    },
    async mounted() {
        this.listar()
    },
    methods: {
        async listar() {
            const responce = await minhaApi.get("/carrinho/")
            this.carrinhos = responce.data
            console.log(responce.data);
        },
    }
}
</script>

<style>
.listagemClientes {
    width: 50%;
    margin-left: 10px;
    padding: 10px;
    border: 1px solid rgb(108, 106, 106);
    float: left;
}
</style>