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
  routes
})

export default router
