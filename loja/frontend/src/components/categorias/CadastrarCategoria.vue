<template>
  <h3>Cadastro de Categoria</h3>
  <p>
    {{ notificacao }}
  </p>
  <label>Nome</label><br>
  <input name="nome" v-model="categoria.nome"/><br>

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
  name: "CadastrarCategoria",
  data(){
    return {
      categoria: {
      nome: null
    },
      notificacao: null
    }
  },
  methods: {
    async cadastrar(){
      const responce = await minhaApi.post("/categoria/cadastrar", this.categoria)
      this.notificacao = responce.data
      console.log(responce.data);
    },
  }
}
</script>