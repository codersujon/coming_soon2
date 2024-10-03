<script setup>
defineProps({
    title: String,
    link: String
})
</script>
<template>
    <div>
        <a :href="link" class="logo" target="_blank">{{ title }}</a>
    </div>
</template>
