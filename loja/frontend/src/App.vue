<template>
  <Cabecalho />
  <Notificacao />
  <br>
  <!-- Carrinho / -->
  <router-view />
</template>

<style>
html {
  font-family: Arial;
}
</style>

<script>
import Carrinho from "./components/carrinhos/Carrinho.vue"
import Notificacao from "./components/layout/Notificacao.vue"
import Cabecalho from "./components/layout/Cabecalho.vue";
import paginas from "./paginas/Home.vue";

export default {
  components: {
    Carrinho,
    Notificacao,
    Cabecalho,
    paginas,
  },
}
</script>