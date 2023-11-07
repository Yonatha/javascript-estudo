<template>
    <div id="carrinho">
        <h3>Carrinho</h3>
        <ul>
            <li>Produto 1 <a href="#" @click="removerProduto(1)">Remover</a></li>
            <li>Produto 2 <a href="#" @click="removerProduto(2)">Remover</a></li>
            <li>Produto 3 <a href="#" @click="removerProduto(3)">Remover</a></li>
        </ul>
        <a href="btn-finalizar-compra">Finalizar Compra</a>
    </div>
</template>

<style scoped>
#carrinho {
    position: absolute;
    right: 0;
    top: 0;
    border: 1px solid red;
}
</style>

<script>
export default {
    name: "Carrinho",
    data(){
      return {
        carrinho: {
            produtos: [],
            cliente_id: 1
        }
      }
    },
    methods: {
        async adicionarProduto(id){
            console.log("adicionando produto " + id + " ao carrinho");
        },
        removerProduto(id){
            console.log("excluindo produto " + id);
        }
    }
}
</script>