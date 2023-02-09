<script setup>

import Navbar from "./components/Navbar.vue";

</script>

<template>
  <header>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

  </header>

  <Navbar></Navbar>

  <main class="wrapper">
    <router-view/>
  </main>
  

</template>

<style scoped>


.main-title {
  text-align: center;
  padding-bottom: 1rem;
}

.wrapper {
  background-color: #333;
  margin: 1rem;
  padding: 1rem 10rem 100rem 5rem;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

b {
  font-weight: bold;
}
</style>
