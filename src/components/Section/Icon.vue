<script setup>
defineProps({
    label: String,
    link: String,
    imgSrc: String
});
</script>
<template>
    <li><a :href="link"><img :src="imgSrc" :alt="link"></a></li>
</template>