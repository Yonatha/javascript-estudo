<template>
  <DestaquePrincipal />

  <!-- div id="orientacoes">
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
  </div -->
  <div class="principal">
    <Catalogo />
  </div>

  <HomeCategorias />
  <HomeDestaque />
  <Promocao/>
  <Oferta />
  <UltimasBlog />
  <Logomarca />
</template>

<script>
import DestaquePrincipal from "../components/layout/DestaquePrincipal.vue"
import HomeDestaque from "../components/layout/HomeDestaque.vue";
import HomeCategorias from "../components/layout/HomeCategorias.vue";
import UltimasBlog from "../components/layout/UltimasBlog.vue";
import Logomarca from "../components/layout/logomarca.vue";
import Oferta from "../components/layout/Oferta.vue";
import Catalogo from "../components/shared/Catalogo.vue"
import Promocao from "../components/layout/Promocao.vue";

export default {
  components: {
    Catalogo,
    DestaquePrincipal,
    HomeDestaque,
    HomeCategorias,
    UltimasBlog,
    Logomarca,
    Oferta,
    Promocao
  }
}

</script>

<style>

.principal {
  width: 760px;
  margin: auto;
  padding-top: 15px;
}

#orientacoes {
  width: 1185px;
  height: 96px;
  margin: auto;
  margin-top: 20px;
}

#orientacoes div {
  width: 354px;
  height: 96px;
  border: 2px solid #898B8C;
  float: left;
  margin-right: 23px;

}

#orientacaoBlog div {
  width: 350px;
  height: 235px;
  border: 2px solid grey;
  margin-top: 17px;
  margin-left: 87px;
}

#leiaMaisBtn {
  background: none;
  border: none;
  color: rgba(216, 104, 60, 0.658);
  cursor: pointer;
  outline: none;
}

#leiaMaisBtn:hover {
  color: blue;
}

#leiaMaisBtn:active {
  color:red;
}

</style>