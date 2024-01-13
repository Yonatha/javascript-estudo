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
            <li>
                <img src="images/produto1.png" alt="NOME PRODUTO 1">
                    <a href="#">
                        NOME PRODUTO 1
                    </a>
                <span>R$ 99,90</span>
            </li>
            <li>
                <img src="images/tenis2.jpg" alt="NOME PRODUTO 2">
                <a href="#"> NOME PRODUTO 2</a>
                <span>R$ 99,90</span>
            </li>
            <li>
                <img src="images/produto3.png" alt="NOME PRODUTO 3">
                <a href="#"> NOME PRODUTO 3 </a>
                <span>R$ 99,90</span>
            </li>
            <li>
                <img src="images/produto4.jpg" alt="NOME PRODUTO 4">
                <a href="#">NOME PRODUTO 4</a>
                <span>R$ 99,90</span>
            </li>
        </ul>
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