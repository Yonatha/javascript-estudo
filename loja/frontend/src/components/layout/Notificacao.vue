<template>
    {{ texto }}
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "Notificacao",
    computed: {
      ...mapState("notificacao", ["texto"]),
    },
}
</script>