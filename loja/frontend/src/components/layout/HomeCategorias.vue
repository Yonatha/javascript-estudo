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

      <div>
        <img src="images/produto1.png" alt="produto1">
            <a href="#" class="titulo">
                NOME PRODUTO
            </a>
        <p>R$ 99,90</p>
      </div>
  
      <div>
        <img src="images/produto2.png" alt="produto2">
            <a href="#" class="titulo">
                NOME PRODUTO
            </a>
        <p>R$ 99,90</p>
      </div>
  
      <div>
        <img src="images/produto3.png" alt="produto3">
            <a href="#" class="titulo">
                NOME PRODUTO
            </a>
        <p>R$ 99,90</p>
      </div>

      <div>
        <img src="images/produto4.png" alt="produto4">
            <a href="#" class="titulo">
                NOME PRODUTO
            </a>
        <p>R$ 99,90</p>
      </div>
    </div>
</template>

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

.categorias div {
    font-size: 14px;
    width: 258px;
    height: 389px;
    float: left;
    margin-left: 51px;
    margin-top: 25px;
}

.categorias div a {
    display: block;
    color: black;
    font-weight: bold;
    text-align: left;
    margin-top: 10px;
    text-decoration: none;
    
}

.categorias div p {
    color: #E27F54;
    font-weight: bold;
    text-align: left;
    font-family: Arial;
    margin-top: 8px;
}

.categorias img {
    width: 258px;
    height: 328px;
}

</style>