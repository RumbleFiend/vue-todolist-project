<script setup>
  import { reactive, ref } from 'vue'
  import Navbar from "./components/Navbar.vue";
  import LoginForm from "./components/LoginForm.vue";

  const state = reactive({
    /*To show login form */ 
    loginForm : false,
  })

  const displayLogin = () =>{
    state.loginForm = !state.loginForm
  }
</script>

<template>
  <header>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  </header>
  <LoginForm v-if="state.loginForm" :foo="state.loginForm" ></LoginForm>

  <main class="flex flex-col flex-grow relative min-h-screen bg-slate-800 text-neutral-400 ">
    <Navbar class="relative dark:bg-slate-900" :displayLogin="displayLogin"></Navbar>
    <hr>
    <router-view class="mx-10 my-10  "/>
    
  </main>
  <footer
  class="bg-slate-200 text-center dark:bg-slate-900 lg:text-left">
  <hr>
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://github.com/rumblefiend"
      >AITOUAKLI Hichem</a
    >
  </div>
</footer>
</template>

<style scoped>

</style>
