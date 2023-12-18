<template>
    Cupom
    <input type="text" name="cupom" v-model="cupom"/>
    <button @click="aplicarCupom" :disabled="cupomAplicado">Aplicar Cupom</button>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
    name: "Cupom",
    data() {
        return {
            cupomAplicado: null, 
        };
    },
    computed: {
        ...mapGetters("carrinho", ["cupom"])
    },
    methods: {
        ...mapActions("cupom", ["aplicarCupom"]),
        async aplicarCupom(){
            if (!this.cupomAplicado);
            await this.aplicarCupom();
            this.cupomAplicado = true;
        }
    }
}


</script>