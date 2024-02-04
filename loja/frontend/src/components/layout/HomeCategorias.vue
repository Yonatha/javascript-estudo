<template>
    <div class="categorias">
        <h3>categorias</h3>
        <nav>
            <a href="/">BOLSAS</a>
            <a href="/">SANDÁLIAS</a>
            <a href="/">BLUSAS</a>
            <a href="/">VESTIS</a>
            <a href="/">TÊNIS</a>
            <a href="/">CALÇA JEANS</a>
            <a href="/">SAPATILHAS</a>
        </nav>

        <ul>
            <li v-for="produto in produtos" :key="produto.id">

                    <a :href="`/loja/${produto.id}`">
                        <img :src="produto.imagem" :alt="produto.nome">
                    </a>
                
                    <a :href="`/loja/${produto.id}`">
                        {{ produto.nome }}
                    </a>
                <span>R$ {{ produto.valor }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeCategoria",
    data() {
        return {
            produtos: [
                {id: 1, nome: "NOME PRODUTO 1", imagem: "images/produto1.png", valor: 99.90},
                {id: 2, nome: "NOME PRODUTO 2", imagem: "images/tenis2.jpg", valor: 1.90},
                {id: 3, nome: "NOME PRODUTO 3", imagem: "images/produto3.png", valor: 9.90},
                {id: 4, nome: "NOME PRODUTO 4", imagem: "images/produto4.png", valor: 3.90}
            ]
        }
    },
}
</script>


<style>
.categorias {
    text-align: center;
    width: 1296px;
    height: 510px;
    margin: auto;
    margin-top: 40px;
    background: #ffffff;
}

.categorias h3 {
    text-transform: uppercase;
    font-size: 20px;
    width: 121px;
    height: 23px;
    margin: auto;
}

.categorias nav {
    margin-top: 25px;
}

.categorias nav a {
    color: #E27F54;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    width: 651px;
    height: 16px;
    margin-left: 34px;
}
.categorias ul {
    height: 389px;
    padding: 0;
    margin-top: 25px;
}

.categorias ul li {
    font-size: 14px;
    width: 258px;
    height: 389px;
    float: left;
    margin-left: 51px;
    list-style: none;
}

.categorias ul li a {
    display: block;
    color: black;
    font-weight: bold;
    text-align: left;
    margin-top: 10px;
    text-decoration: none;
    
}

.categorias ul li span {
    color: #E27F54;
    font-weight: bold;
    text-align: left;
    font-family: Arial;
    margin-top: 8px;
    display: block;
}

.categorias img {
    width: 258px;
    height: 328px;
}

</style>