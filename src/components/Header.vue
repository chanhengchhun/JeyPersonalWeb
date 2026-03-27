<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <nav class="nav">
      <div class="nav-brand">
        <router-link :to="{ path: '/', hash: '#home' }" custom v-slot="{ navigate }">
          <span class="brand-name" @click="navigate; mobileMenuOpen = false">Chanheng <span class="brand-nick">(Jey)</span></span>
        </router-link>
      </div>

      <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
        <li><router-link :to="{ path: '/', hash: '#home' }" @click="mobileMenuOpen = false">Home</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#about' }" @click="mobileMenuOpen = false">About</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#contact' }" @click="mobileMenuOpen = false">Contact</router-link></li>
      </ul>

      <div class="nav-actions">
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

        <!-- Hamburger -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu"
          :class="{ 'active': mobileMenuOpen }" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

defineProps({ isDark: Boolean })
defineEmits(['toggle-theme'])

const isScrolled       = ref(false)
const mobileMenuOpen   = ref(false)
const scrollProgress   = ref(0)
const currentSection   = ref('home')
const sections         = ['home', 'about', 'contact']
let observer           = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}

const handleResize = () => {
  if (window.innerWidth > 768) mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const initObserver = () => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        if (id) currentSection.value = id
      }
    })
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
    if (atBottom) currentSection.value = 'contact'
  }, { rootMargin: '-10% 0px -50% 0px', threshold: 0.1 })

  nextTick(() => {
    setTimeout(() => {
      sections.forEach(s => {
        const el = document.getElementById(s)
        if (el) observer.observe(el)
      })
    }, 500)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  initObserver()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  if (observer) observer.disconnect()
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
  transition: all var(--transition-base);
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

/* Brand */
.brand-name {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-text-primary);
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: color var(--transition-fast);
}

.brand-name:hover {
  color: var(--color-primary);
}

.brand-nick {
  font-weight: 400;
  font-style: italic;
  color: var(--color-text-tertiary);
  font-size: var(--text-lg);
}

/* Nav links */
.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--space-1);
  margin: 0; padding: 0;
}

.nav-menu a {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  text-decoration: none;
  padding: var(--space-2) var(--space-4);
  transition: color var(--transition-fast);
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0; left: var(--space-4); right: var(--space-4);
  height: 1px;
  background: var(--color-primary);
  transform: scaleX(0);
  transition: transform var(--transition-base);
  transform-origin: left;
}

.nav-menu a:hover { color: var(--color-text-primary); }
.nav-menu a:hover::after { transform: scaleX(1); }

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.theme-toggle {
  width: 36px; height: 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all var(--transition-fast);
}

.theme-toggle:hover {
  border-color: var(--color-text-primary);
  color: var(--color-text-primary);
}

/* Hamburger */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: var(--space-2);
}

.mobile-menu-toggle span {
  width: 20px;
  height: 1px;
  background: var(--color-text-primary);
  transition: all 0.3s ease;
  display: block;
}

.mobile-menu-toggle.active span:nth-child(1) { transform: rotate(-45deg) translate(-3px, 5px); }
.mobile-menu-toggle.active span:nth-child(2) { opacity: 0; }
.mobile-menu-toggle.active span:nth-child(3) { transform: rotate(45deg) translate(-3px, -5px); }

@media (max-width: 768px) {
  .nav { padding: var(--space-4); }

  .mobile-menu-toggle { display: flex; }

  .nav-menu {
    position: fixed;
    top: 60px; left: -100%;
    width: 100%;
    height: calc(100vh - 60px);
    background: var(--color-background);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-8);
    transition: left 0.3s ease;
  }

  .nav-menu.active { left: 0; }

  .nav-menu a {
    font-size: var(--text-sm);
    letter-spacing: 0.18em;
  }

  .nav-brand span { font-size: var(--text-lg); }
}
</style>