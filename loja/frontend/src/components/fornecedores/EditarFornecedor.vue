<template>
     <div>
    <h3>Editar Fornecedor</h3>
    <p>{{ notificacao }}</p>
    <label>Nome</label><br>
    <input name="nome" v-model="fornecedor.nome"/><br>
  
    <label>CNPJ</label><br>
    <input name="cnpj" v-model="fornecedor.cnpj" v-on:blur="validaCNPJ()"/>
    <p v-if="cnpjInvalido"> CNPJ Inválido</p>
    <br>

    <label>Situação</label><br>
    <input type="checkbox" v-model="fornecedor.situacao"/><br>
  
    <button @click="salvarEdicao">Salvar</button>

  </div>
</template>

<script>

export default {
    name: "EditarFornecedor",    
    props: ['id'],
    data() {
        return {
            fornecedor: {
                nome: null,
                cnpj: null,
                situacao: null,                
            },
            notificacao: null,   
            cnpjInvalido: false         
        }
    },
    async mounted() {
        const responce = await minhaApi.get(`/fornecedor/${this.id}`)
        this.fornecedor = responce.data
    },
    methods: {
        async salvarEdicao() {
            const responce = await minhaApi.put(`/fornecedor/${this.id}`, this.fornecedor)
            this.notificacao = responce.data
        },

        validaCNPJ() {
            if (this.fornecedor.cnpj) {
                const cnpj = this.fornecedor.cnpj.replace(/[^\d]+/g, '');
                if (cnpj.length !== 14 || !this.isValidCNPJ(cnpj)) {
                    this.cnpjInvalido = true;
                } else {
                    this.cnpjInvalido = false;
                }
            }
        },

        isValidCNPJ(cnpj) {
            function validaCNPJ(cnpj) {
                var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
                var c = String(cnpj).replace(/[^\d]/g, '')

                if (c.length !== 14)
                    return false

                if (/0{14}/.test(c))
                    return false

                for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
                if (c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
                    return false

                for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
                if (c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
                    return false

                return true
            }

            return validaCNPJ(cnpj);
        },
        Verificar() {
            this.resultadoValidacao = this.isValidCNPJ(this.cnpjToValidate) ? "Válido" : "Inválido";
        }
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