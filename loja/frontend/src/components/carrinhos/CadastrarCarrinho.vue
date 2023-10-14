<template>
    <h3>Cadastro de Carrinhos</h3>
    <p>
        {{ notificacao }}
    </p>

    <label>Cliente</label>
    <input name="cliente_id" v-model="carrinho.cliente_id" />

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
    data() {
        return {
            carrinho: {
                cliente_id: null
            },
            notificacao: null
        }
    },
    methods: {
        async cadastrar() {
            const responce = await minhaApi.post('/carrinho/cadastrar', this.carrinho)
            this.notificacao = responce.data
            console.log(responce.data);
        },
    }
}
</script>