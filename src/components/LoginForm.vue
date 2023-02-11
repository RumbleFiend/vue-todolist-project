<script setup>
const props = defineProps(['foo'])
</script>

<template>

    <div class="backdrop backdrop-blur-sm">
       <div>
        <form action="">
            <input>
        </form>
       </div>
    </div>

</template>

<style scoped>
.backdrop{
    z-index:1000;
    position:absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 80%;
    
    text-align: center;
}

</style>