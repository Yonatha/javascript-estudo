<template>
  <CadastrarCliente />
  <ListarCliente /> 
  
  <div style="width: 25%; float: left;">
    <CadastrarFornecedor />
  </div>
  
  <div style="width: 25%; float: left;">
    <ListarFornecedor />
  </div>
  
  <div style="width: 25%; float: left;">
    <CadastrarCategoria />
  </div>

  <div style="width: 25%; float: left;">
    <ListarCategoria />
  </div>
  
</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
import CadastrarCategoria from "./components/categorias/CadastrarCategoria.vue"
import ListarFornecedor from "./components/fornecedores/ListarFornecedor.vue"
import ListarCategoria from "./components/categorias/ListarCategoria.vue"
</script>

<style>
html {
  font-family: Arial;
}
</style>