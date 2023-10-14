<template>
    <a href="/clientes/cadastrar">Cadastrar</a>
    <br>
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

<style>
.listagemClientes {
  width: 50%; 
  margin-left: 10px;
  padding: 10px;
  border:  1px solid rgb(108, 106, 106);
  float: left;
}
</style>