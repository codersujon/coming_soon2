<script setup>
defineProps({
    label: String,
    link: String,
    imgSrc: String,
    urlTarget: String
});
</script>
<template>
    <li>
        <a :href="link" :target="urlTarget">
            <img :src="imgSrc" :alt="link" >
        </a>
    </li>
</template>