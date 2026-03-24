<template>
  <header class="header" :class="{ 'scrolled': isScrolled, [`section-${currentSection}`]: currentSection }">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <nav class="nav">
      <div class="nav-brand">
  <h2 @click="handleNavToSection('home')">Chanheng</h2>
      </div>
  <!-- Navigation menu: horizontal on desktop, vertical on mobile -->
  <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
  <li><a href="#home" @click.prevent="handleNavToSection('home')">Home</a></li>
        <li><a href="#about" @click.prevent="handleNavToSection('about')">About</a></li>
        <li><a href="#contact" @click.prevent="handleNavToSection('contact')">Contact</a></li>
      </ul>
      <div class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeLink = ref('#home')
const sections = ['home', 'about', 'contact']
let observer = null
const scrollProgress = ref(0)
const currentSection = ref('home')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (window.scrollY / documentHeight) * 100
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    mobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleNavToSection = (section) => {
  activeLink.value = `#${section}`
  mobileMenuOpen.value = false
  if (route.path !== '/') {
    router.push('/').then(() => {
      nextTick(() => {
        setTimeout(() => {
          const targetSection = document.getElementById(section)
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 350)
      })
    })
  } else {
    const targetSection = document.getElementById(section)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

const findSectionByComponent = (sectionName) => {
  const selectors = [
    `#${sectionName}`,
    `.${sectionName}`,
    `[data-section="${sectionName}"]`,
    `section:has(.${sectionName})`,
    `div:has(.${sectionName})`
  ]

  for (const selector of selectors) {
    try {
      const element = document.querySelector(selector)
      if (element) return element
    } catch (e) {
      // Ignore selector errors
    }
  }

  if (sectionName === 'home') {
    const heroSection = document.querySelector('.hero') || document.querySelector('[id="home"]') || document.querySelector('section')
    if (heroSection) return heroSection
  }

  const components = document.querySelectorAll('main > *')
  const componentMap = {
    'home': 0,
    'about': 1,
    'contact': 2
  }

  const index = componentMap[sectionName]
  return components[index] || null
}

const initIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '-10% 0px -50% 0px',
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    let foundActive = false
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id || entry.target.querySelector('[id]')?.id
        if (sectionId) {
          activeLink.value = `#${sectionId}`
          currentSection.value = sectionId
          foundActive = true
        }
      }
    })
    if (!foundActive && (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2)) {
      activeLink.value = '#contact'
      currentSection.value = 'contact'
    }
  }, options)

  nextTick(() => {
    setTimeout(() => {
      sections.forEach(sectionName => {
        const section = document.getElementById(sectionName)
        if (section) {
          observer.observe(section)
        } else {
          const componentElement = findSectionByComponent(sectionName)
          if (componentElement) {
            observer.observe(componentElement)
          }
        }
      })
    }, 500)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  initIntersectionObserver()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  if (observer) {
    observer.disconnect()
  }
})
</script>


<style>
.header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.2s ease;
  border-bottom: 1px solid var(--color-border);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}

.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transition: width 0.1s ease-out;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-8);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.nav-brand h2 {
  font-size: var(--text-2xl);
  margin: 0;
  font-weight: 800;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-brand h2:hover {
  color: var(--color-primary);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: var(--color-primary);
  background: var(--color-surface);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: transparent;
  border: none;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  margin: 2px 0;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  .nav {
    padding: var(--space-4);
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 72px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 72px);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-8) 0;
    transition: left 0.3s ease;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-menu a {
    width: 200px;
    text-align: center;
    padding: var(--space-4) var(--space-6);
    font-size: var(--text-base);
  }
  
  .nav-brand h2 {
    font-size: var(--text-xl);
  }
}

@media (max-width: 480px) {
  .nav {
    padding: var(--space-3);
  }
  
  .nav-brand h2 {
    font-size: var(--text-lg);
  }
}
</style>