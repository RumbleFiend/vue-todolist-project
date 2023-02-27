<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['displayLogin'])

const router = useRouter()

const items = router.getRoutes()

const displayLoginForm = () => {
  props.displayLogin();
}

</script>

<template>
  <nav class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b dark:border-gray-600">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          LOGO HERE
        </span>
      </router-link>
      <div class="flex md:order-2">
        <button type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
          @click="displayLoginForm"
        >
           Login 
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">

          <!-- List rendering here! --> 
          <li v-for="item in items">
            <router-link 
              :to=item
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              active-class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page">
             {{ item.name }}
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
