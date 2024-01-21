<template>    
    <div class="ultimas-do-blog">
        <header>
            <h3>últimas do blog</h3>
        </header>
        <div>
            <img src="images/post1.png" alt="post1">
            <a href="#" class="titulo">
                Após conversa com Lula, Marta aceita ser vice de Boulos em SP
            </a>

            <span>11/03/2022</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium alias provident nisi debitis quibusdam vero repudiandae unde repellat, placeat dicta dolorem rerum inventore quidem ex? Ratione laborum a ipsa!</p>
            <a href="#">
                Leia mais...
            </a>
        </div>
        <div>
            <img src="images/post2.png" alt="post2">
            <a href="#" class="titulo">
                Quem é Daniel Noboa, presidente mais jovem do Equador e que enfrenta primeira grande crise
            </a>

            <span>11/03/2022</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium alias provident nisi debitis quibusdam vero repudiandae unde repellat, placeat dicta dolorem rerum inventore quidem ex? Ratione laborum a ipsa!</p>
            <a href="#">
                Leia mais...
            </a>
        </div>
        <div>
            <img src="images/post3.png" alt="post3">
            <a href="#" class="titulo">
                Marta Suplicy pede demissão de secretaria de Nunes após aceitar ser vice na chapa de Boulos
            </a>

            <span>11/03/2022</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium alias provident nisi debitis quibusdam vero repudiandae unde repellat, placeat dicta dolorem rerum inventore quidem ex? Ratione laborum a ipsa!</p>
            <a href="#">
                Leia mais...
            </a>
        </div>
    </div>    
</template>


<style>

body {
    background: #E5E5E5;
}

.ultimas-do-blog {
    text-align: center;
    width: 1100px;
    margin: auto;
    margin-top: 50px;
    background: #ffffff;
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

.ultimas-do-blog header {
    width: 100%;
}

.ultimas-do-blog h3 {
    font-size: 20px;
    text-transform: uppercase;
    border-bottom: #E27F54 solid 3px;
    width: 208px;
    margin: auto;
}

.ultimas-do-blog div {
    width: 357px;
    height: 445px;    
    margin-top: 22px;
    font-size: 14px;
}

.ultimas-do-blog p {  
    text-align: justify;
    font-family: Arial;
    line-height: 18px;
    
}

.ultimas-do-blog span {
    display: block;
    text-align: left;
    margin-top: 10px;
    
}

.ultimas-do-blog img {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    text-align: cent;
    width: 357px;
    height: 222px;
    object-fit: cover;
}

.ultimas-do-blog a {
    color: #E27F54;
    float: left;
    text-decoration: none;
    margin-top: 8px;
}

.ultimas-do-blog a:hover {
    text-decoration:underline;
}

.ultimas-do-blog a.titulo {
    font-weight: bold;
    text-align: left;
    color: #000000;
    display: block;
}

.ultimas-do-blog a.titulo:hover {   
    color: #E27F54;
}

</style>