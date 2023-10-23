<template>
  <div>
    <h3>Cadastro de Fornecedor</h3>
    <p>{{ notificacao }}</p>
    <label>Nome</label><br>
    <input name="nome" v-model="fornecedor.nome"/><br>
  
    <label>CNPJ</label><br>
    <input name="cnpj" v-model="fornecedor.cnpj" v-on:blur="validaCNPJ()"/>
    <p v-if="cnpjInvalido"> CNPJ Inválido</p>
    <br>

    <label>Situacao</label><br>
    <input type="checkbox" v-model="fornecedor.situacao"/><br>
  
    <button @click="cadastrar">Cadastrar</button>

  </div>
</template>
  
<script>
import axios from 'axios'

const minhaApi = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
  name: "CadastrarFornecedor",
  data() {
    return {
      fornecedor: {
        nome: null,
        cnpj: null,
        situacao: true
      },
      notificacao: null,
      cnpjToValidate: "",
      resultadoValidacao: "",
      cnpjInvalido: false
    }
  },
  methods: {
    async cadastrar() {
      try {
        const response = await minhaApi.post("/fornecedor/cadastrar", this.fornecedor);
        this.notificacao = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao cadastrar fornecedor:", error);
      }
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
      function validaCNPJ (cnpj) {
    var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
    var c = String(cnpj).replace(/[^\d]/g, '')
    
    if(c.length !== 14)
        return false

    if(/0{14}/.test(c))
        return false

    for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
    if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
    if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    return true
}

      return validaCNPJ(cnpj);
    },
    Verificar() {
      this.resultadoValidacao = this.isValidCNPJ(this.cnpjToValidate) ? "Válido" : "Inválido";
    }
  }
}
</script>