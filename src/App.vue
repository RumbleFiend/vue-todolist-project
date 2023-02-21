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

  <main class="flex flex-col flex-grow relative min-h-screen bg-slate-900 text-neutral-400 ">
    <Navbar class="relative" :displayLogin="displayLogin"></Navbar>
    <router-view class="mx-10 my-10"/>
    
  </main>
  
</template>

<style scoped>

</style>
