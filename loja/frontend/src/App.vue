<template>
  <nav>
    <a href="/clientes">Clientes</a> - 
    <a href="/fornecedores">Fornecedores</a> - 
    <a href="/categorias">Categorias</a> - 
    <a href="/produtos">Produtos</a> -
    <a href="/carrinho">Carrinho</a>
  </nav>
  <br>
  <Carrinho />
  <router-view />
</template>

<style>
html {
  font-family: Arial;
}
</style>

<script>
import Carrinho from "./components/carrinhos/Carrinho.vue"
export default {
  components: {
    Carrinho
  },
}
</script>