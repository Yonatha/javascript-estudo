
<template>
    <label>Nome</label><br>
    <input nome="nome" v-model="produto.nome" /><br>

    <label>Situacao</label><br>
    <input situacao="situacao" v-model="produto.situacao" /><br>

    <label>Fornecedor_</label><br>
    <input fornecedor="fornecedor" v-model="produto.fornecedor" /><br>

    <label>Valor</label><br>
    <input valor="valor" v-model="produto.valor" /><br>

    <button @click="cadastrar()">Cadastrar Produto</button>
</template>

<script>

import axios from 'axios';

const minhaApi = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "CadastrarProduto",
    data() {
        return {
            produto: {
                nome: null,
                situacao: null,
                fornecedor: null,
                valor: null,
            },
            notificacao: null,
        }
    },

    methods: {
        async cadastrar(){
            const responce = await minhaApi.post("/produto/cadastrar", this.produto)
            this.notificacao = responce.data
            console.log(responce.data);
        }
    }
}

</script>

