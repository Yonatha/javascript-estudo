<template>
  <div class="formularioCategorias"></div>
  <h3>Editar Categoria</h3>
  <p>
    {{ notificacao }}
  </p>
  <label>Nome</label><br>
  <input name="nome" v-model="categoria.nome" /><br>

  <button @click="salvarEdicao()">
    Salvar
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
  name: "EditarCategoria",
  props: ['id'],
  data() {
    return {
      categoria: {
        nome: null
      },
      notificacao: null
    }
  },
  async mounted() {
        const responce = await minhaApi.get(`/categoria/${this.id}`)
        this.categoria = responce.data
    },
    methods: { 
        async salvarEdicao() {
            const responce = await minhaApi.put(`/categoria/${this.id}`, this.categoria)
            this.notificacao = responce.data
            console.log(responce.data);
        },
  }
}
</script>