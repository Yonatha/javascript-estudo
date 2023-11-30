<template>
    <h3>Resumo da Compra</h3>

    ...

    <h4>Escolha a forma de pagamento </h4>

    <input type="radio" v-model="formaDePagamento" name="formaDePagamento" v-on:change="alterarFormaDePagamento" value="cc"/> Cartão
    <input type="radio" v-model="formaDePagamento" name="formaDePagamento" v-on:change="alterarFormaDePagamento" value="pix"/> PIX
    <input type="radio" v-model="formaDePagamento" name="formaDePagamento" v-on:change="alterarFormaDePagamento" value="boleto"/> Boleto
    <br>
    <img :src="qrCodeGerado" v-show="formaDePagamento == 'pix'" />
    <br>
    
    <div v-show="formaDePagamento == 'cc'">
        <br>
        Titular<br>
        <input type="text" name="cc_titular"><br>
        Número<br>
        <input type="text" name="cc_numero"><br>
        CVV<br>
        <input type="text" name="cc_cvv"><br>
        Validade<br>  
        <input type="text" name="cc_validade"><br>
    </div>
    <br>

    <div>
        <input type="text" v-model="frango10" placeholder="Cupom de desconto" class="btn-cupom-desconto" />
        <label @click="cupom()" class="btn-cupom">Cupom</label>
    </div>

    ...

</template>

<style scoped>
.btn-cupom {
    background: #0B64E1;
    width: 113px;
    height: 35px;
    text-align: center;
    text-decoration: none;
    border-radius: 7px;
    position: absolute;
    color: #ffffff;
    font-size: 20px;
    align-items: center;
}
.btn-cupom-desconto {
    width: 192px;
    height: 35px;
    border-radius: 3px;
    border: 1px solid #C6C4C4;
    background: #FFF;
}

</style>

<script>
import { mapGetters, mapActions } from 'vuex';
import QRCode from 'qrcode'


export default {
    name: "Checkout",
    computed: {
    },
    data(){
        return {
            formaDePagamento: null,
            qrCodeGerado: null
        }
    },
    computed: {
        ...mapGetters("carrinho", ["cliente_id", "total"]),
    },
    methods: {
        ...mapActions("carrinho", ["checkout", "cupom"]),
        alterarFormaDePagamento() {
            if (this.formaDePagamento == 'pix') {
                this.gerarPix()
            } else if(this.formaDePagamento == 'cc'){
                console.log('exibir formulario pedindo dados do CC');
            } else {
                console.log('gerar boleto em PDF');
            }
        },
        gerarPix() {
            QRCode.toDataURL(`${this.total};${this.cliente_id}`, {
                width: 300,
                height: 300,
                margin: 1
            }, async (err, url) => {
                this.qrCodeGerado = await url
            })
        }
    }
}
</script>