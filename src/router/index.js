import { createRouter, createWebHistory } from 'vue-router'

// setup routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/counter',
      name: 'Counter',
      component: () => import('@/views/Counter.vue')
    },
    {
      path: '/todo',
      name: 'Todo',
      component: () => import('@/views/Todo.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue')
    }
  ]
})

export default router;