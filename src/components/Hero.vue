<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <!-- Text Box -->
      <div class="text-box">
        <div class="greeting">👋 Hello, I'm</div>
        <h1 class="name">Chanheng</h1>
        <h2 class="role">{{ currentRole }}<span class="cursor">|</span></h2>
        <p class="description">
          Passionate about creating beautiful, functional, and user-friendly web experiences. 
          I turn ideas into reality through clean code and thoughtful design.
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
          <img src="/profile.jpg" alt="Chanheng's Profile Picture" class="profile-photo" />
        </div>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  padding-top: 80px; /* Account for fixed header */
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: stretch;
}

/* Text Box */
.text-box {
  color: white;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
}

.text-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.greeting {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.name {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
  color: #f0f8ff;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
}

.cursor {
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  background: #f8f9ff;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

/* Image Box */
.image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  min-height: 500px;
}

.image-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
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

.placeholder {
  text-align: center;
  color: white;
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.placeholder p {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}

.placeholder small {
  font-size: 0.9rem;
  opacity: 0.7;
  font-style: italic;
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
  
  .placeholder-icon {
    font-size: 3rem;
  }
}
</style>
