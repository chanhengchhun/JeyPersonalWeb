<template>
  <footer class="footer">
    <div class="footer-background">
      <div class="footer-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section brand">
          <h3>Chanheng</h3>
          <p>Crafting digital experiences with passion and precision</p>
        </div>
        <div class="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">👨‍💻 About</a></li>
            <li><a href="#education">🎓 Education</a></li>
            <li><a href="#skills">⚡ Skills</a></li>
            <li><a href="#contact">📬 Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Let's Connect</h4>
          <div class="social-links">
            <a href="https://github.com/chanhengchhun" target="_blank" class="social-link github">
              <span class="social-icon">🐙</span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/chanheng-chh/" target="_blank" class="social-link linkedin">
              <span class="social-icon">💼</span>
              LinkedIn
            </a>
            <a href="mailto:chhun.chanheng@icloud.com" class="social-link email">
              <span class="social-icon">📧</span>
              Email
            </a>
          </div>
          <div class="footer-cta">
            <p>Ready to work together?</p>
            <a href="#contact" class="cta-button">Get In Touch</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Chanheng Chhun. Made with ❤️ in Columbus, Ohio</p>
        <div class="footer-tech">
          <span>Built with Vue.js & Vite</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 4rem 5% 2rem;
  position: relative;
  overflow: hidden;
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.footer-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 80%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 70%;
  left: 5%;
  animation-delay: 3s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 40%;
  left: 70%;
  animation-delay: 6s;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section.brand h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.footer-section h4 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #ecf0f1;
  font-weight: 600;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.footer-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.2rem;
}

.stat-label {
  font-size: 0.8rem;
  color: #95a5a6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0;
}

.footer-section ul li a:hover {
  color: #667eea;
  transform: translateX(5px);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #bdc3c7;
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(102, 126, 234, 0.2);
  color: white;
  transform: translateX(5px);
}

.social-icon {
  font-size: 1.2rem;
}

.footer-cta {
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.footer-cta p {
  margin-bottom: 1rem;
  color: #ecf0f1;
  font-weight: 500;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #95a5a6;
  margin: 0;
}

.footer-tech {
  color: #95a5a6;
  font-size: 0.9rem;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-stats {
    justify-content: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .social-links {
    align-items: center;
  }
  
  .social-link {
    max-width: 200px;
  }
}
</style>
