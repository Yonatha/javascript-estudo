<template>
  <div>
    <h3>Cadastro de Fornecedor</h3>
    <p>{{ notificacao }}</p>
    <label>Nome</label><br>
    <input name="nome" v-model="fornecedor.nome" /><br>

    <label>CNPJ</label><br>
    <input name="cnpj" v-model="fornecedor.cnpj" v-on:blur="validaCNPJ()" />
    <p v-if="cnpjInvalido"> CNPJ Inválido</p>
    <br>

    <label>Situacao</label><br>
    <input type="checkbox" v-model="fornecedor.situacao" /><br>

    <button @click="cadastrar">Cadastrar</button>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "CadastrarFornecedor",
  data() {
    return {    
      notificacao: null,
      cnpjToValidate: "",
      resultadoValidacao: ""
    }
  },
  computed: {
      ...mapState("fornecedor", ["fornecedor","cnpjInvalido"]),
  },
  methods: {
    ...mapActions("fornecedor", ["cadastrar","validaCNPJ","isValidCNPJ","Verificar"])
  
  }  
}
</script>