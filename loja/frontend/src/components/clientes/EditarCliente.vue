<template>
    <div class="formularioClientes">
        <h3>Editar Cliente</h3>
        <p>
            {{ notificacao }}
        </p>
        <label>Nome</label>
        <input name="nome" v-model="cliente.nome" />

        <label>E-mail</label>
        <input name="email" v-model="cliente.email" />

        <label>CPF</label>
        <input name="cpf" v-model="cliente.cpf" />

        <label>CEP</label>
        <input name="cep" v-model="cliente.cep" v-on:blur="buscarCep()" /><br>

        <label>Endereco</label>
        <input name="endereco" v-model="cliente.endereco" />

        <label>UF</label>
        <input name="uf" v-model="cliente.uf" />

        <label>Complemento</label>
        <input name="complemento" v-model="cliente.complemento" />

        <button @click="salvarEdicao()">
            Salvar
        </button>
    </div>
</template>        
    
<script>

import axios from 'axios'

const brasilApi = axios.create({
    baseURL: "https://brasilapi.com.br/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

const minhaApi = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    name: "EditarCliente",
    props: ['id'],
    data() {
        return {
            cliente: {
                nome: null,
                email: null,
                cpf: null,
                cep: null,
                endereco: null,
                uf: null,
                complemento: null
            },
            notificacao: null
        }
    },
    async mounted() {
        const responce = await minhaApi.get(`/cliente/${this.id}`)
        this.cliente = responce.data
    },
    methods: { 
        async salvarEdicao() {
            const responce = await minhaApi.put(`/cliente/${this.id}`, this.cliente)
            this.notificacao = responce.data
            console.log(responce.data);
        },
        async buscarCep() {
            const responce = await brasilApi.get(`/cep/v1/${this.cliente.cep}`)
            this.cliente.uf = responce.data.state
            const rua = responce.data.street == null ? "" : responce.data.street
            this.cliente.endereco = `${rua}, ${responce.data.neighborhood}, ${responce.data.city}`
        }
    }
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