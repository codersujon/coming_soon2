<script setup>
    import facebookLogo from '@/assets/facebook.png'  
    import Icon from './Icon.vue';
</script>
<template>
    <ul class="sci">
        <Icon label="facebook" targe link="https://www.facebook.com/TheUSAEagle" :imgSrc="facebookLogo" urlTarget="_blank"/>
        <!-- <Icon label="twitter" link="#" imgSrc="../../../src/assets/twitter.png"/> -->
    </ul>
</template>