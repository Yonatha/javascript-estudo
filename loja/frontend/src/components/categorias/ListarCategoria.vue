<template>
    <h3>Categorias Cadastradas</h3>
    <a href="/categorias/cadastrar">Cadastrar</a>
    {{ mensagem }}
    <ul>
        <li v-for="categoria in categorias">
            {{ categoria.id }}
            {{ categoria.nome }}

            <a @click="deletar(categoria.id)" href="#">Excluir</a>
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
    data(){
        return {
            categorias: [],
            mensagem: null
        }
    },
    async mounted(){
        this.listar()
    },
    methods: {
        async listar(){
            const responce = await minhaApi.get("/categoria/")
            this.categorias = responce.data
        },       
        
    },

    async deletar(id) {
        const responce = await minhaApi.delete(`/categoria/${id}`)
        this.mensagem = responce.data
        this.listar()
    }
}

</script>