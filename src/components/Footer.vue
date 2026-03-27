<template>
  <footer class="footer">
    <div class="footer-inner">

      <div class="footer-top">
        <!-- Brand signature -->
        <div class="footer-brand">Chanheng <span class="footer-nick">(Jey)</span></div>

        <!-- Nav links -->
        <nav class="footer-nav" aria-label="Footer Navigation">
          <router-link :to="{ path: '/', hash: '#home' }">Home</router-link>
          <span class="footer-dot"></span>
          <router-link :to="{ path: '/', hash: '#about' }">About</router-link>
          <span class="footer-dot"></span>
          <router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link>
          <span class="footer-dot"></span>
          <router-link to="/photography">Photography</router-link>
          <span class="footer-dot"></span>
          <router-link to="/blog">Blog</router-link>
        </nav>
      </div>

      <div class="footer-rule"></div>

      <div class="footer-bottom">
        <span>&copy; {{ currentYear }} Chanheng Chhun. All rights reserved.</span>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--space-12) 0 var(--space-8);
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.footer-brand {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.01em;
}

.footer-nick {
  font-weight: 400;
  font-style: italic;
  color: var(--color-text-tertiary);
  font-size: var(--text-lg);
}

.footer-nav {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.footer-nav a {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-nav a:hover { color: var(--color-text-primary); }

.footer-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-border-dark);
  flex-shrink: 0;
}

.footer-rule {
  height: 1px;
  background: var(--color-border);
  margin-bottom: var(--space-6);
}

.footer-bottom {
  text-align: center;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  color: var(--color-text-tertiary);
}

@media (max-width: 768px) {
  .footer-inner { padding: 0 var(--space-4); }

  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-nav {
    justify-content: center;
    gap: var(--space-3);
  }
}
</style>
