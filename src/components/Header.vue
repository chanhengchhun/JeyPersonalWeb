<template>
  <header class="header" :class="{ 'scrolled': isScrolled, [`section-${currentSection}`]: currentSection }">
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
    <nav class="nav">
      <div class="nav-brand">
        <h2 @click="setActiveLink('#home')">Chanheng</h2>
      </div>
  <!-- Navigation menu: horizontal on desktop, vertical on mobile -->
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
  font-size: 2.1rem;
  margin: 0;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(120deg, #67e8f9, #a084ee, #f093fb, #ffbf69, #67e8f9 90%);
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
  box-shadow: 0 2px 16px 0 rgba(160, 132, 238, 0.10), 0 1.5px 8px 0 rgba(87,204,153,0.10);
  background-color: rgba(255,255,255,0.18);
  backdrop-filter: blur(8px);
}

.nav-brand h2:hover {
  transform: translateY(-3px) scale(1.08);
  background: linear-gradient(120deg, #ff9f1cff, #ffbf69ff, #2ec4b6ff 90%);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 12px #dbd9df88) drop-shadow(0 2px 12px #67e8f988);
  box-shadow: 0 4px 32px 0 rgba(160, 132, 238, 0.18), 0 2px 12px 0 rgba(87,204,153,0.13);
  background-color: rgba(255,255,255,0.28);
}

.nav-brand h2:hover::after {
  width: 80%;
}



/* Nav menu: horizontal on desktop, switches to vertical (mobile) at 1100px via .active class */
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

/* Hamburger icon: only show on mobile (<=1100px) */
.mobile-menu-toggle {
  display: none;
}


.nav-menu a {
  color: #0e0e0e;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 0.7rem 1.2rem;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  background: #8fe698;
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  white-space: nowrap;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.18), 0 2px 12px 0 rgba(87,204,153,0.13);
}

/* Glassmorphism nav hover/active: clean, consistent, finished edge */
.nav-menu a:hover,
.nav-menu a.active {
  color: #b9fbc0;
  background: #4d504c;
  border: 1.5px solid rgba(87,204,153,0.32);
  /* border-radius matches base for smooth transition */
  box-shadow:
    0 8px 25px rgba(87,204,153,0.13),
    0 4px 15px rgba(87,204,153,0.09),
    0 1px 8px 0 rgba(34,40,49,0.10),
    0 0 0 1.5px rgba(255,255,255,0.10) inset,
    0 1.5px 8px 0 rgba(87,204,153,0.10) inset;
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s;
}


/* --- Glassmorphism Effect: Subtle, clean, readable --- */
.nav-menu a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.38) 60%, rgba(87,204,153,0.10) 100%);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: -2;
  transform: scale(0.96);
  border-radius: 25px;
  border: 1.5px solid rgba(87,204,153,0.18);
  box-shadow: 0 4px 24px 0 rgba(87,204,153,0.13), 0 1.5px 8px 0 rgba(87,204,153,0.10), 0 0.5px 0.5px 0 rgba(255,255,255,0.10) inset;
  pointer-events: none;
}



.nav-menu a:hover::after {
  width: 80px;
  height: 80px;
}

/* Removed duplicate/conflicting hover/active style that set color: white and background: rgba(255,255,255,0.12) */

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
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
    transition: left 0.3s ease;
    overflow-x: visible;
    white-space: normal;
  }
  .nav-menu.active {
    left: 0;
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
