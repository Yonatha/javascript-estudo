<template>
    {{ texto }}
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "notificacao",
    computed: {
        ...mapState("notificacao", ["texto"]),
    },
}
</script>