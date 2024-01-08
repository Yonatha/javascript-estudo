<template>
    <div class="container">
        <div class="imagem">
            <img src="images/post1.png" alt="post1">
            <p>Titulo Post 1</p>
        </div>
        <div class="imagem">
            <img src="images/post2.png" alt="post2">
            <p>Titulo Post 2</p>
        </div>
        <div class="imagem">
            <img src="images/post3.png" alt="post3">
            <p>Titulo Post 3</p>
        </div>
    </div>

</template>

<style>
.container {
    display: inline-flex;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
}

.imagem {
    flex: 0 0 calc(33.33% - 20%);
    margin: 169px;
    text-align: center;
}

.imagem img {
    max-width: 200%;
}

.imagem p {
    text-align: center;
}

</style>