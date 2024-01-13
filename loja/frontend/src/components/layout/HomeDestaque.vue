<template>
    <div class="homeDestaque">
        <div class="coluna1">
            <img src="/images/destaque-prod-1.png" />
        </div>

        <div class="coluna2">
            <img class="img2" src="/images/destaque-prod-2.png" />
            <img src="/images/destaque-prod-3.png" />
            <img class="img4" src="/images/destaque-prod-4.png" />
        </div>
    </div>
</template>
  
<style>
.homeDestaque {
    margin: auto; width: 1130px; height: 545px;
}

.homeDestaque .coluna1 {
    width: 545px; height: 545px;
    float: left;
}

.homeDestaque .coluna2 {
    margin-left: 35px; width: 545px; height: 545px;
    float: left;
}

.homeDestaque .coluna2 .img2 {
    margin-bottom: 28px;
}

.homeDestaque .coluna2 .img4 {
    float: right;
}
</style>