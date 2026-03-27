import { createRouter, createWebHistory } from 'vue-router'
import InDevelopment from './components/InDevelopment.vue'
import HomePage from './components/HomePage.vue'
import Photography from './components/Photography.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/photography',
    component: Photography
  },
  {
    path: '/blog',
    component: InDevelopment
  },
  {
    path: '/:pathMatch(.*)*',
    component: InDevelopment
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // Offset for sticky header
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
