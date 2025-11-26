<script setup>
import Logo from '@/assets/usaeagle.jpg'  

defineProps({
    title: String,
    link: String
})
</script>
<template>
    <div id="header_logo">
        <a :href="link" class="logo header-logo" target="_blank">
            <img :src="Logo" alt="USA Eagle" style="width: 50px; height:50px; border-radius: 5px;">
            {{ title }}
        </a>
    </div>
</template>
