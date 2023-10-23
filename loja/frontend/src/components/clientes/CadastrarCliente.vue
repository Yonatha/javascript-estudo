<template>
    <div class="formularioClientes">
        <h3>Cadastro de cliente</h3>
        <p>
            {{ notificacao }}
        </p>
        <label>Nome</label>
        <input name="nome" v-model="cliente.nome" />

        <label>E-mail</label>
        <input name="email" v-model="cliente.email" />

        <label>CPF</label>
        <input name="cpf" v-model="cliente.cpf" v-on:blur="validarCpf()" />
        <p v-if="cpfInvalido"> CPF Inválido</p>

        <label>CEP</label>
        <input name="cep" v-model="cliente.cep" v-on:blur="buscarCep()" /><br>

        <label>Endereco</label>
        <input name="endereco" v-model="cliente.endereco" />

        <label>UF</label>
        <input name="uf" v-model="cliente.uf" />

        <label>Complemento</label>
        <input name="complemento" v-model="cliente.complemento" />

        <button @click="cadastrar()">
            Cadastrar
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
    name: "CadastrarCliente",
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
            notificacao: null,
            cpfInvalido: false,

        }
    },
    methods: {
        async cadastrar() {
            const responce = await minhaApi.post("/cliente/cadastrar", this.cliente)
            this.notificacao = responce.data
            console.log(responce.data);
        },
        async buscarCep() {
            const responce = await brasilApi.get(`/cep/v1/${this.cliente.cep}`)
            this.cliente.uf = responce.data.state
            const rua = responce.data.street == null ? "" : responce.data.street
            this.cliente.endereco = `${rua}, ${responce.data.neighborhood}, ${responce.data.city}`
        },
        async validarCpf() {
            const isValid = this.isValidarCpf(this.cliente.cpf);
            if (isValid === 'CPF inválido!') {
                this.cpfInvalido = true;
            } else {
                this.cpfInvalido = false;
            }
        },

        isValidarCpf(cpf) {
            function validarCpf(cpf) {
                let soma = 0;
                soma += cpf[0] * 10;
                soma += cpf[1] * 9;
                soma += cpf[2] * 8;
                soma += cpf[3] * 7;
                soma += cpf[4] * 6;
                soma += cpf[5] * 5;
                soma += cpf[6] * 4;
                soma += cpf[7] * 3;
                soma += cpf[8] * 2;
                soma = (soma * 10) % 11;


                if (soma == 10 || soma == 11)
                    soma = 0;

                if (soma != cpf[9])
                    return false;

                soma = 0;
                soma += cpf[0] * 11;
                soma += cpf[1] * 10;
                soma += cpf[2] * 9;
                soma += cpf[3] * 8;
                soma += cpf[4] * 7;
                soma += cpf[5] * 6;
                soma += cpf[6] * 5;
                soma += cpf[7] * 4;
                soma += cpf[8] * 3;
                soma += cpf[9] * 2;
                soma = (soma * 10) % 11;

                if (soma == 10 || soma == 11)
                    soma = 0;

                if (soma != cpf[10])
                    return 'CPF inválido!';

                return 'CPF válido!'
            }

            const resultado = validarCpf(this.cliente.cpf);
            if (resultado === 'CPF inválido!') {
                this.cpfInvalido = true;
            } else {
                this.cpfInvalido = false;
            }
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