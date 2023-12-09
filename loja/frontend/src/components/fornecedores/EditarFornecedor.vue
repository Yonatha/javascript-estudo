<template>
     <div>
    <h3>Editar Fornecedor</h3>
    <label>Nome</label><br>
    <input name="nome" v-model="fornecedor.nome"/><br>
  
    <label>CNPJ</label><br>
    <input name="cnpj" v-model="fornecedor.cnpj" v-on:blur="validaCNPJ()"/>
    <br>

    <label>Situação</label><br>
    <input type="checkbox" v-model="fornecedor.situacao"/><br>
  
    <button @click="editar">Salvar</button>

  </div>
</template>

<script>

import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

const minhaApi = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "EditarFornecedor",    
    props: ['id'],
    computed: {
        ...mapGetters("fornecedor", ["fornecedor"]),
    },
    methods: {
        ...mapActions("fornecedor", ["validaCNPJ","editar"])
    },
}

</script>

<style>
.formularioClientes {
    padding: 10px;
    border: 1px solid rgb(108, 106, 106);
    float: left;
}

.formularioClientes {
    width: 25%;
    background: #efeeee;
}

.formularioClientes input {
    width: 96%;
    margin-bottom: 10px;
    font-size: 14px;
    padding: 5px;
}

.formularioClientes label {
    width: 80%;
    display: block;
    margin-right: 5px;
    text-transform: uppercase;
}

.formularioClientes button {
    background-color: aquamarine;
    border: none;
    float: right;
    width: 92px;
    height: 26px;
}
</style>