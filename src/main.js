import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// Wait for the router to resolve the initial route before mounting.
// Mounting first would render an empty <router-view>, so App's
// scroll-reveal scan on mount would find no elements and the page
// content would stay hidden at opacity 0.
router.isReady().then(() => {
  app.mount('#app')
})
