<template>
  <div id="app">
    <Header @toggle-theme="toggleTheme" :isDark="isDark" />

    <!-- No page transition here on purpose. A <transition> with
         mode="out-in" holds the incoming page back until the
         outgoing one has finished leaving, so if that leave
         transition never completes the new page never mounts at
         all. Swapping routes directly keeps navigation reliable;
         content still eases in via the .reveal animations. -->
    <main ref="mainEl">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

/* ---- Theme ----------------------------------------------
   The active theme is stored on <html data-theme> so that
   style.css can swap its color variables, and mirrored to
   localStorage so it survives a reload. index.html applies the
   saved value before first paint to avoid a flash of the wrong
   theme; this ref just keeps the toggle button in sync.
---------------------------------------------------------- */
const isDark = ref(document.documentElement.dataset.theme === 'dark')

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  localStorage.setItem('theme', theme)
}

/* ---- Scroll reveal --------------------------------------
   Elements tagged .reveal start at opacity 0 and fade in as
   they enter the viewport.

   Two observers cooperate:

   - revealObserver (IntersectionObserver) adds .visible to an
     element once it scrolls into view.
   - contentObserver (MutationObserver) watches <main> so that
     pages added by a route change get handed to revealObserver.

   The MutationObserver is what makes this reliable. Route
   changes insert their content asynchronously — the page
   transition's mode="out-in" holds it back until the outgoing
   page has finished leaving — so there is no single moment
   after navigation when the new elements are guaranteed to
   exist. Watching for the insertion itself avoids having to
   guess. It is scoped to <main> rather than document.body so
   it only wakes for page content, not every DOM change.
---------------------------------------------------------- */
const mainEl = ref(null)

let revealObserver = null
let contentObserver = null

const scanRevealElements = () => {
  if (!revealObserver) return
  document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
    revealObserver.observe(el)
    el.classList.add('observed')
  })
}

onMounted(() => {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

  // main.js waits for router.isReady() before mounting, so the
  // first page is already in the DOM here.
  scanRevealElements()

  contentObserver = new MutationObserver((mutations) => {
    if (mutations.some(m => m.addedNodes.length > 0)) scanRevealElements()
  })

  if (mainEl.value) {
    contentObserver.observe(mainEl.value, { childList: true, subtree: true })
  }
})

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect()
  if (contentObserver) contentObserver.disconnect()
})
</script>

