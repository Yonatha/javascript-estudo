<template>
    <h3>Fornecedores Cadastrados</h3>
    <a href="/fornecedores/cadastrar">Cadastrar</a>
    <br>

    <p>{{ mensagem }}</p>
    
    <table width="100%">
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

            <td>
                <a @click="editar(fornecedor.id)" href="#">
                Editar
                </a>
            </td>
            <td>
                <a @click="deletar(fornecedor.id)" href="#">
                    Excluir
                </a>
            </td>
            
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
            console.log(responce.data)
        },
        async deletar(id) {
            const responce = await minhaApi.delete(`/fornecedor/${id}`)
            this.mensagem = responce.data
            this.listar()
        },
        async editar(id) {
            this.$router.push(`/fornecedores/${id}`)
        }
    }
}
</script>

<style>
.listagemClientes {
    width: 50%;
    margin-left: 10px;
    padding: 10px;
    border: 1px solid rgb(108, 106, 106);
    float: left;
}
</style>