<script setup>
    import { ref } from 'vue';
    import CurveImage from './CurveImage.vue';
    import CountDown from './CountDown.vue';
    import ManImage from './ManImage.vue';
    import SocialMedia from './SocialMedia.vue';

    const cs = "Coming Soon";
    const content = "Don’t worry, we hate spam too! You can unsubcribe at anytime.";
    const st = "Stay Tuned";
    const nTitle = "Get notified at launch";

    // Newsletter
    const isVisible = ref(false);
    const toggle = () =>{
        isVisible.value = !isVisible.value;
    }

</script>
<template>
    
    <section>
        <!-- curve image -->
        <CurveImage />

        <!-- content box -->
        <div class="contentBx">
            <h2>{{ cs }}</h2>
            <p>{{ content }}</p>

            <!-- countdown timer -->
            <CountDown />

            <!-- Notify button -->
            <a href="#" @click="toggle()">Notify Me!</a>
        </div>

        <!-- img box -->
        <ManImage />

        <!-- social media -->
        <SocialMedia />
    </section>


    <!-- newsletter -->
    <div class="newsletter" v-if="isVisible">
        <h2>{{ st }}</h2>
        <p>{{ nTitle }}</p>
        <div class="inputBox">
            <form>
                <input type="email" name="" required="" placeholder="Enter Email Address">
                <input type="submit" value="Submit">
            </form>
        </div>
        <img src="../../assets/close.png" alt="close" class="close" @click="toggle()">
    </div>

</template>