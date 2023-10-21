<template>
    <h3>Clientes Cadastrados</h3>
    <a href="/cliente/:id">Cadastrar</a>
    <br>

    <p>{{ mensagem }}</p>

    <table>
        <thead>
            <th>Nome</th>
            <th>E-mail</th>
        </thead>
        <tr v-for="cliente in clientes">
            <td>{{ cliente.nome }} </td>
            <td>{{ cliente.email }} </td>
            <td>
                <a @click="deletar(cliente.id)" href="#">
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
    name: "ListarCliente",
    data() {
        return {
            clientes: [],
            mensagem: null
        }
    },
    async mounted() {
        this.listar()
    },
    methods: {
        async listar() {
            const responce = await minhaApi.get("/cliente/")
            this.clientes = responce.data
            console.log(responce.data);
        },
        async deletar(id) {
            const responce = await minhaApi.delete(`/cliente/${id}`)
            this.mensagem = responce.data
            this.listar()
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