<template>
  <nav>
    <a href="/clientes">Clientes</a> - 
    <a href="/fornecedores">Fornecedores</a> - 
    <a href="/categorias">Categorias</a>
  </nav>
  <br>
  <router-view />
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