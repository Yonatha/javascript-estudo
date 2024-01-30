<template>
    <div class="rodape">
        <div class="conteudo">
            <footer>
                <img src="images/webchain-rodape.png" alt="webchain" class="webchain-rodape">
                    
                <a href="#" class="endereco">
                    Av. Nome completo da Avenida, 8007, Bairro, Cidade, Estado
                </a>
                <a href="#" class="email">
                    E-mail: info@nomeloja.com.br
                </a>
                <a href="#" class="telefone">
                    Telefone: +55 83 9999-9999
                </a>
            </footer>

            <div class="informacao"> 
                <p>INFORMAÇÃO</p>     
                
                <a href="#" class="home">
                    Home
                </a>
                <a href="#" class="sobrenossaloja">
                    Sobre nossa loja
                </a>
                <a href="#" class="service">
                    Serviços
                </a>
                <a href="#" class="localizacao">
                    Localização
                </a>
                <a href="#" class="perguntasfrequentes">
                    Perguntas Frequentes
                </a>
                
            </div>
            
            <div class="conta"> 
                <p>MINHA CONTA</p>
                <a href="#" class="email">
                    Perfil
                </a>
                <a href="#" class="Login">
                    Login
                </a>
                <a href="#" class="Cadastro">
                    Cadastro
                </a>
                <a href="#" class="Meus Pedidos">
                    Meus Pedidos
                </a>
            </div>

            <div class="newslatter"> 
                <p>NEWSLATTER</p>
                <a href="#" class="assinar">
                    Inscrever-se
                </a>
                <a href="#" class="redesociais">
                    SIGA NAS REDES SOCIAIS
                </a>
               
            </div>
            <div class="orientacoesgerais">
                <a href="#" class="politicaprivacidade">
                    Policita de Privacidade
                </a>
                <a href="#" class="mapasite">
                    Mapa do site
                </a>
                <a href="#" class="contato">
                    Contato
                </a>
                <p>Copyright (c) 2022 Todos os direitos reservados</p>
            </div>
        </div>
    </div>
</template>


<style>

.rodape {
    width: 1296px;
    height: 544px;
    margin: auto;
    text-align: left; 
    background-color: black;
    justify-content: space-between; 
}

.conteudo {
    display: flex;
    align-items: flex-start;
}

.webchain-rodape {
    margin-left: 83px;
    margin-top: 48px;
}

.conteudo a, .conta a, .newslatter a {    
    display: block;
    padding: 20px;
    height: 15px;
    width: 235px;
    margin: 0px;
    color: white;
    margin-left: 83px;
    text-decoration: none;

}

.informacao a, .conta a, .newslatter a, .orientacoesgerais a {
    height: 0px;
    margin-left: 30px;
}

.informacao p, .conta p, .newslatter p, .orientacoesgerais p {
    font-size: 18px;
    color: white;
    margin-top: 53px;
    margin-left: 48px;
    text-align: left;
}



</style>