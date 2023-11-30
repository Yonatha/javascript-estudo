<template>
    <h4>Cupom teste</h4>
</template>

<style scoped></style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Cupom",
    data() {
        return {
            frango10: null
        }
    },
    computed: {
        ...mapGetters("checkout", ["cliente_id", "total", "cupom"]),
    },
    methods: {
        aplicarCupom() {
            frango10 = true
            if (this.frango10 == true) {
                console.log(`Desconto de 10% aplicado a sua compra!`);
            } else {
                console.log('CUPOM INVÁLIDO, EXPIRADO OU JÁ UTILIZADO.');
            }
        },
    }
}


</script>