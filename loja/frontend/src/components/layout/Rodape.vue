<template>
    <div class="rodape">
        <div class="conteudo">
            <footer>
                <img src="images/webchain-rodape.png" alt="webchain" class="webchain-rodape">
                    
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
            <div class="conta"> 
                <p>MINHA CONTA</p>
                <a href="#" class="email">
                    Perfil
                </a>
                <a href="#" class="Login">
                    Login
                </a>

            </div>
            <div class="newslatter"> 
                <p>informe seu e-mail</p>
                <p>SIGA NAS REDES SOCIAIS</p>

            </div>
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
    justify-content: space-between; 
}

.conteudo {
    display: flex;
    align-items: flex-start;
}

.informacao, .conta, .newslatter {
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
    width: 235px;
    margin: 0px;
    color: white;
    margin-left: 83px;
    text-decoration: none;
}

.rodape p {

}

</style>