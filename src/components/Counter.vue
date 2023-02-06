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

    <div>
        <h1> Counter </h1>
        <h4>The current count is :</h4>
        <h1>{{ state.count }}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>

</template>

<style scoped>
button{
  width: 5em;
  height: 5em;
  font-size: 1rem;
  font-weight: bold;
}

</style>