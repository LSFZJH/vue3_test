<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const data = route.query
console.log(data);
</script>
<template>
    <p>{{ data }}</p>
</template>
<style scoped>
</style>