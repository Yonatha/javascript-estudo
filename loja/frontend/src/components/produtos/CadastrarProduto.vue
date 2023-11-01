
<template>
    <div class="formularioProdutos">
        <h3> Cadastro de Produto</h3>
        <p>
            {{ notificacao }}
        </p>

        <label>Nome</label><br>
        <input nome="nome" v-model="produto.nome" /><br>

        <label>Situacao</label><br>
        <input situacao="situacao" v-model="produto.situacao" /><br>

        <label>Fornecedor</label><br>
        <select v-model="produto.fornecedor_id">
            <option :value="fornecedor.id" v-for="fornecedor in fornecedores">{{ fornecedor.nome }}</option>
        </select><br>

        <label>Valor</label><br>
        <input valor="valor" v-model="produto.valor" /><br><br>

        <button @click="cadastrar()">Cadastrar Produto</button><br>

    </div>
</template>

<script>

import axios from 'axios';

const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
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
                fornecedor_id: null,
                valor: null,
            },
            fornecedores: [],
            notificacao: null,
        }
    },
    async mounted() {
        this.carregarFornecedores()
    },
    methods: {
        async cadastrar() {
            const responce = await minhaApi.post("/produto/cadastrar", this.produto)
            this.notificacao = responce.data
            console.log(responce.data);
        },
        async carregarFornecedores() {
            const responce = await minhaApi.get("/fornecedor/habilitados")
            this.fornecedores = responce.data
        },
    }
}

</script>

