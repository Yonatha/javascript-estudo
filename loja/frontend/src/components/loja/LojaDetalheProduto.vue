<template>
    <div class="container">

         <section id="catalogo">
            <div class="categoria">
                <div></div>
                <span>BOLSAS</span>
            </div>
            <div class="categoria">
                <div></div>
                <span>Winter</span>
            </div>
            <div class="categoria">
                <div></div>
                <span>Winter</span>
            </div>
            <div class="categoria">
                <div></div>
                <span>BOLSAS</span>
            </div>
            <div class="categoria">
                <div></div>
                <span>Winter</span>
            </div>
            <div class="categoria">
                <div></div>
                <span>Winter</span>
            </div>
        </section>

   
 

        <div class="bloco1"></div>
        <div class="bloco2"></div>

        <section id="ofertas">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div>
</template>

<style>
.container {
    width: 760px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 20px;
}

.container section#catalogo {
    width: 776px;
    height: 139px;
    display: flex;
    gap: 18px;
    justify-content: center;
}

.container section#catalogo .categoria {
    width: 106px;
    height: 139px;
    margin-top: 10px;
}

.container section#catalogo .categoria span
{
    display: block;
    text-align: center;
    margin-top: 6px;
    font-size: 12px;
}

.container section#catalogo .categoria div{
    width: 106px;
    height: 106px;
    background: #DEEFFF;
    border-radius: 100px;
}

.container .bloco1,
.container .bloco2
{
    width: 370px;
    height: 320px;
}

.container .bloco1 {
    background: #DEEFFF;
}

.container .bloco2 {
background: #E9E9E9
}


.container section#ofertas {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;   
}

.container section#ofertas div {
    width: 165px;
    height: 232px;
    background: #FFE6D9;
}

</style>
