<script setup>
import { ref } from 'vue'

const props = defineProps({

})

</script>

<template>

    <div class="modal">
        <p>Hello from the modal!</p>
        <button class="btn-blue" @click="open = false">Close</button>
    </div>

</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background-color: black;
}
</style>