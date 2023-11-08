<template>
    <div id="carrinho">
        <h3>Carrinho R$ {{ total }}</h3>
        <ul>
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"/>
                {{ produto.nome }} R$ {{ produto.valor }}
                <a href="#" @click="removerProduto(produto.id)">Remover</a>
            </li>
        </ul>
        <!-- 
            <a href="#" class="btn-finalizar-compra">Finalizar compra</a>
        -->
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
    background: orange;
    width: 100px;
    height: 30px;
    text-align: center;
    display: block;
    text-decoration: none;
    border-radius: 7px;
    position: absolute;
    bottom: 0;
    color: #ffffff;
    font-size: 11px; 
}
</style>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "Carrinho",
    computed: {
        ...mapState("carrinho", ["produtos", "total"]),
    },
    methods: {
        ...mapActions("carrinho", ["removerProduto"])
    }
}
</script>