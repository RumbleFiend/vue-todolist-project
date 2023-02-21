<script setup>
import { reactive, ref } from 'vue'

const state = reactive({
    count: 0,
})

const increment = () => {
    state.count++;
}

const decrement = () => {
    if (state.count >= 1) {
        state.count--;
    }
}

</script>

<template>

    <div class="centerer">
        <h1> Counter </h1>
        <div class="centerer">
            <h2> Its just a normal counter lol</h2>
            <h4>The current count is :</h4>
            <div class="flex flex-row py-6">
                <button class="btn btn-blue" @click="decrement">-</button>
                <h1 class="text-white text-center text-8xl w-52">
                    {{ state.count }}
                </h1>
                <button class="btn btn-blue" @click="increment">+</button>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>