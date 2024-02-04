<template>
    <div class="container">

        <Catalogo/>   

        <SeltorDeTamanho />

        <div class="bloco1"></div>
        <div class="bloco2"></div>

        <section id="ofertas">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div>
</template>

<script>
import Catalogo from "../shared/Catalogo.vue"
import SeltorDeTamanho from "../produtos/SeltorDeTamanho.vue"

export default {
  components: {
    Catalogo,
    SeltorDeTamanho
  }
}
</script>

<style scoped>
.container {
    width: 760px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 20px;
}

.container .bloco1,
.container .bloco2
{
    width: 370px;
    height: 320px;
}

.container .bloco1 {
    background: #DEEFFF;
}

.container .bloco2 {
background: #E9E9E9
}


.container section#ofertas {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;   
}

.container section#ofertas div {
    width: 165px;
    height: 232px;
    background: #FFE6D9;
}

</style>
