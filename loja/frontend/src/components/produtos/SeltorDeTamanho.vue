<template>
    <div class="container">
        <p>Tamanho selecionado: <b>{{ tamanhoSelecionado }}</b></p>
        <div id="P" :class="detectarSelecionado('P')" @click="selecionarTamanho('P')">P</div>
        <div id="M" :class="detectarSelecionado('M')" class="opcao" @click="selecionarTamanho('M')">M</div>
        <div id="G" :class="detectarSelecionado('G')" class="opcao" @click="selecionarTamanho('G')">G</div>
        <div id="GG" :class="detectarSelecionado('GG')" class="opcao" @click="selecionarTamanho('GG')">GG</div>
    </div>
</template>

<style scoped>
.container {
    width: 278px;
    height: 96px;
    border: 1px solid red;
}

.container div.opcao {
    width: 58px;
    height: 58px;
    border: 1px solid #E9E9E9;
    border-radius: 100px;
    text-align: center;
    vertical-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.selecionado {
    background: #FFE6D9;
}
</style>

<script>
export default {
    data() {
        return {
            tamanhoSelecionado: 'P'
        }
    },
    methods: {
        selecionarTamanho(tamnho) {
            this.tamanhoSelecionado = tamnho
            /*const opcoes = document.getElementsByClassName("opcao")
            for (let index = 0; index < opcoes.length; index++) {
                const element = opcoes[index];
                element.classList.remove("selecionado");
            }
            const opcao = document.getElementById(tam);         
            opcao.classList.toggle("selecionado");*/
        },
        detectarSelecionado(tamanho) {
            return this.tamanhoSelecionado == tamanho ? 'opcao selecionado' : 'opcao'
        }
    },
}
</script>