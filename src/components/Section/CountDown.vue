<script setup>
    import {onMounted, ref } from 'vue';
    // CountDown
    const countDate = new Date('Oct 10, 2024 00:00:00').getTime();
    const d = ref("");
    const h = ref("");
    const m = ref("");
    const s = ref("");

    const newYear = () => {
        let now = new Date().getTime();
        let gap = countDate - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        d.value = Math.floor(gap / (day));
        h.value = Math.floor(gap % (day) / (hour));
        m.value = Math.floor(gap % (hour) / (minute));
        s.value = Math.floor(gap % (minute) / (second));
    }

    // onMounted Hooks Loads When the component loads
    onMounted(() => {
        setInterval(() => {
        newYear();
        }, 1000); // Every 1000 milisecond
    });
</script>
<template>
    <div class="countdown">

        <div class="time">
            <div id="day">{{ d }}</div>
            <span>Days</span>
        </div>
        <div class="time">
            <div id="hour">{{ h }}</div>
            <span>Minutes</span>
        </div>
        <div class="time">
            <div id="minute">{{ m }}</div>
            <span>Hours</span>
        </div>
        <div class="time">
            <div id="second">{{ s }}</div>
            <span>Seconds</span>
        </div>

    </div>
</template>