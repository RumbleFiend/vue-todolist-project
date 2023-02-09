<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const pushTo = (route) => { router.push(route) }

</script>

<template>
  <div class="topnav">
    <router-link :to="{ name: 'Home' }" active-class="active">
      <span class="material-icons md-18">
        home
      </span>
      Home
    </router-link>
    <router-link :to="{ name: 'Counter' }" active-class="active">
      <span class="material-icons md-24">
        exposure_plus_1
      </span>
      Counter
    </router-link>
    <button>Login</button>
  </div>
</template>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a,
router-link{
  float: left;
  color: #ffffff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
/* Align Icons*/
.topnav span{
  vertical-align: text-top;
}

/* Change the color of links on hover */
.topnav a:hover,
router-link:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active,
router-link.active {
  background-color: var(--blue-ryb);
  color: white;
}
/* Style navbar buttons*/
.topnav button{
  float: left;
  color: #ffffff;
  background-color: var(--blue-ryb);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  float:right
}
</style>
