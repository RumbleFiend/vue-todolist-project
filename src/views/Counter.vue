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

    <div class="center-all animate slide delay-1 ">
        <h1> Counter </h1>
        <h2> Its just a normal counter lol</h2>
        <h4>The current count is :</h4>
        <h1>{{ state.count }}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>

</template>

<style scoped>

button {
  background-color: var(--blue-ryb); /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 50px;
  border-radius: 5px;
  border-color: black;
  box-shadow: 0 9px #999;
}

button:hover{
    background-color: var(--slate-blue);
    
}

button:active {
  background-color: var(--color-text);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  color:var(--blue-ryb);
}

</style>