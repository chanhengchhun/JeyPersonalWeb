<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <h1>
          <span class="greeting">Hi, I'm</span>
          <span class="name">Chanh</span>
        </h1>
        <p class="hero-subtitle">
          <span class="typewriter">{{ currentRole }}</span>
          <span class="cursor">|</span>
        </p>
        <p class="hero-description">
          I create beautiful and functional web experiences with modern technologies.
          Welcome to my digital portfolio!
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary">
            <span>View My Work</span>
            <i class="btn-icon">→</i>
          </a>
          <a href="#contact" class="btn btn-secondary">
            <span>Get In Touch</span>
            <i class="btn-icon">✉</i>
          </a>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-text">Scroll to explore</div>
        <div class="scroll-arrow">↓</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      roles: ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'Problem Solver'],
      currentRole: '',
      roleIndex: 0,
      charIndex: 0,
      isDeleting: false
    }
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      const currentText = this.roles[this.roleIndex];
      
      if (this.isDeleting) {
        this.currentRole = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.currentRole = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      let typeSpeed = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.charIndex === currentText.length) {
        typeSpeed = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }

      setTimeout(() => this.typeWriter(), typeSpeed);
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 20px 80px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 30%;
  right: 20%;
  animation-delay: 1s;
}

.hero-content {
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.hero-text {
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 0.6em;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

.name {
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  animation: fadeInUp 1s ease-out 0.2s both;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.typewriter {
  color: #FFD700;
  font-weight: 600;
}

.cursor {
  animation: blink 1s infinite;
  font-weight: 100;
}

.hero-description {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.85;
  animation: fadeInUp 1s ease-out 0.4s both;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.btn {
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: rgba(255, 255, 255, 0.95);
  color: #667eea;
  backdrop-filter: blur(10px);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  background: white;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(5px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  animation: fadeInUp 1s ease-out 0.8s both;
}

.scroll-text {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 15px 60px;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 250px;
    justify-content: center;
  }
  
  .shape {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
}</style>
