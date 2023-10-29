<template>
    <h3>Categorias Cadastradas</h3>
    <a href="/categorias/cadastrar">Cadastrar</a>
    <br>
    {{ mensagem }}
    <ul>
        <li v-for="categoria in categorias">
            {{ categoria.id }}
            {{ categoria.nome }}

            <td>
                <a @click="deletar(categoria.id)" href="#">
                    Excluir
                </a>
            </td>
            <td>
                <a @click="editar(categoria.id)" href="#">
                    Editar
                </a>
            </td>
        </li>
    </ul>
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
    name: "ListarCategoria",
    data() {
        return {
            categorias: [],
            mensagem: null
        }
    },
    async mounted() {
        this.listar()
    },
    methods: {
        async listar() {
            const responce = await minhaApi.get("/categoria/")
            this.categorias = responce.data
            console.log(responce.data);
        },
        async deletar(id) {
            const responce = await minhaApi.delete(`/categoria/${id}`)
            this.mensagem = responce.data
            this.listar()
        },
        async editar(id) {
            this.$router.push(`/categorias/${id}`)
        }
    }
}
</script>