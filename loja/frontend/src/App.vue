<template>
  <CadastrarCliente />
  <ListarCliente />

  <div style="width: 25%; float: left;">
    <CadastrarFornecedor />
  </div>

  <div style="width: 25%; float: left;">
    <CadastrarCategoria />
  </div>
</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
import CadastrarCategoria from "./components/categorias/CadastrarCategoria.vue"
</script>

<style>
html {
  font-family: Arial;
}
</style>