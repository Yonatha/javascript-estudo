<template>
  <CadastrarCliente />
  <ListarCliente />

  <div style="width: 25%; float: left;">
    <CadastrarFornecedor />
  </div>

  <div class="formularioCarrinhos">
        <CadastrarCarrinho/>
    </div>

    <div class="listagemCarrinhos">
        <ListarCarrinho/>
    </div>

</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
import CadastrarFornecedor from "./components/fornecedores/CadastrarFornecedor.vue"
import CadastrarCarrinho from "./components/carrinhos/CadastrarCarrinho.vue"
import ListarCarrinho from "./components/carrinhos/ListarCarrinho.vue"
</script>

<style>
html {
  font-family: Arial;
}
</style>