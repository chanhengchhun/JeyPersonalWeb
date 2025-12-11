<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="header-section">
        <h2 class="title">Let's Connect</h2>
        <p class="intro">
          I'm always down to spark conversations.
        </p>
        <p class="description">
          Come send a message, say hi, or tell me what's on your mine. Prefer in person? Let's brew some convo at a café. It's always great to meet new people and share ideas, or just chatting about life.  
        </p>
      </div>
      
      <div class="contact-box">
        <div class="info-item">
          <span class="icon">📧</span>
          <a href="mailto:chhun.chanheng@icloud.com">chhun.chanheng@icloud.com</a>
        </div>
        
        <div class="info-item">
          <span>Columbus, Ohio</span>
        </div>
        
        <div class="social-links">
          <a href="https://www.linkedin.com/in/chanheng-chh/" target="_blank" rel="noopener" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/chanhengchhun" target="_blank" rel="noopener" aria-label="GitHub">GitHub</a>
          <a href="https://www.instagram.com/jey.chanh/" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
          <a href="https://vsco.co/jeiidany/gallery" target="_blank" rel="noopener" aria-label="VSCO">VSCO</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact {
  padding: var(--space-20) var(--space-6);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.header-section {
  margin-bottom: var(--space-12);
}

.title {
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  line-height: 1.2;
}

.intro {
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
  line-height: 1.6;
  font-weight: 600;
}

.description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-12);
  box-shadow: var(--shadow-lg);
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
  font-size: var(--text-lg);
}

.info-item:last-of-type {
  margin-bottom: var(--space-8);
}

.icon {
  font-size: 1.5rem;
}

.info-item a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.info-item a:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.info-item span {
  color: var(--color-text-primary);
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.social-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--text-base);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-lg);
  transition: all 0.2s ease;
}

.social-links a:hover {
  color: var(--color-primary);
  background: var(--color-background);
}

@media (max-width: 768px) {
  .contact {
    padding: var(--space-16) var(--space-4);
  }

  .title {
    font-size: var(--text-2xl);
  }

  .intro {
    font-size: var(--text-base);
  }

  .contact-box {
    padding: var(--space-8);
  }

  .info-item {
    font-size: var(--text-base);
  }
}

@media (max-width: 480px) {
  .contact-box {
    padding: var(--space-6);
  }

  .info-item {
    flex-direction: column;
    gap: var(--space-2);
  }

  .social-links {
    flex-direction: column;
    gap: var(--space-2);
  }

  .social-links a {
    display: block;
  }
}
</style>
