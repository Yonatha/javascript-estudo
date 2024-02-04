<template>
    <div class="promocao">
        <h3>promoção</h3>

        <div v-for="promocao in promocoes">
            <PromocaoItem :nome="promocao.nome" :desconto="promocao.desconto" :valor="promocao.valo" />
        </div>
    </div>
</template>

<script>

/*
TODO A array promocoes deve vir do banco de dados utilizando a seguinte query
SELECT * FROM produtos where promocional = 1 order by valor limit 12
*/

import PromocaoItem from "./PromocaoItem.vue"
export default {
    components: {
        PromocaoItem
    },
    data() {
        return {
            promocoes: [
                {
                    nome: "Nome 1",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 2",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 3",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 3",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 1",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 2",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 3",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 3",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 1",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 2",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 3",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                },
                {
                    nome: "Nome 3",
                    desconto: "R$ 99,90",
                    valor: "R$ 115,50"
                }
            ]
        }
    },
}
</script>

<style>
.promocao {
    width: 1215px;
    height: 500px;
    margin: auto;
    margin-top: 66px;
}

.promocao h3 {
    font-size: 20px;
    margin-left: 38px;
    text-transform: uppercase;
    border-bottom: #E27F54 solid 3px;
    width: 120px;
}

.promocao ul {
    height: 500px;
    margin-right: 45px;
    margin-top: 31px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.promocao li {
    width: 242px;
    height: 108px;
    list-style: none;
}

.promocao .box {
    background: #F4F4F4;
    width: 86px;
    height: 108px;
}

.promocao .box a {
    color: #000000;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    margin-left: 100px;
    position: absolute;
    display: block;
}

.promocao .box .desconto {
    color: #E27F54;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    position: absolute;
    margin-left: 100px;
    margin-top: 25px;
    display: block;
}

.promocao .box span {
    color: #A5A3A3;
    font-size: 16px;
    font-weight: bold;
    text-decoration: line-through;
    position: absolute;
    margin-left: 170px;
    margin-top: 25px;
    display: block;
}
</style>