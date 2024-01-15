<template>
    <div class="rodape">
        <img src="images/webchain-rodape.png" alt="webchain" class="webchain-rodape">
        
        <footer>
            <a href="#" class="endereco">
                Av. Nome completo da Avenida, 8007,<br>
                Bairro, Cidade, Estado
            </a>
            <a href="#" class="email">
                E-mail: info@nomeloja.com.br
            </a>
            <a href="#" class="telefone">
                Telefone: +55 83 9999-9999
            </a>
        </footer>
        <div class="informacao"> 
            <p>INFORAMÇÃO</p>
        </div>
    </div>

</template>


<style>

.rodape {
    width: 1296px;
    height: 544px;
    border: red 1px solid;
    margin: auto;
    text-align: left; 
    background-color: black;  
}

.informacao {
    width: 149px;
    height: 176px;
    border: yellow 1px solid;
    margin: auto;
    text-align: left;
    background-color: darkgray;

}

.webchain-rodape {
    margin-left: 83px;
    margin-top: 48px;
}

.rodape a {    
    display: block;
    padding: 20px;
    height: 15px;
    margin: 0px;
    color: white;
    margin-left: 83px;
    text-decoration: none;
}

.rodape p {

}

</style>