<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <h2>Chanheng</h2>
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
        <span>&copy; {{ currentYear }} Chanheng Chhun. All rights reserved.</span>
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
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--space-12) 0 var(--space-6);
  margin-top: auto;
}

.footer-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.footer-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid var(--color-border);
}

.footer-brand {
  text-align: center;
}

.footer-brand h2 {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--color-primary);
  margin: 0 0 var(--space-2) 0;
}

.footer-links {
  display: flex;
  gap: var(--space-8);
  justify-content: center;
  flex-wrap: wrap;
}

.footer-nav ul,
.footer-extra-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: center;
}

.footer-nav a,
.footer-extra-nav a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.footer-nav a:hover,
.footer-nav a:focus,
.footer-extra-nav a:hover,
.footer-extra-nav a:focus {
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  transform: translateY(-1px);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--space-6);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    padding: var(--space-8) 0 var(--space-4);
  }

  .footer-container {
    padding: 0 var(--space-4);
  }

  .footer-main {
    gap: var(--space-6);
  }

  .footer-links {
    flex-direction: column;
    gap: var(--space-4);
  }

  .footer-nav ul,
  .footer-extra-nav ul {
    flex-direction: row;
    justify-content: center;
    gap: var(--space-4);
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 var(--space-2);
  }

  .footer-brand h2 {
    font-size: var(--text-xl);
  }
}
</style>
