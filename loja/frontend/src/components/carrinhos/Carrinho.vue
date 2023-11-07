<template>
    <div id="carrinho">
        Carrinho {{ produtos.length > 0 ? ` com ${produtos.length}` : 'vazio' }}
        <ul>
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"  width="50"/>
            </li>
        </ul>
        <div v-if="produtos.length > 0">
            <span class="total">R$ {{ total }},00</span>
            <br>
            <br>
            <br>
            <a href="#" class="btnFinalizarCompra">Finalizar compra</a>
        </div>
    </div>
</template>


<script>
import { mapState } from "vuex";

export default {
    name: "Carrinho",
    computed: {
    ...mapState("carrinho", ["produtos", "total"])
    },
    async mounted() {
        
    },
    methods: {
    }
}
</script>

<style>
#carrinho {
    position: absolute;
    right: 20px;
    top: 6px;
}

#carrinho ul li {
    list-style: none;
}

#carrinho span.total {
    font-size: 21px;
    color: blue;
    text-align: right;
    display: block;
}

#carrinho .btnFinalizarCompra{
    color: #ffffff;
    background: rgb(51, 0, 255);
    text-decoration: none;
    padding: 4px;
    width: 100px;
    display: block;
    text-align: center;
    border-radius: 16px;
    position: absolute;
    bottom: 0;
}
</style>