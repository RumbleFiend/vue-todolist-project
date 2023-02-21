import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)

// tell Vue to use router
app.use(router)
app.mount('#app')