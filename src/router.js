import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import NotFound from './components/NotFound.vue'

/*
 * A single scrolling page (bio, photos) whose sections are
 * anchor targets (#home, #about), plus a catch-all 404. Contact
 * info lives in the shared Footer rather than its own section.
 */
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    // Anchor links scroll to their section, clearing the fixed
    // header; everything else starts at the top of the page.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
