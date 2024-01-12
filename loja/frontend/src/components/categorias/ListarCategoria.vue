<template>
    <h3>Categorias Cadastradas</h3>
    <a href="/categorias/cadastrar">Cadastrar</a>
    <br>
    {{ mensagem }}
    <table border="0">
        <thead>
            <th>ID</th>
            <th>Nome</th>
            <th></th>
        </thead>
        <tr v-for="categoria in categorias">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.nome }}</td>
            <td>
                <a @click="deletar(categoria.id)" href="#">
                    Excluir
                </a>

                <a @click="editar(categoria.id)" href="#">
                    Editar
                </a>
            </td>
        </tr>
    </table>
</template>


<script>
 
import { useStore, mapGetters, mapActions} from 'vuex'

export default {
    name: "ListarCategoria",
    setup: () => {
    const store = useStore()
    store.dispatch("categoria/listar")
},
    computed: {
        ...mapGetters("categoria", ["categorias"]),
    },
    methods: {
        ...mapActions("categoria", ["deletar","listar", "editar"]),
    }
}
</script>