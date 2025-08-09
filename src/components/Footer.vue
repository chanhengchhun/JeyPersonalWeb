<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <h2>Chanheng</h2>
          <p class="footer-tagline">Crafting digital experiences with passion and precision</p>
        </div>
        <nav class="footer-nav" aria-label="Footer Navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="footer-social">
          <div class="social-links">
            <a href="https://github.com/chanhengchhun" target="_blank" aria-label="GitHub" rel="noopener" class="social-link">
              <span class="social-icon">🐙</span>
            </a>
            <a href="https://www.linkedin.com/in/chanheng-chh/" target="_blank" aria-label="LinkedIn" rel="noopener" class="social-link">
              <span class="social-icon">💼</span>
            </a>
            <a href="mailto:chhun.chanheng@icloud.com" aria-label="Email" class="social-link">
              <span class="social-icon">📧</span>
            </a>
          </div>
          <a href="#contact" class="footer-cta">Get In Touch</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Chanheng Chhun. Made with Passion</p>
        <span class="footer-tech">Built with Vue.js &amp; Vite</span>
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
/* Modern, flat, responsive footer redesign */
.footer {
  background: var(--color-text-light);
  color: var(--color-white);
  padding: 3rem 0 1.5rem;
  position: relative;
  width: 100%;
  box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.04);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5rem;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 1.5rem;
}

.footer-brand {
  flex: 1 1 220px;
  min-width: 180px;
}
.footer-brand h2 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
}
.footer-tagline {
  color: var(--color-white);
  font-size: 1rem;
  opacity: 0.85;
  margin-bottom: 0;
}

.footer-nav {
  flex: 1 1 160px;
  min-width: 140px;
}
.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.footer-nav a {
  color: var(--color-white);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0.3rem 0.7rem;
  transition: background 0.2s, color 0.2s;
}
.footer-nav a:hover, .footer-nav a:focus {
  background: var(--color-primary);
  color: var(--color-light);
}

.footer-social {
  flex: 1 1 180px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;
}
.social-links {
  display: flex;
  gap: 1rem;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  color: var(--color-white);
  font-size: 1.3rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  text-decoration: none;
  border: 1.5px solid transparent;
}
.social-link:hover, .social-link:focus {
  background: var(--color-primary);
  color: var(--color-light);
  border-color: var(--color-primary);
  transform: translateY(-2px) scale(1.08);
}
.footer-cta {
  display: inline-block;
  background: var(--color-primary);
  color: var(--color-light);
  padding: 0.7rem 1.4rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  box-shadow: 0 2px 8px 0 rgba(87,204,153,0.10);
}
.footer-cta:hover, .footer-cta:focus {
  background: var(--color-light);
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
  transform: translateY(-2px) scale(1.04);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1.2rem;
  font-size: 0.98rem;
  color: #e5e7eb;
}
.footer-bottom p {
  margin: 0;
  color: #e5e7eb;
}
.footer-tech {
  color: #b5c2c9;
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .footer-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .footer-social {
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .footer-container {
    padding: 0 1rem;
  }
  .footer-main {
    gap: 1.2rem;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.93rem;
  }
}
</style>
