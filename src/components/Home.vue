<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <!-- Single Text Box with Overlapping Image -->
      <div class="text-box">
        <div class="text-content">
          <div class="greeting">👋 Hello, I'm</div>
          <h2 class="name">Chanheng (Jey)</h2>
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
        
        <!-- Overlapping Image Box -->
        <div class="image-box">
          <div class="profile-image">
            <img :src="profileImage" alt="Chanheng's Profile Picture" class="profile-photo" />
          </div>
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
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.03) 0%,
    rgba(118, 75, 162, 0.05) 25%,
    rgba(240, 147, 251, 0.03) 50%,
    rgba(42, 157, 143, 0.05) 75%,
    rgba(38, 70, 83, 0.03) 100%);
  position: relative;
  padding: 40px 20px 40px 20px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(42, 157, 143, 0.06) 0%, transparent 50%);
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.02)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.03)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.4;
  z-index: 1;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  background: transparent;
  backdrop-filter: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
}


/* Main Text Box */
.text-box {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(1px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 35px;
  padding: 6.5rem clamp(5.5rem, 13vw, 11rem) 6.5rem 6.5rem;
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: min(1600px, 99vw);
  min-height: clamp(550px, 65vh, 700px);
  display: flex;
  align-items: center;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.05),
    inset 0 2px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: visible;
  animation: slideInLeft 1s ease-out, floatSlow 6s ease-in-out infinite 2s;
}

.text-content {
  flex: 1;
  padding-right: clamp(2rem, 6vw, 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: clamp(50%, 55vw, 60%);
}

.text-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.08),
    transparent
  );
  transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.text-box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(240, 147, 251, 0.06) 0%, transparent 50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.text-box:hover {
  transform: translateY(-5px) scale(1.02);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 
    0 32px 64px rgba(0, 0, 0, 0.08),
    0 16px 48px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  animation-play-state: paused;
}

.text-box:hover::before {
  left: 100%;
}

.text-box:hover::after {
  opacity: 1;
}

.greeting {
  font-size: 1.2rem;
  color: var(--color-secondary);
  font-weight: 500;
  margin-bottom: 0.8rem;
  opacity: 0.95;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
}

.name {
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  background: linear-gradient(135deg, 
    rgb(255, 255, 255) 0%,
    rgb(129, 255, 166) 25%,
    rgba(240, 147, 251, 1) 50%,
    rgba(42, 157, 143, 1) 75%,
    rgba(102, 126, 234, 1) 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0.3rem 0 0.8rem 0;
  line-height: 1.4;
  animation: gradientShift 4s ease-in-out infinite;
  text-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.role {
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 600;
  background: linear-gradient(135deg, 
    rgba(240, 147, 251, 0.9) 0%,
    rgba(42, 157, 143, 0.9) 50%,
    rgba(102, 126, 234, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.2rem;
  min-height: 1.4rem;
  line-height: 1.3;
  text-shadow: 0 2px 12px rgba(240, 147, 251, 0.2);
  letter-spacing: 0.5px;
}

.cursor {
  animation: blink 1s infinite;
  color: rgba(240, 147, 251, 0.8);
  text-shadow: 0 0 10px rgba(240, 147, 251, 0.5);
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.description {
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--color-text);
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 0rem;
  letter-spacing: 0.25px;
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
  padding: 1.2rem 2.8rem;
  border-radius: 60px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
  border: 1.5px solid transparent;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn-primary {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  color: white;
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 12px 32px rgba(102, 126, 234, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
  transform: translateY(-4px) scale(1.05);
  box-shadow: 
    0 20px 48px rgba(102, 126, 234, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-accent);
  border-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px) scale(1.05);
  box-shadow: 
    0 16px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Overlapping Image Box */
.image-box {
  position: absolute;
  right: clamp(20px, 5vw, 80px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  animation: floatProfile 8s ease-in-out infinite;
}

.image-box::before {
  content: '';
  position: absolute;
  top: -25px;
  left: -25px;
  right: -25px;
  bottom: -25px;
  background: 
    radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.12) 0%, transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(240, 147, 251, 0.1) 0%, transparent 60%);
  border-radius: 50px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.image-box:hover::before {
  opacity: 1;
}

.image-box:hover {
  transform: translateY(-50%) translateY(-8px) scale(1.02);
}

.profile-image {
  width: clamp(280px, 25vw, 380px);
  height: clamp(280px, 25vw, 380px);
  border-radius: 35px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(30px) saturate(1.4);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(255, 255, 255, 0.3);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.15),
    0 15px 45px rgba(0, 0, 0, 0.1),
    inset 0 2px 0 rgba(255, 255, 255, 0.3);
  padding: 15px;
}

.profile-image::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: 
    linear-gradient(135deg, 
      rgba(102, 126, 234, 0.05) 0%, 
      transparent 25%,
      rgba(240, 147, 251, 0.05) 50%,
      transparent 75%,
      rgba(42, 157, 143, 0.05) 100%);
  border-radius: 27px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

/* Inner frame for layered effect */
.profile-image::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 23px;
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    transparent 50%, 
    rgba(255, 255, 255, 0.05) 100%);
  z-index: 2;
  pointer-events: none;
}

.profile-image:hover {
  transform: scale(1.05) rotate(1deg);
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.15),
    0 20px 60px rgba(102, 126, 234, 0.1),
    0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(102, 126, 234, 0.05),
    inset 0 3px 0 rgba(255, 255, 255, 0.3);
}

.profile-image:hover::before {
  opacity: 1;
  border-color: rgba(255, 255, 255, 0.3);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 3;
  transition: transform 0.4s ease;
  box-shadow: 
    inset 0 2px 8px rgba(0, 0, 0, 0.1),
    0 2px 12px rgba(0, 0, 0, 0.05);
}

.profile-image:hover .profile-photo {
  transform: scale(1.02);
  box-shadow: 
    inset 0 2px 8px rgba(0, 0, 0, 0.05),
    0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
/* Large screens */
@media (min-width: 1400px) {
  .text-box {
    max-width: 1700px;
  }
  
  .profile-image {
    width: 420px;
    height: 420px;
  }
  
  .image-box {
    right: clamp(60px, 8vw, 120px);
  }
}

@media (max-width: 1200px) {
  .text-content {
    max-width: 60%;
  }
  
  .profile-image {
    width: clamp(300px, 22vw, 350px);
    height: clamp(300px, 22vw, 350px);
  }
}

@media (max-width: 1024px) {
  .text-content {
    max-width: 65%;
  }
  
  .image-box {
    right: clamp(10px, 2vw, 20px);
  }
  
  .profile-image {
    width: clamp(250px, 18vw, 300px);
    height: clamp(250px, 18vw, 300px);
  }
}

@media (max-width: 968px) {
  .hero-container {
    padding: 0 2.5rem;
  }
  
  .text-box {
    max-width: 90vw;
    min-height: clamp(350px, 45vh, 420px);
    padding: 3.5rem clamp(2rem, 5vw, 4rem) 3.5rem 3.5rem;
    flex-direction: column;
    text-align: center;
  }
  
  .text-content {
    padding-right: 0;
    margin-bottom: 2rem;
    max-width: 100%;
  }
  
  .buttons {
    justify-content: center;
  }
  
  .image-box {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    align-self: center;
    animation: slideInRight 1s ease-out 0.5s both;
  }
  
  .image-box:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  .profile-image {
    width: clamp(220px, 35vw, 280px);
    height: clamp(220px, 35vw, 280px);
    padding: 12px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 70px;
  }
  
  .hero-container {
    padding: 0 2rem;
  }
  
  .text-box {
    max-width: 95vw;
    min-height: clamp(320px, 40vh, 380px);
    padding: 3rem;
    flex-direction: column;
    text-align: center;
  }
  
  .text-content {
    padding-right: 0;
    margin-bottom: 2rem;
    max-width: 100%;
  }
  
  .image-box {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    align-self: center;
  }
  
  .image-box:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  .profile-image {
    width: clamp(220px, 35vw, 280px);
    height: clamp(220px, 35vw, 280px);
    padding: 10px;
  }
  
  .buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 0 1rem;
  }
  
  .text-box {
    min-height: clamp(280px, 35vh, 320px);
    padding: clamp(2rem, 5vw, 2.5rem);
    border-radius: 25px;
  }
  
  .text-content {
    margin-bottom: 1.5rem;
  }
  
  .profile-image {
    width: clamp(180px, 40vw, 220px);
    height: clamp(180px, 40vw, 220px);
    padding: 8px;
    border-radius: 25px;
  }
  
  .btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .greeting {
    font-size: clamp(1rem, 4vw, 1.2rem);
  }
  
  .description {
    font-size: clamp(0.9rem, 3.5vw, 1.1rem);
  }
}

/* Essential Animations */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes floatProfile {
  0%, 100% { 
    transform: translateY(-50%) translateY(0px) rotate(0deg); 
  }
  25% { 
    transform: translateY(-50%) translateY(-12px) rotate(0.5deg); 
  }
  50% { 
    transform: translateY(-50%) translateY(-8px) rotate(0deg); 
  }
  75% { 
    transform: translateY(-50%) translateY(-18px) rotate(-0.5deg); 
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  50% { transform: translateY(-5px) rotate(0deg); }
  75% { transform: translateY(-15px) rotate(-1deg); }
}

/* Glass Particle Effects */
.hero::after {
  animation: float 12s ease-in-out infinite;
}
</style>
