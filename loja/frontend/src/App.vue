<template>
<!--
<div class="formularioClientes">
      <CadastrarCliente />
    </div>
  
    <div class="listagemClientes">
      <ListarCliente />
    </div>
-->
    <div class="formularioProdutos">
      <CadastrarProduto/>    
    </div>
  
  </template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import CadastrarProduto from "./components/produtos/CadastrarProduto.vue";

</script>

<style>
html {
  font-family: Arial;
}
</style>