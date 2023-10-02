<template>
    <h3>Clientes Cadastrados</h3>
    <ul>
        <li v-for="cliente in clientes">{{ cliente.nome }}</li>
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
    name: "ListarCliente",
    data(){
        return {
            clientes: []
        }
    },
    async mounted(){
        this.listar()
    },
    methods: {
       async listar(){
        const responce = await minhaApi.get("/cliente/")
        this.clientes = responce.data
        console.log(responce.data);
       }
    }
}
</script>