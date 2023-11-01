template de um componente vue
<template>
    <h1>Playground</h1>
{{ contador }}
<button @click="somar()">+</button>
<button @click="subtrair()">-</button>
</template>

<script>

import {mapState, mapActions, useStore} from 'vuex'

export default {
    name: "Playground",
    data() {
        return {
            contador: 0
        }
    },
    computed: {
        ...mapState('carrinho', ['carrinho']),
    },
    methods: {
        somar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }
}
</script>