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
        <li><a href="#experience" @click.prevent="handleNavToSection('experience')">Experience</a></li>
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

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      activeLink: '#home',
  sections: ['home', 'about', 'experience', 'contact'],
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
    handleNavToSection(section) {
      this.activeLink = `#${section}`;
      this.mobileMenuOpen = false;
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              const targetSection = document.getElementById(section);
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 350);
          });
        });
      } else {
        const targetSection = document.getElementById(section);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    },
    navigateToBlog() {
      // For now, we'll open a placeholder - you can later replace with actual blog URL
      window.open('/blog', '_blank') || (window.location.href = '/blog');
    },
    navigateToPhotography() {
      // For now, we'll open a placeholder - you can later replace with actual photography URL
      window.open('/photography', '_blank') || (window.location.href = '/photography');
    },
    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '-10% 0px -50% 0px', // More responsive detection
        threshold: 0.1
      };

      this.observer = new IntersectionObserver((entries) => {
        let foundActive = false;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id || entry.target.querySelector('[id]')?.id;
            if (sectionId) {
              this.activeLink = `#${sectionId}`;
              this.currentSection = sectionId;
              foundActive = true;
            }
          }
        });
        // If at the bottom of the page, force Contact as active
        if (!foundActive && (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2)) {
          this.activeLink = '#contact';
          this.currentSection = 'contact';
        }
      }, options);

      // Start observing sections after a short delay to ensure DOM is ready
      this.$nextTick(() => {
        setTimeout(() => {
          this.sections.forEach(sectionName => {
            const section = document.getElementById(sectionName);
            
            if (section) {
              this.observer.observe(section);
            } else {
              // Fallback for components that might not have direct IDs
              const componentElement = this.findSectionByComponent(sectionName);
              if (componentElement) {
                this.observer.observe(componentElement);
              }
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
      
      // Special handling for home section
      if (sectionName === 'home') {
        const heroSection = document.querySelector('.hero') || document.querySelector('[id="home"]') || document.querySelector('section');
        if (heroSection) return heroSection;
      }
      
      // Fallback: find by component position
      const components = document.querySelectorAll('main > *');
      const componentMap = {
        'home': 0,       // Hero component
        'about': 1,      // About component
        'experience': 2, // Experience component
        'contact': 3     // Contact component
      };
      
      const index = componentMap[sectionName];
      return components[index] || null;
    }
  }
}
</script>


<style>
.header {
  background: rgba(255, 255, 255, 0.75); /* semi-transparent white for glass effect */
  backdrop-filter: blur(25px) saturate(1.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99999;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  overflow: visible;
  min-height: 70px;
}

.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
  transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: -1;
}

.header:hover::before {
  left: 100%;
}

.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    var(--color-primary), 
    var(--color-secondary));
  transition: all 0.2s ease-out;
  border-radius: 0 2px 2px 0;
  box-shadow: 
    0 0 15px rgba(143, 230, 152, 0.4),
    0 2px 8px rgba(143, 230, 152, 0.2);
}

.header:hover {
  box-shadow: 
    0 12px 48px rgba(0, 0, 0, 0.08),
    0 6px 24px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(30px) saturate(1.4);
  border-bottom-color: rgba(0, 0, 0, 0.2);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.85); /* slightly less transparent when scrolled */
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.1),
    0 5px 20px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);

  backdrop-filter: blur(25px) saturate(1.4);
}

/* Updated Section-based header styling for Light theme */
.header.section-home,
.header.section-about,
.header.section-experience,
.header.section-contact {
  border-bottom-color: rgba(143, 230, 152, 0.5);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  max-width: 1400px;
  margin: 0 auto 0;
  width: 100%;
}

.nav-brand h2 {
  font-size: 2.1rem;
  margin: 0;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(120deg, var(--color-secondary), var(--color-primary), var(--color-secondary));
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.6rem 1.5rem;
  border-radius: 24px;
  overflow: hidden;
  animation: gradientShift 6s ease-in-out infinite;
  box-shadow: 0 2px 16px 0 rgba(143, 230, 152, 0.1), 0 1.5px 8px 0 rgba(45, 59, 47, 0.1);
  background-color: rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
}

.nav-brand h2:hover {
  transform: translateY(-3px) scale(1.08);
  background: linear-gradient(120deg, var(--color-accent), var(--color-primary), var(--color-secondary));
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 12px rgba(143, 230, 152, 0.5));
  box-shadow: 0 4px 32px 0 rgba(143, 230, 152, 0.18), 0 2px 12px 0 rgba(45, 59, 47, 0.13);
  background-color: rgba(0,0,0,0.12);
}

.nav-menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  min-width: 0;
  overflow-x: visible;
  white-space: normal;
}

.mobile-menu-toggle {
  display: none;
}


.nav-menu a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 0.7rem 1.2rem;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  white-space: nowrap;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 2px 12px 0 rgba(45, 59, 47, 0.05);
}

.nav-menu a:hover,
.nav-menu a.active {
  color: var(--color-primary);
  background: rgba(255, 255, 255, 0.12);
  border: 1.5px solid rgba(143, 230, 152, 0.32);
  box-shadow:
    0 8px 25px rgba(143, 230, 152, 0.13),
    0 4px 15px rgba(143, 230, 152, 0.09),
    0 1px 8px 0 rgba(34,40,49,0.10),
    0 0 0 1.5px rgba(255,255,255,0.10) inset,
    0 1.5px 8px 0 rgba(143, 230, 152, 0.10) inset;
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s;
}

.nav-menu a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.38) 60%, rgba(143, 230, 152, 0.1) 100%);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: -2;
  transform: scale(0.96);
  border-radius: 25px;
  border: 1.5px solid rgba(143, 230, 152, 0.18);
  box-shadow: 0 4px 24px 0 rgba(143, 230, 152, 0.13), 0 1.5px 8px 0 rgba(143, 230, 152, 0.1), 0 0.5px 0.5px 0 rgba(255,255,255,0.10) inset;
  pointer-events: none;
}

.nav-menu a:hover::after {
  width: 80px;
  height: 80px;
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
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
}

.mobile-menu-toggle:hover {
  background: rgba(143, 230, 152, 0.12);
  border-color: rgba(143, 230, 152, 0.2);
  transform: scale(1.08);
  box-shadow: 0 4px 15px rgba(143, 230, 152, 0.2);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-text);
  margin: 3px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 3px;
  position: relative;
  z-index: 2;
}

.mobile-menu-toggle:hover span {
  background: var(--color-primary);
}

.mobile-menu-toggle.active {
  background: rgba(143, 230, 152, 0.15);
  transform: scale(1.05);
  border-color: rgba(143, 230, 152, 0.3);
}

.mobile-menu-toggle.active span {
  background: var(--color-primary);
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

@media (max-width: 1100px) {
  .nav {
    padding: 1rem 2rem;
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
    background: rgba(240, 243, 189, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
    transition: left 0.3s ease;
    overflow-x: hidden;
    overflow-y: auto; /* <--- ADDED for smooth scrolling if menu is long */
    white-space: normal;
  }
  .nav-menu.active {
    left: 0;
  }
  
  /* Make menu links full-width for a cleaner list */
  .nav-menu li,
  .nav-menu a {
    width: 90%;
    text-align: center;
    box-sizing: border-box;
    padding: 0.8rem 1.2rem;
  }
  
  .nav-menu a {
    background: var(--color-bg-glass);
    color: var(--color-text);
  }
}

@media (max-width: 480px) {
  .nav {
    padding: 1rem;
  }
  
  .nav-brand h2 {
    font-size: 1.5rem;
  }
}
</style>