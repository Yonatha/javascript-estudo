<template>
    <h3>Compra</h3>

    <h4>Escolha a forma de pagmaento</h4>
    <input type="radio" v-model="formaPagamento" v-on:change="alterarFormaDePagamento" name="forma_pagamento" value="cc" /> Cartão<br>

    <input type="radio" v-model="formaPagamento" v-on:change="alterarFormaDePagamento" name="forma_pagamento" value="pix" /> PIX<br>

    <input type="radio" v-model="formaPagamento" v-on:change="alterarFormaDePagamento" name="forma_pagamento" value="boleto" /> Boleto<br>

    <img :src="qrCode" v-show="formaPagamento == 'pix'" />

</template>

<style scoped>
</style>

<script>
import { mapGetters, mapActions, useStore } from 'vuex'
import QRCode from 'qrcode'

export default {
    name: "Compra",
    data(){
    return {
            formaPagamento: null,
            qrCode: null
        }
    },
    computed: {
        ...mapGetters("carrinho", ["produtos", "total"]),
    },
    methods: {
        alterarFormaDePagamento() {
            if (this.formaPagamento === 'pix') {
                this.pix();
            } else {

            }
        },
        pix() {
            QRCode.toDataURL('I am a pony!', {
                width: 300,
                height: 300,
                margin: 1
            }, async (err, url) => {
                this.qrCode = await url
            })
        }
    },
    async mounted() {
    },
}
</script>