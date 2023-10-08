<template>
    <h3>Fornecedores Cadastrados</h3>
    <ul>
        <li v-for="fornecedor in fornecedores">{{ fornecedor.nome }}</li>
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
    name: "ListarFornecedor",
    data(){
        return {
            fornecedores: []
        }
    },
    async mounted(){
        this.listar()
    },
    methods: {
        async listar(){
            const responce = await minhaApi.get("/fornecedor/")
            this.fornecedores = responce.data
            this.listar()
            console.log(responce.data)
        }
    }
}
</script>