<template>
    <div class="container">
        <h4>Dados do Comprador</h4>
        
        <div class="linha">
            <label>Nome</label>
            <input type="text" v-model="nome" disabled>
        </div>

        <div class="destaque2">
            <div class="coluna1">
                <label>Endereço de Entrega</label>
                <input type="text" v-model="enderecoCompleto" disabled>
            </div>
            
            <div class="coluna2">
                <a href="#" @click="alterarEndereco()">Alterar endereço de entrega</a>
            </div>
        </div>
    </div>
    
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
    data() {
        return {
            nome: null,
            endereco: null,
            complemento: null,
            cep: null,
            uf: null,
            enderecoCompleto: null
        }
    },
    async mounted() {
        const idUsuario = 1;
        const response = await minhaApi.get(`/checkout/${idUsuario}`)
        const { nome, endereco, complemento, cep, uf } = response.data
        this.nome = nome
        this.enderecoCompleto = `${endereco}, ${uf} ,${cep}, ${complemento}`
    }
}

</script>

<style scoped>

h4 {
    margin: 0;
    margin-bottom: 14px;
}
.container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 541px;
}

label {
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    display: block;
}

input {
    width: 100%;
    margin-top: 5px;
    font-size: 14px;
}

.linha {
    width: 333px;
    margin-bottom: 10px;
}

.destaque {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 300px;
}

.destaque div {
    gap: 5px;
    width: 100px;
    height: 100px;
}

.destaque2 {
    display: flex;
    flex-direction: row;
    width: 541px;
}
.destaque2 .coluna1 {
    width: 355px;
}

.destaque2 .coluna2 {
    width: 191px;
    margin-left: 26px 
}

.destaque2 .coluna2 a {
    font-size: 14px;
    color: #3884DD;
    text-decoration: none;
    margin-top: 26px;
    display: block;
}

</style>