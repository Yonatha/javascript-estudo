<template>
  <DestaquePrincipal />
  

  <div id="orientacoes">
    <div>
      <h3>PROMOÇÕES</h3>
      <p>Frete grátis para compras acima de R$ 100,00</p>
    </div>

    <div>
      <h3>CARTÃO DE PRESENTE</h3>
      <p>Ganhe um cartão de presente com 10% de desconto</p>
    </div>

    <div>
      <h3>SUPORTE ONLINE 24/7</h3>
      <p>Atendimento online e personalizado </p>
    </div>
    <UltimasBlog />
  </div>
  

</template>


<script>
import DestaquePrincipal from "../components/layout/DestaquePrincipal.vue";
import UltimasBlog from "../components/layout/UltimasBlog.vue";

export default {
  components: {
    DestaquePrincipal,
    UltimasBlog
  },
}
</script>

<style>

#orientacoes {
  width: 1184px;
  height: 96px;
  margin: auto;
  margin-top: 20px;
}

#orientacoes div {
  width: 354px;
  height: 96px;
  border: 2px solid #898B8C;
  float: left;
  margin-right: 37px;
  margin-bottom: 358px;
}

</style>