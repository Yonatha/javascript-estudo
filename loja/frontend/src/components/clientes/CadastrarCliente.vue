<template>
    <h1>Cadastro de cliente</h1>
    {{ notificacao }}
    <label>Nome</label>
    <br>
    <input name="nome" v-model="cliente.nome" /><br>
  
    <label>E-mail</label><br>
    <input name="email" v-model="cliente.email" /><br>
  
    <label>CPF</label><br>
    <input name="cpf" v-model="cliente.cpf"/><br>
  
    <label>CEP</label><br>
    <input name="cep" v-model="cliente.cep" v-on:blur="buscarCep()"/><br>
  
    <label>Endereco</label><br>
    <input name="endereco" v-model="cliente.endereco"/><br>
  
    <label>UF</label><br>
    <input name="uf" v-model="cliente.uf"/><br>
  
    <label>Complemento</label><br>
    <input name="complemento" v-model="cliente.complemento"/><br><br>
  
    <button @click="cadastrar()">
            Cadastrar
    </button>
  </template>

<script>

import axios from 'axios'

const brasilApi = axios.create({
    baseURL: "https://brasilapi.com.br/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

const minhaApi = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "CadastrarCliente",
    data(){
        return {
            cliente: {
                nome: null,
                email: null,
                cpf: null,
                cep: "58053-028",
                endereco: null,
                uf: null,
                complemento: null
            },
            notificacao: null
        }
    },
    methods: {
       async cadastrar(){
        const responce = await minhaApi.post("/cliente/cadastrar")
        console.log(responce.data);
       },
       async buscarCep(){
        const responce = await brasilApi.get(`/cep/v1/${this.cliente.cep}`)
        this.cliente.uf = responce.data.state
        const rua = responce.data.street == null ? "" : responce.data.street
        this.cliente.endereco = `${rua}, ${responce.data.neighborhood}, ${responce.data.city}`
       }
    }
}
</script>