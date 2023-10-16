<template>
    <h3>Cadastro de Fornecedor</h3>
    <p>
      {{ notificacao }}
    </p>
    <label>Nome</label><br>
    <input name="nome" v-model="fornecedor.nome"/><br>
  
    <label>CNPJ</label><br>
    <input name="cnpj" v-model="fornecedor.cnpj"/><br>

    <label>Situacao</label><br>
    <input type="checkbox" v-model="fornecedor.situacao"/><br>
  
    <button @click="cadastrar()">Cadastrar</button>
  </template>
  
  <script>
  
  import axios from 'axios'

  const minhaApi = axios.create({
      baseURL: "http://localhost:3001/",
      headers: {
          'Content-Type': 'application/json'
      }
  })
  
  export default {
    name: "CadastrarFornecedor",
    data(){
      return {
        fornecedor: {
        nome: null,
        cnpj: null,
        situacao: true
      },
        notificacao: null
      }
    },
    methods: {
      async cadastrar(){
        const responce = await minhaApi.post("/fornecedor/cadastrar", this.fornecedor)
        this.notificacao = responce.data
        console.log(responce.data);
      },
    }
  }
  </script>