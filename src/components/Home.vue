<template>
  <section id="home">
    <div class="hero-container">
      <!-- Single Text Box with Overlapping Image -->
      <div class="text-box">
        <div class="text-content">
          <div class="greeting">👋 Hello, I'm</div>
          <h2 class="name">Chanheng (Jey)</h2>
          <p class="description">
            It feels like life is a constant journey of learning new things and embracing challenges. It's always feels like there's something I don't know, or didn't know enough.
          <br><br>
            Like Aristotle once said, <i>"The more you know, the more you realize you don't know."</i>
          </p>
          <div class="buttons">
            <a href="#about" class="btn btn-primary">Learn More</a>
            <a href="#contact" class="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        
        <!-- Overlapping Image Box -->
        <div class="image-box">
          <div class="profile-image">
            <img :src="profileImage" alt="Chanheng's Profile Picture" class="profile-photo" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '../assets/images/profile.webp';
</script>


<style scoped>
/* ==============================================
   Hero Section
   ============================================== */

.hero-container {
  max-width: var(--max-width);
  min-height: 75vh;
  margin: 0 auto;
  width: 100%;
  padding: 0 var(--space-6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* ==============================================
   Main Text Box
   ============================================== */
.text-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-16) var(--space-12);
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: var(--space-12);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
  animation: slideInUp 0.8s ease-out;
}

.text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-box:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* ==============================================
   Text & Elements inside the Text Box
   ============================================== */
.greeting {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: var(--space-2);
  letter-spacing: 0.025em;
}

.name {
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--color-text-primary);
  margin: var(--space-1) 0 var(--space-6) 0;
  line-height: 1.2;
}

.description {
  font-size: var(--text-lg);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-8);
  max-width: 600px;
}

/* ==============================================
   Buttons
   ============================================== */
.buttons {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--text-base);
  transition: all 0.2s ease;
  display: inline-block;
  letter-spacing: 0.025em;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  border: 2px solid var(--color-primary);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
/* ==============================================
   Overlapping Image Box
   ============================================== */
.image-box {
  flex-shrink: 0;
  animation: slideInRight 0.8s ease-out 0.2s both;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);
}

.profile-image:hover {
  transform: translateY(-4px) rotate(2deg);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-image:hover .profile-photo {
  transform: scale(1.05);
}

/* ==============================================
   Responsive Design
   ============================================== */
@media (max-width: 768px) {
  .hero-container {
    padding: 0 var(--space-4);
  }

  .text-box {
    flex-direction: column;
    text-align: center;
    padding: var(--space-12) var(--space-6);
    gap: var(--space-8);
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
  .text-box {
    padding: var(--space-8) var(--space-4);
    gap: var(--space-6);
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }

  .btn {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
  }
}

/* ==============================================
   Keyframe Animations
   ============================================== */
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

</style>