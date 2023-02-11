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

  </header>
  <LoginForm v-if="state.loginForm" :foo="state.loginForm" ></LoginForm>

  
  <main class="relative w-screen h-screen bg-slate-900 text-neutral-400 ">
    <Navbar class="relative" :displayLogin="displayLogin"></Navbar>
    <router-view/>
  </main>
  

</template>

<style scoped>

</style>
