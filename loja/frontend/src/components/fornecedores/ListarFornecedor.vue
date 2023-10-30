<template>
    <h3>Fornecedores Cadastrados</h3>

    <a href="/fornecedores/cadastrar">Cadastrar</a>

    <p>{{ mensagem }}</p>
    
    <table>
        <thead>
            <th>Id</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th></th>
        </thead>
        <tr v-for="fornecedor in fornecedores">
            <td>{{ fornecedor.id }}</td>
            <td>{{ fornecedor.nome }}</td>
            <td>{{ fornecedor.cnpj }}</td>
            <td><a @click="deletar(fornecedor.id)" href="#">Excluir</a></td>
        </tr>
    </table>
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
    name: "ListarFornecedor",
    data() {
        return {
            fornecedores: [],
            mensagem: null
        }
    },
    async mounted() {
        this.listar()
    },
    methods: {
        async listar() {
            const responce = await minhaApi.get("/fornecedor/")
            this.fornecedores = responce.data
        },
        async deletar(id) {
            const responce = await minhaApi.delete(`/fornecedor/${id}`)
            this.mensagem = responce.data
            this.listar()
        },
    }
}
</script>