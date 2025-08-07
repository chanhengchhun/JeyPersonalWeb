<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <!-- Text Box -->
      <div class="text-box">
        <div class="greeting">👋 Hello, I'm</div>
        <h1 class="name">Chanheng (Jey)</h1>
        <h2 class="role">{{ currentRole }}<span class="cursor">|</span></h2>
        <p class="description">
          Enthusiastic about uncovering insights through data analysis and solving complex problems with innovative solutions. 
          I'm passionate about learning new technologies and methodologies that help transform data into meaningful discoveries.
        </p>
        <div class="buttons">
          <a href="#skills" class="btn btn-primary">Explore My Skills</a>
          <a href="#contact" class="btn btn-secondary">Let's Connect</a>
        </div>
      </div>
      
      <!-- Image Box -->
      <div class="image-box">
        <div class="profile-image">
          <!-- Your actual image -->
          <img :src="profileImage" alt="Chanheng's Profile Picture" class="profile-photo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from '../assets/images/profile.jpg'

export default {
  name: 'Hero',
  data() {
    return {
      profileImage,
      roles: ['Data Enthusiast', 'Problem Solver', 'Lifelong Learner'],
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: transparent;
  position: relative;
  padding: 120px 20px 80px 20px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(38, 70, 83, 0.05) 0%,
    rgba(42, 157, 143, 0.08) 25%,
    rgba(233, 196, 106, 0.05) 50%,
    rgba(244, 162, 97, 0.08) 75%,
    rgba(231, 111, 81, 0.05) 100%);
  backdrop-filter: blur(20px);
  z-index: 1;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Text Box */
.text-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3rem;
  box-shadow: 0 15px 45px rgba(38, 70, 83, 0.1);
  transition: all 0.3s ease;
  animation: slideInLeft 1s ease-out;
}

.text-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 60px rgba(38, 70, 83, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
}

.greeting {
  font-size: 1.3rem;
  color: var(--color-secondary);
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.name {
  font-size: 3.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.5rem 0;
  line-height: 1.1;
}

.role {
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  min-height: 3rem;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--color-secondary);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
  backdrop-filter: blur(10px);
}

.btn-primary {
  background: rgba(38, 70, 83, 0.9);
  color: white;
  border-color: var(--color-primary);
  box-shadow: 0 8px 25px rgba(38, 70, 83, 0.3);
}

.btn-primary:hover {
  background: rgba(42, 157, 143, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(42, 157, 143, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-accent);
  border-color: var(--color-accent);
  backdrop-filter: blur(15px);
}

.btn-secondary:hover {
  background: rgba(231, 111, 81, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(231, 111, 81, 0.3);
}

/* Image Box */
.image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInRight 1s ease-out;
}

.image-box:hover {
  transform: translateY(-5px);
}

.profile-image {
  width: 350px;
  height: 350px;
  border-radius: 25px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 22px;
}

/* Responsive Design */
@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    max-width: 800px;
  }
  
  .text-box, .image-box {
    min-height: 400px;
  }
  
  .name {
    font-size: 3rem;
  }
  
  .role {
    font-size: 1.6rem;
    justify-content: center;
  }
  
  .profile-image {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 70px;
  }
  
  .hero-container {
    padding: 0 1rem;
    max-width: 600px;
  }
  
  .text-box, .image-box {
    padding: 2rem;
    min-height: 350px;
  }
  
  .name {
    font-size: 2.5rem;
  }
  
  .role {
    font-size: 1.4rem;
  }
  
  .profile-image {
    width: 250px;
    height: 250px;
  }
  
  .buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 0 1rem;
    max-width: 100%;
  }
  
  .text-box, .image-box {
    padding: 1.5rem;
    min-height: 300px;
  }
  
  .name {
    font-size: 2rem;
  }
  
  .role {
    font-size: 1.2rem;
  }
  
  .profile-image {
    width: 200px;
    height: 200px;
  }
  
  .btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
