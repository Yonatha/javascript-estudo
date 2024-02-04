<template>
    <div class="box">
        <a href="#">{{ nome }}</a>
        <span class="desconto">R$ {{ desconto }}</span>
        <span>R$ {{ valor }}</span>
    </div>
</template>


<style></style>


<script>
export default {
    props: ['nome','desconto','valor'],
}
</script>