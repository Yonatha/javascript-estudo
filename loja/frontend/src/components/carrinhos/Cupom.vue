<template>
    Cupom
    <input type="text" name="cupom" v-model="cupom"/>
    <button @click="aplicarCupom()" :disabled="cupomAplicado">Aplicar Cupom</button>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
    name: "Cupom",
    data() {
        return {
            cupomAplicado: false
        };
    },
    computed: {
        ...mapGetters("carrinho", ["cupom"])
    },
    methods: {
        ...mapActions("cupom", ["aplicarCupom"]),
        aplicarCupom() {
            if (!this.cupomAplicado) {                
                this.cupomAplicado = true;
            }
        }
    }
}


</script>