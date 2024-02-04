<template>
    <div class="container">
        <div class="opacidade"></div>
        <img src="/images/oferta.jpg" />
        <h3>VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO SOBRE NÓS!</h3>
        <p>
            A qualidade do serviço é, de forma geral, realmente superior aos concorrentes do mercado.
        </p>
    </div>
</template>

<style scoped>
.container {
    width: 1100px;
    height: 418px;
    margin: auto;
    margin-top: 59px;
    color: #ffffff;
    text-align: center;
    position: relative;
}

.container .opacidade {
    background: green;
    width: 1100px;
    height: 418px;
    position: absolute;
    opacity: 50%;
}

.container h3 {
    font-size: 32px;
    position: absolute;
    width: 100%;
    top: 28%;
    left: 1%;
}

.container p {
    font-size: 30px;
    position: absolute;
    width: 75%;
    top: 40%;
    left: 15%;
}
</style>