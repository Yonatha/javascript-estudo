<template>

  <div style="width: 25%; float: left;">
    <CadastrarCliente />
  </div>

  <div style="width: 75%; float: left;">
    <ListarCliente />
  </div>

</template>

<script setup>
import CadastrarCliente from "./components/clientes/CadastrarCliente.vue"
import ListarCliente from "./components/clientes/ListarCliente.vue"
</script>
