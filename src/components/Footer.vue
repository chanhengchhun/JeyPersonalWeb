<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <h2>Chanheng</h2>
          <p class="footer-tagline">Crafting digital experiences with passion and precision</p>
        </div>
        <div class="footer-links">
          <nav class="footer-nav" aria-label="Footer Navigation">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <nav class="footer-extra-nav" aria-label="More Links">
            <ul>
              <li><router-link to="/photography">Photography</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; {{ currentYear }} Chanheng Chhun. Built with Vue.js.</span>
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
  background: #181c24;
  color: #f3f3f3;
  width: 100%;
  border-top: 2.5px solid var(--color-primary);
  box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.08);
  padding: 2.5rem 0 1.2rem;
  position: relative;
}
.footer::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, var(--color-primary) 0%, #667eea 100%);
  opacity: 0.18;
  z-index: 2;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.footer-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 1.2rem;
}
.footer-brand {
  text-align: center;
  margin-bottom: 0.5rem;
}
.footer-brand h2 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.3rem;
  letter-spacing: 0.01em;
}
.footer-tagline {
  color: #e5e7eb;
  font-size: 1rem;
  opacity: 0.85;
  margin-bottom: 0;
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}
.footer-nav ul, .footer-extra-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
}
.footer-nav a, .footer-extra-nav a, .footer-extra-nav router-link {
  color: #f3f3f3;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0.3rem 0.7rem;
  transition: background 0.2s, color 0.2s;
  display: inline-block;
  text-align: left;
}
.footer-nav a:hover, .footer-nav a:focus,
.footer-extra-nav a:hover, .footer-extra-nav a:focus,
.footer-extra-nav router-link:hover, .footer-extra-nav router-link:focus {
  background: var(--color-primary);
  color: #181c24;
}
.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.2rem;
  font-size: 0.98rem;
  color: #b5c2c9;
  text-align: center;
}
@media (max-width: 900px) {
  .footer-container {
    padding: 0 0.5rem;
  }
  .footer-links {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
}
@media (max-width: 600px) {
  .footer-container {
    padding: 0 0.2rem;
  }
  .footer-main {
    gap: 1rem;
  }
  .footer-bottom {
    font-size: 0.93rem;
    padding-top: 0.7rem;
  }
  .footer-brand h2 {
    font-size: 1.3rem;
  }
  .footer-tagline {
    font-size: 0.93rem;
  }
  .footer-links {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .footer-nav ul, .footer-extra-nav ul {
    align-items: center;
  }
  .footer-nav a, .footer-extra-nav a, .footer-extra-nav router-link {
    text-align: center;
  }
}
</style>
