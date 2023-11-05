<template>
  <div class="formularioCarrinho">
    <h3>Editar Carrinho</h3>
    <p>{{ notificacao }}</p>
    <label>Nome</label><br>
    <input name="nome" v-model="carrinho.nome" /><br>

    <button @click="salvarEdicao()">Salvar</button>
  </div>
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
  name: "EditarCarrinho",
  props: ['id'],
  data() {
    return {
      carrinho: {
        cliente_id: null
      },
      notificacao: null
    }
  },
  async mounted() {
    const response = await minhaApi.get(`/carrinho/${this.id}`)
    this.carrinho = response.data // Corrigi aqui para atribuir a this.carrinho
  },
  methods: {
    async salvarEdicao() {
      const response = await minhaApi.put(`/carrinho/${this.id}`, this.carrinho)
      this.notificacao = response.data
      console.log(response.data);
    }
  }
}
</script>