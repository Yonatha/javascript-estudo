<template>
    <h3>Cadastro de Carrinho</h3>
    <p>
      {{ notificacao }}
    </p>
    <label>Nome</label><br>
    <input name="nome" v-model="carrinho.cliente_id"/><br>

    <button @click="cadastrar()">
      Cadastrar
    </button>
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
    name: "CadastrarCarrinho",
    data(){
      return {
        carrinho: {
        cliente_id: null
      },
        notificacao: null
      }
    },
    methods: {
      async cadastrar(){
        const responce = await minhaApi.post('/carrinho/cadastrar', this.carrinho)
        this.notificacao = responce.data
        console.log(responce.data);
      },
    }
  }
  </script>