<template>
  <header class="header" :class="{ 'scrolled': isScrolled, [`section-${currentSection}`]: currentSection }">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <nav class="nav">
      <div class="nav-brand">
        <h2 @click="setActiveLink('#home')">Chanheng</h2>
      </div>
      <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
        <li><a href="#home" @click="setActiveLink('#home')" :class="{ 'active': activeLink === '#home' }">Home</a></li>
        <li class="nav-dropdown">
          <a href="#about" @click="setActiveLink('#about')" :class="{ 'active': activeLink === '#about' }">
            About
            <span class="dropdown-arrow">▼</span>
          </a>
          <div class="dropdown-menu">
            <a href="/blog" @click="navigateToBlog" class="dropdown-item">
              <span class="dropdown-icon">✍️</span>
              Blog
            </a>
            <a href="/photography" @click="navigateToPhotography" class="dropdown-item">
              <span class="dropdown-icon">📸</span>
              Photography
            </a>
          </div>
        </li>
        <li><a href="#education" @click="setActiveLink('#education')" :class="{ 'active': activeLink === '#education' }">Education</a></li>
        <li><a href="#skills" @click="setActiveLink('#skills')" :class="{ 'active': activeLink === '#skills' }">Skills</a></li>
        <li><a href="#experience" @click="setActiveLink('#experience')" :class="{ 'active': activeLink === '#experience' }">Experience</a></li>
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
      sections: ['home', 'about', 'education', 'skills', 'experience', 'contact'],
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
        const heroSection = document.querySelector('.hero') || 
                          document.querySelector('[id="home"]') ||
                          document.querySelector('section');
        if (heroSection) return heroSection;
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
  background: rgba(255, 255, 255, 0.08);
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
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
    rgba(102, 126, 234, 0.9), 
    rgba(118, 75, 162, 0.9), 
    rgba(240, 147, 251, 0.9),
    rgba(42, 157, 143, 0.9));
  transition: all 0.2s ease-out;
  border-radius: 0 2px 2px 0;
  box-shadow: 
    0 0 15px rgba(102, 126, 234, 0.4),
    0 2px 8px rgba(102, 126, 234, 0.2);
}

.header:hover {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 
    0 12px 48px rgba(0, 0, 0, 0.08),
    0 6px 24px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(30px) saturate(1.4);
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.1),
    0 5px 20px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
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

.header.section-experience {
  border-bottom-color: rgba(155, 89, 182, 0.3);
}

.header.section-contact {
  border-bottom-color: rgba(231, 76, 60, 0.3);
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.nav-brand h2 {
  color: #333;
  font-size: 1.8rem;
  margin: 0;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 1) 0%,
    rgba(118, 75, 162, 1) 25%,
    rgba(240, 147, 251, 1) 50%,
    rgba(42, 157, 143, 1) 75%,
    rgba(102, 126, 234, 1) 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  overflow: hidden;
  animation: gradientShift 4s ease-in-out infinite;
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
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
}

.nav-menu a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.8) 0%, 
    rgba(118, 75, 162, 0.8) 50%, 
    rgba(240, 147, 251, 0.8) 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  box-shadow: 
    0 8px 25px rgba(102, 126, 234, 0.3),
    0 4px 15px rgba(102, 126, 234, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.12);
}

.nav-menu a:active {
  transform: translateY(-2px) scale(1.05);
}

/* Dropdown Styles */
.nav-dropdown {
  position: relative;
}

.nav-dropdown .dropdown-arrow {
  margin-left: 0.5rem;
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  display: inline-block;
}

.nav-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  min-width: 200px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(25px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 8px 25px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  padding: 0.8rem 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 100000;
  pointer-events: none;
  margin-top: 10px;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(10px);
  pointer-events: all;
}

.dropdown-item {
  display: flex !important;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem !important;
  color: #333 !important;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0 !important;
  background: transparent !important;
  border: none !important;
  backdrop-filter: none !important;
  position: relative;
  overflow: hidden;
  margin: 0;
  width: calc(100% - 0rem);
  box-sizing: border-box;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%, 
    rgba(118, 75, 162, 0.1) 100%);
  transition: left 0.4s ease;
  z-index: -1;
}

.dropdown-item:hover::before {
  left: 0;
}

.dropdown-item:hover {
  background: rgba(102, 126, 234, 0.08) !important;
  color: #667eea !important;
  transform: none !important;
  box-shadow: none !important;
  padding-left: 2rem !important;
}

.dropdown-icon {
  font-size: 1.1rem;
  opacity: 0.8;
  transition: transform 0.3s ease;
}

.dropdown-item:hover .dropdown-icon {
  transform: scale(1.2);
  opacity: 1;
}

/* Dropdown arrow animation */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0 -2px 4px rgba(0, 0, 0, 0.1));
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
  background: rgba(102, 126, 234, 0.12);
  border-color: rgba(102, 126, 234, 0.2);
  transform: scale(1.08);
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
}

.mobile-menu-toggle.active {
  background: rgba(102, 126, 234, 0.15);
  transform: scale(1.05);
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
  
  /* Mobile dropdown styles */
  .nav-dropdown .dropdown-arrow {
    display: none;
  }
  
  .dropdown-menu {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15px);
    margin-top: 0.5rem;
    border-radius: 15px;
    padding: 0.5rem 0;
    width: 100%;
    box-shadow: 
      0 10px 20px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .dropdown-menu::before {
    display: none;
  }
  
  .dropdown-item {
    padding: 0.8rem 1rem !important;
    width: calc(100% - 2rem);
    margin: 0 1rem;
    border-radius: 10px !important;
    font-size: 1.1rem;
  }
  
  .dropdown-item:hover {
    padding-left: 1.2rem !important;
  }
}

@media (max-width: 480px) {
  .nav {
    padding: 1rem;
  }
  
  .nav-brand h2 {
    font-size: 1.5rem;
  }
}</style>
