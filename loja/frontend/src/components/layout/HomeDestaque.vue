<template>
    <div id="homeDestaque">
        <img src="/images/destaque-prod-1.png" class="img1" />
        <img src="/images/destaque-prod-2.png" class="img2" />
        <img src="/images/destaque-prod-3.png" class="img3" />
        <img src="/images/destaque-prod-4.png" class="img4" />
    </div>
</template>
  

<style scoped>
#homeDestaque {
    justify-content: space-between;
}

.img-container {
    display: flex;
}

.img1 {
    flex: 1; 
    max-width: 100%; 
    margin-top: 20px;
    margin-left: 275px;
    ;
  
}
.img2 {
    flex: 1;
    max-width: 100%; 
    margin-top: 20px;
    vertical-align: top;
    margin-right: 37px; 
    margin-left: 55px;
}
.img3, .img4  {
    flex: 1;
    margin-left: 875px;
  
    
}

.img4 {
    margin-left: 20px;

}
</style>