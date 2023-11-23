<template>
        <h3>Compra</h3>
</template>

<style scoped>
</style>

<script>
import { mapGetters, mapActions, useStore } from 'vuex';
export default {
    name: "Compra",
    setup: () => {
        const store = useStore()
        store.dispatch("carrinho/listar")
    },
    computed: {
        ...mapGetters("carrinho", ["produtos", "total"]),
    },
    methods: {
        ...mapActions("carrinho", ["removerProduto", "finalizarCompra"])
    }
}
</script>