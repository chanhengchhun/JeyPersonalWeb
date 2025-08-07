<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
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
  name: 'HeaderFixed',
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false,
      activeLink: '#home',
      scrollProgress: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
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
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  z-index: 10000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 30px rgba(0,0,0,0.15);
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

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1200px;
  margin: 0 auto;
  height: 70px;
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
  transition: all 0.3s ease;
}

.nav-brand h2:hover {
  transform: scale(1.05);
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
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: white;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 8px;
  background: rgba(102, 126, 234, 0.1);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 3px;
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
}
</style>
