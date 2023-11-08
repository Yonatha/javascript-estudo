<template>
    <div id="carrinho">
        <h3>Carrinho</h3>
        <ul>
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"/>
                {{ produto.nome }}
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
    right: 0;
    top: 0;
    border: 1px solid red;
}

#carrinho img {
    width: 60px;
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
import { mapState } from 'vuex';
export default {
    name: "Carrinho",
    computed: {
        ...mapState("carrinho", ["produtos", "total"]),
    }
}
</script>