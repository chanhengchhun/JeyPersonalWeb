<template>
  <!-- Wordmark on the left, theme toggle on the right. -->
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <!-- Hairline reading-progress bar along the bottom edge. -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

    <nav class="nav">
      <router-link to="/" class="logo">Chanheng <span class="logo-nick">(Jey)</span></router-link>

      <!-- Dark mode toggle — SVG sun/moon, no emoji -->
      <button class="theme-toggle" @click="$emit('toggle-theme')"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        <!-- Moon (light mode → clicking switches to dark) -->
        <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <!-- Sun (dark mode → clicking switches to light) -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({ isDark: Boolean })
defineEmits(['toggle-theme'])

// Drives the border/shadow that appears once the page is
// scrolled away from the top.
const isScrolled = ref(false)

// How far through the page the reader is, as a percentage.
const scrollProgress = ref(0)

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 40

  // Guard against division by zero on pages shorter than the viewport.
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollableHeight > 0
    ? (window.scrollY / scrollableHeight) * 100
    : 0
}

// The native scroll event can fire far faster than the screen
// refreshes, especially during momentum scrolling on mobile.
// Writing two reactive refs on every single event competes with
// the browser's own work compositing this fixed, blurred header,
// which is what shows up as the header stuttering/flickering
// while scrolling. Coalescing to one update per animation frame
// keeps that work at the display's actual refresh rate.
let ticking = false

const handleScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateScrollState()
    ticking = false
  })
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.header {
  background: rgba(245, 240, 232, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: fixed;
  top: 0; left: 0; right: 0;
  width: 100%;
  z-index: 1000;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
  border-bottom: 1px solid transparent;
}

[data-theme="dark"] .header {
  background: rgba(13, 11, 9, 0.88);
}

.header.scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.scroll-progress {
  position: absolute;
  bottom: 0; left: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width 0.1s linear;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-8);
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

/* Wordmark — same brand/nickname split as the Footer's
   "Chanheng (Jey)". Padding balanced by a matching negative
   margin enlarges the tap target without shifting the visible
   text or the layout around it. */
.logo {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  letter-spacing: 0.01em;
  transition: color var(--transition-fast);
  padding: var(--space-2) var(--space-1);
  margin: calc(-1 * var(--space-2)) calc(-1 * var(--space-1));
}

.logo:hover {
  color: var(--color-primary);
}

.logo-nick {
  font-weight: 400;
  font-style: italic;
  color: var(--color-text-tertiary);
  font-size: var(--text-base);
}

.theme-toggle {
  width: 36px; height: 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.theme-toggle:hover {
  border-color: var(--color-text-primary);
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .nav { padding: var(--space-4); }
}

@media (max-width: 360px) {
  .nav { padding: var(--space-3); }
  .logo { font-size: var(--text-base); }
  .logo-nick { font-size: var(--text-sm); }
}
</style>
