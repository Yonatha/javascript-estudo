<template>
    <h3>Carrinhos cadastrados</h3>
    {{ mensagem }}
</template>

<script>

import axios from 'axios'

const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "CarrinhosCriados",
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
            const responce = await minhaApi.get("/carrinho")
            this.carrinhos = responce.data
        },
    }
}

</script>