<template>
  <!-- Shared across every route, so contact info only needs to
       live in one place instead of being duplicated per page. -->
  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-brand">Chanheng <span class="footer-nick">(Jey)</span></span>

      <div class="footer-meta">
        <nav class="footer-links" aria-label="Contact">
          <a href="mailto:chhun.chanheng@icloud.com">Email</a>
          <a href="https://www.linkedin.com/in/chanheng-chh/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/chanhengchhun" target="_blank" rel="noopener">GitHub</a>
        </nav>
        <span class="footer-dot"></span>
        <span class="footer-copy">&copy; {{ currentYear }}</span>
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
  padding: var(--space-6) 0;
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.footer-brand {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.01em;
}

.footer-nick {
  font-weight: 400;
  font-style: italic;
  color: var(--color-text-tertiary);
  font-size: var(--text-base);
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.footer-links a {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  transition: color var(--transition-fast);
}

.footer-links a:hover { color: var(--color-primary); }

.footer-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-border-dark);
  flex-shrink: 0;
}

.footer-copy {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  letter-spacing: 0.04em;
  color: var(--color-text-tertiary);
}

@media (max-width: 600px) {
  .footer-inner {
    padding: 0 var(--space-4);
    flex-direction: column;
    text-align: center;
  }
}
</style>
