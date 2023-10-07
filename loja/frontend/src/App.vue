<template>
  <CadastrarCliente />
  <ListarCliente />

  <div style="width: 25%; float: left;">
    <CadastrarFornecedor />
  </div>
</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
</script>

<style>
html {
  font-family: Arial;
}
</style>