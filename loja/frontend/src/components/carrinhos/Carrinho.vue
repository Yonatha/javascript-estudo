<template>
    <div id="carrinho">
        <h3>Carrinho R$ {{ total }}</h3>
        <ul>
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"/>
                <a href="#" @click="removerProduto(produto.id)">Remover</a>
            </li>
        </ul>
        <a href="#" @click="finalizarCompra()" class="btn-finalizar-compra">Finalizar compra</a>
    </div>
</template>

<style scoped>
#carrinho {
    position: absolute;
    right: 15px;
    top: 15px;
}

#carrinho img {
    width: 60px;
}
#carrinho ul {
    padding: 0;
}

#carrinho ul li {
    list-style: none;
    margin-bottom: 10px;
}

.btn-finalizar-compra {
    background: red;
    height: 30px;
    text-align: center;
    display: block;
    text-decoration: none;
    border-radius: 7px;
    color: #ffffff;
    font-size: 18px;
    width: 100%;
    padding-top: 6px;
}
</style>

<script>
import { mapGetters, mapActions, useStore } from 'vuex';
export default {
    name: "Carrinho",
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