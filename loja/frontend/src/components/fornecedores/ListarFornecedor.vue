<template>
    <h3>Fornecedores Cadastrados</h3>
    <a href="/fornecedores/cadastrar">Cadastrar</a>
    <br>
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

import { useStore, mapGetters, mapActions } from "vuex"

export default {
    name: "ListarFornecedor",
    setup: () => {
        const store = useStore()
        store.dispatch("fornecedor/listar")
    },
    computed: {
      ...mapGetters("fornecedor", ["fornecedores"]),
    },
    methods: {
        ...mapActions("fornecedor", ["deletar"]),
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