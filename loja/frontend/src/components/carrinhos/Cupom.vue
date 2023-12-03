<template>
    Cupom
    <input type="text" name="cupom" v-model="cupom"/>
    <button @click="aplicarCupom()">Aplicar Cupom</button>
</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
    name: "Cupom",
    computed: {
        ...mapGetters("carrinho", ["cupom"])
    },
    methods: {
        ...mapActions("cupom", ["aplicarCupom"])
    }
}
</script>