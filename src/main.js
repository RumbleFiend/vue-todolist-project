import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// import router functions
import { createRouter, createWebHistory } from 'vue-router'

// setup routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/counter',
      name: 'Counter',
      component: () => import('./views/Counter.vue')
    }
  ]
})

const app = createApp(App)

// tell Vue to use router
app.use(router)
app.mount('#app')