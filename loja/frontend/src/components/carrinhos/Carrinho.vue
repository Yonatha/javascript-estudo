<template>
    <div id="carrinho">
        Carrinho {{ produtos.length > 0 ? ` com ${produtos.length}` : 'vazio' }}
        <ul>
            <li v-for="produto in produtos">
                <img :src="`http://localhost:3000/uploads/${produto.imagem}`"  width="50"/>
            </li>
        </ul>
        <span class="total">R$ {{ total }},00</span>
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
</style>