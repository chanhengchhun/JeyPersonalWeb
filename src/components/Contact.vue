<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="container">
      <h2 id="contact-title" class="contact-title">Get In Touch</h2>
      <p class="contact-intro">
        I'm always interested in new opportunities and collaborations.<br>
        <span class="contact-highlight">Whether you have a project in mind, want to connect, or simply grab coffee and chat, I’d love to hear from you.</span><br>
        Prefer coffee chats? Let's brew up a conversation!
      </p>
      <div class="contact-content">
        <div class="contact-info" aria-label="Contact Information">
          <div class="contact-icon-row">
            <div class="contact-icon" aria-hidden="true">📧</div>
            <a href="mailto:chhun.chanheng@icloud.com" class="contact-link" aria-label="Email chhun.chanheng@icloud.com">chhun.chanheng@icloud.com</a>
          </div>
          <div class="contact-icon-row">
            <div class="contact-icon" aria-hidden="true">📍</div>
            <span class="contact-label">Columbus, Ohio</span>
          </div>
          <div class="contact-icon-row">
            <div class="social-icons-row">
              <a href="https://www.linkedin.com/in/chanheng-chh/" class="social-btn linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
                <img src="../assets/icons/linkedin-logo.png" alt="LinkedIn" width="24" height="24" />
              </a>
              <a href="https://vsco.co/jeiidany/gallery" class="social-btn vsco" target="_blank" rel="noopener" aria-label="VSCO">
                <img src="../assets/icons/vsco-logo.png" alt="VSCO" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

export default {
  name: 'Contact',
  data() {
    return {}
  }
}
</script>

<style scoped>
.contact {
  padding: var(--space-20) var(--space-6);
  background: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

.contact-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.contact-intro {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-12);
  line-height: 1.6;
}

.contact-highlight {
  color: var(--color-primary);
  font-weight: 600;
}

.contact-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.contact-info {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-12);
  box-shadow: var(--shadow-lg);
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  transition: all 0.3s ease;
}

.contact-info:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.contact-icon-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  justify-content: flex-start;
}

.contact-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: var(--color-primary-light);
  border-radius: 50%;
  flex-shrink: 0;
}

.contact-link {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
  font-size: var(--text-lg);
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.contact-label {
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  font-weight: 500;
}

.social-icons-row {
  display: flex;
  gap: var(--space-4);
  justify-content: flex-start;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--color-surface);
  color: var(--color-text-secondary);
  border: 2px solid var(--color-border);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-btn img {
  transition: all 0.3s ease;
  opacity: 0.7;
}

.social-btn:hover img {
  opacity: 1;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.social-btn.linkedin:hover {
  background: #0077b5;
  color: white;
  border-color: #0077b5;
}

.social-btn.vsco:hover {
  background: #6e6e6e;
  color: white;
  border-color: #6e6e6e;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact {
    padding: var(--space-16) var(--space-4);
  }

  .contact-info {
    padding: var(--space-8);
    gap: var(--space-6);
  }

  .contact-icon-row {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }

  .social-icons-row {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: var(--space-12) var(--space-2);
  }

  .contact-info {
    padding: var(--space-6);
  }

  .contact-link {
    font-size: var(--text-base);
    word-break: break-all;
  }
}
</style>
