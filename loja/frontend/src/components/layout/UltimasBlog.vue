<template>
    <div class="container">
        <div class="imagem">
            <img src="images/post1.png" alt="post1">
        </div>
        <div class="imagem">
            <img src="images/post2.png" alt="post2">
        </div>
        <div class="imagem">
            <img src="images/post3.png" alt="post3">  
        </div>
    </div>

</template>

<style>
.container {
    display:inline-flex;
    justify-content: center;
    max-width: auto;
    margin: 0 auto;
}

.imagem {
    flex: 0 0 calc(33.33% - 20%);
    margin: 70px;
    text-align: center;
}

.imagem img {
    width: 322px;   
    height: auto;
}

.imagem p {
    text-align: center;
}

</style>