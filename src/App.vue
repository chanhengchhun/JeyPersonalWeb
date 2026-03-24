<template>
  <div id="app">
    <Header @toggle-theme="toggleTheme" :isDark="isDark" />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const isDark = ref(false)
const route = useRoute()

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

let revealObserver = null

const scanRevealElements = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (revealObserver) revealObserver.observe(el)
  })
}

const initRevealObserver = () => {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
  scanRevealElements()
}

// Re-scan after every route change so new pages' .reveal elements get observed
watch(() => route.path, () => {
  setTimeout(scanRevealElements, 150)
})

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  setTimeout(initRevealObserver, 120)
})

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect()
})
</script>

<style>
* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

#app {
  width: 100%;
  min-height: 100vh;
  font-family: var(--font-body);
}

main {
  width: 100%;
  padding-top: 68px;
}

@media (max-width: 600px) {
  main { padding-top: 60px; }
}

section {
  width: 100%;
  overflow-x: hidden;
}

/* ============================================
   Global Keyframes
   ============================================ */
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ============================================
   Page Transitions
   ============================================ */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-fade-enter-from { opacity: 0; transform: translateY(6px); }
.page-fade-leave-to   { opacity: 0; transform: translateY(-6px); }

/* ============================================
   Scrollbar — warm minimal
   ============================================ */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--color-background); }
::-webkit-scrollbar-thumb {
  background: var(--color-border-dark);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover { background: var(--color-accent); }

/* Selection */
::selection {
  background: rgba(139, 69, 19, 0.15);
  color: var(--color-text-primary);
}

[data-theme="dark"] ::selection {
  background: rgba(201, 169, 110, 0.2);
}

/* Focus */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 1px solid var(--color-primary);
  outline-offset: 3px;
}

img { transition: opacity 0.3s ease; }
</style>
