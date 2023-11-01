<template>
  <nav>
    <a href="/clientes">Clientes</a> - 
    <a href="/fornecedores">Fornecedores</a> - 
    <a href="/categorias">Categorias</a> - 
    <a href="/produtos">Produtos</a> -
    <a href="/carrinho">Carrinho</a> - 
    <a href="/playground">Playground</a>
  </nav>
  <br>

  <Carrinho />
  <router-view />
</template>

<script>
import Carrinho from "./components/carrinhos/Carrinho.vue";
export default {
  components: {
    Carrinho
  },
};
</script>

<style>
html {
  font-family: Arial;
}
</style>