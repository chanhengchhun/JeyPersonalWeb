<template>
  <section id="contact" class="contact">
    <div class="container">

      <div class="section-header reveal">
        <p class="label">Say Hello</p>
        <h2>Let's Connect</h2>
        <p class="contact-intro">
          I'm always down to spark conversations so feel free to reach out!
        </p>
      </div>

      <div class="contact-box reveal reveal-delay-1">

        <!-- Email -->
        <div class="info-row">
          <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href="mailto:chhun.chanheng@icloud.com" class="link-draw">chhun.chanheng@icloud.com</a>
        </div>

        <!-- Location -->
        <div class="info-row">
          <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>Columbus, Ohio</span>
        </div>

        <!-- Divider -->
        <div class="contact-divider"></div>

        <!-- Social links -->
        <div class="social-links">
          <a href="https://www.linkedin.com/in/chanheng-chh/" target="_blank" rel="noopener" class="social-link">LinkedIn</a>
          <span class="social-dot"></span>
          <a href="https://github.com/chanhengchhun" target="_blank" rel="noopener" class="social-link">GitHub</a>
          <span class="social-dot"></span>
          <a href="https://www.instagram.com/jey.chanh/" target="_blank" rel="noopener" class="social-link">Instagram</a>
          <span class="social-dot"></span>
          <a href="https://vsco.co/jeiidany/gallery" target="_blank" rel="noopener" class="social-link">VSCO</a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact {
  padding: var(--space-24) var(--space-6);
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
}

.container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.section-header {
  margin-bottom: var(--space-12);
}

.section-header .label {
  margin-bottom: var(--space-3);
}

.section-header h2 {
  font-size: var(--text-5xl);
  font-weight: 300;
  margin-bottom: var(--space-6);
}

.contact-intro {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 480px;
  margin: 0 auto;
}

/* Contact box */
.contact-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-10);
  box-shadow: var(--shadow-sm);
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.info-icon {
  width: 18px;
  height: 18px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}

.info-row a {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  font-weight: 400;
  position: relative;
}

.info-row a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.info-row a:hover::after { width: 100%; }

.info-row span {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
}

/* Divider */
.contact-divider {
  height: 1px;
  background: var(--color-border);
  margin: var(--space-8) 0;
}

/* Social links */
.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.social-link {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  text-decoration: none;
  transition: color var(--transition-fast);
  position: relative;
}

.social-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.social-link:hover {
  color: var(--color-text-primary);
}

.social-link:hover::after { width: 100%; }

.social-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-border-dark);
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .contact { padding: var(--space-16) var(--space-4); }

  .section-header h2 { font-size: var(--text-4xl); }

  .contact-box { padding: var(--space-6); }

  .social-links { gap: var(--space-3); }
}
</style>
