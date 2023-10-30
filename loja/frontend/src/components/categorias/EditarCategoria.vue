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
import { validarNaoVazioENaoNulo } from "../../helpers/categoriaHelper.js"
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
      if (validarNaoVazioENaoNulo(this.categoria)) {
        const responce = await minhaApi.put(`/categoria/${this.id}`, this.categoria)
        this.notificacao = responce.data
        this.$router.push(`/categorias`)
      } else {
        this.notificacao = "O nome da categoria deve ter no mínimo 3 carecteres"
      }
    },
  }
}
</script>