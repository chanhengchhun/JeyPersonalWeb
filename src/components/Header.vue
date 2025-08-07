<template>
  <header class="header" :class="{ 'scrolled': isScrolled, [`section-${currentSection}`]: currentSection }">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <nav class="nav">
      <div class="nav-brand">
        <h2 @click="setActiveLink('#home')">Chanheng</h2>
      </div>
      <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
        <li><a href="#about" @click="setActiveLink('#about')" :class="{ 'active': activeLink === '#about' }">About</a></li>
        <li><a href="#education" @click="setActiveLink('#education')" :class="{ 'active': activeLink === '#education' }">Education</a></li>
        <li><a href="#skills" @click="setActiveLink('#skills')" :class="{ 'active': activeLink === '#skills' }">Skills</a></li>
        <li><a href="#contact" @click="setActiveLink('#contact')" :class="{ 'active': activeLink === '#contact' }">Contact</a></li>
      </ul>
      <div class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      activeLink: '#home',
      sections: ['about', 'education', 'skills', 'contact'],
      observer: null,
      scrollProgress: 0,
      currentSection: 'home'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.initIntersectionObserver();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
      
      // Calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = (window.scrollY / documentHeight) * 100;
    },
    handleResize() {
      if (window.innerWidth > 768) {
        this.mobileMenuOpen = false;
      }
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    setActiveLink(link) {
      this.activeLink = link;
      this.mobileMenuOpen = false;
      
      // Smooth scroll to section
      const targetSection = document.querySelector(link);
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    },
    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% from top
        threshold: 0
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id || entry.target.querySelector('[id]')?.id;
            if (sectionId) {
              this.activeLink = `#${sectionId}`;
              this.currentSection = sectionId;
            }
          }
        });
      }, options);

      // Start observing sections after a short delay to ensure DOM is ready
      this.$nextTick(() => {
        setTimeout(() => {
          this.sections.forEach(sectionName => {
            const section = document.getElementById(sectionName) || 
                           document.querySelector(`[id="${sectionName}"]`) ||
                           document.querySelector(`.${sectionName}`) ||
                           this.findSectionByComponent(sectionName);
            
            if (section) {
              this.observer.observe(section);
            }
          });
        }, 500);
      });
    },
    findSectionByComponent(sectionName) {
      // Try to find sections by common patterns
      const selectors = [
        `#${sectionName}`,
        `.${sectionName}`,
        `[data-section="${sectionName}"]`,
        `section:has(.${sectionName})`,
        `div:has(.${sectionName})`
      ];
      
      for (const selector of selectors) {
        try {
          const element = document.querySelector(selector);
          if (element) return element;
        } catch (e) {
          // Ignore selector errors
        }
      }
      
      // Fallback: find by component position
      const components = document.querySelectorAll('main > *');
      const componentMap = {
        'home': 0,      // Hero component
        'about': 1,     // About component  
        'education': 2, // Education component
        'skills': 3,    // Skills component
        'contact': 4    // Contact component
      };
      
      const index = componentMap[sectionName];
      return components[index] || null;
    }
  }
}
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 99999 !important; /* Keep high z-index */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  min-height: 70px;
  display: block;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.08), transparent);
  transition: left 0.6s ease;
  pointer-events: none;
}

.header:hover::before {
  left: 100%;
}

.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  transition: width 0.1s ease-out;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

.header:hover {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 8px 40px rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(20px);
  border-bottom-color: rgba(102, 126, 234, 0.3);
  transform: translateY(-1px);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 30px rgba(0,0,0,0.15);
  animation: headerPulse 2s ease-in-out;
}

/* Section-based header styling */
.header.section-home {
  border-bottom-color: rgba(102, 126, 234, 0.3);
}

.header.section-about {
  border-bottom-color: rgba(46, 204, 113, 0.3);
}

.header.section-education {
  border-bottom-color: rgba(241, 196, 15, 0.3);
}

.header.section-skills {
  border-bottom-color: rgba(230, 126, 34, 0.3);
}

.header.section-contact {
  border-bottom-color: rgba(231, 76, 60, 0.3);
}

@keyframes headerPulse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1px);
  }
}

@keyframes navItemPop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

.nav-menu a:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 2px;
  animation: navItemPop 0.3s ease;
}

.nav-brand h2:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 4px;
  border-radius: 8px;
}

/* Add subtle hover state for entire nav */
.nav:hover .nav-menu a:not(:hover) {
  opacity: 0.7;
  transform: scale(0.98);
}

.nav:hover .nav-menu a:hover {
  opacity: 1;
  transform: translateY(-4px) scale(1.08);
}

/* Enhanced scroll progress bar */
.scroll-progress:hover {
  height: 4px;
  box-shadow: 0 0 15px rgba(102, 126, 234, 0.5);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand h2 {
  color: #333;
  font-size: 1.8rem;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.5rem;
  border-radius: 12px;
  overflow: hidden;
}

.nav-brand h2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08));
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: -1;
  transform: scale(0.9);
  border-radius: 16px;
  box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.3);
}

.nav-brand h2::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  transform: translateX(-50%);
}

.nav-brand h2:hover::before {
  opacity: 1;
  transform: scale(1);
}

.nav-brand h2:hover {
  transform: translateY(-2px) scale(1.05);
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
}

.nav-brand h2:hover::after {
  width: 80%;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  backdrop-filter: blur(5px);
}

.nav-menu a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -2;
  transform: scale(0.95);
  border-radius: 25px;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: -1;
}

.nav-menu a:hover::before,
.nav-menu a.active::before {
  opacity: 1;
  transform: scale(1);
}

.nav-menu a:hover::after {
  width: 80px;
  height: 80px;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.nav-menu a:active {
  transform: translateY(-2px) scale(1.05);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
}

.mobile-menu-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
  transition: left 0.5s ease;
}

.mobile-menu-toggle:hover::before {
  left: 100%;
}

.mobile-menu-toggle:hover {
  background: rgba(102, 126, 234, 0.12);
  border-color: rgba(102, 126, 234, 0.2);
  transform: scale(1.08) rotate(2deg);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 3px;
  position: relative;
  z-index: 2;
}

.mobile-menu-toggle:hover span {
  background: #667eea;
  transform: scaleX(1.1);
}

.mobile-menu-toggle:hover span:nth-child(1) {
  transform: scaleX(0.8) translateX(2px);
}

.mobile-menu-toggle:hover span:nth-child(3) {
  transform: scaleX(0.8) translateX(-2px);
}

.mobile-menu-toggle.active {
  background: rgba(102, 126, 234, 0.15);
  transform: scale(1.05) rotate(-2deg);
  border-color: rgba(102, 126, 234, 0.3);
}

.mobile-menu-toggle.active span {
  background: #667eea;
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
    padding: 1rem;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
    transition: left 0.3s ease;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-menu a {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    width: 80%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .nav-brand h2 {
    font-size: 1.5rem;
  }
}</style>
