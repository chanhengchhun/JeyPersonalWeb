<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact-bg-shape" aria-hidden="true"></div>
    <div class="container">
      <h2 id="contact-title" class="contact-title">Get In Touch</h2>
      <p class="contact-intro">
        I'm always interested in new opportunities and collaborations.<br>
        <span class="contact-highlight">Feel free to reach out if you'd like to work together!</span>
      </p>
      <div class="contact-content">
        <div class="contact-info glass-card" aria-label="Contact Information">
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
              <a href="https://github.com/chanhengchhun" class="social-btn github" target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/chanheng-chh/" class="social-btn linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
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
  name: 'Contact'
}
</script>

<style scoped>
/* Contact Section Styles (modern glassmorphism) */
.contact {
  padding: 140px 5% 40px 5%;
  background: linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%);
  position: relative;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  overflow: hidden;
}

.contact-bg-shape {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%) rotate(-8deg);
  width: 700px;
  height: 420px;
  background: linear-gradient(120deg, rgba(102,126,234,0.18) 0%, rgba(155,89,182,0.13) 100%);
  filter: blur(48px) saturate(1.2);
  z-index: 0;
  border-radius: 40% 60% 60% 40%/60% 40% 60% 40%;
  pointer-events: none;
}

.contact-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 0.7rem;
  text-align: center;
  letter-spacing: 0.5px;
}

.contact-intro {
  font-size: 1.13rem;
  color: #444;
  margin-bottom: 2.2rem;
  text-align: center;
}

.contact-highlight {
  color: #a18cd1;
  font-weight: 500;
  font-size: 1.13rem;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
}

.glass-card {
  background: rgba(255,255,255,0.80);
  border-radius: 32px;
  box-shadow: 0 12px 40px 0 rgba(102,126,234,0.18), 0 4px 16px 0 rgba(155,89,182,0.13);
  border: 2.5px solid rgba(102,126,234,0.18);
  backdrop-filter: blur(28px) saturate(1.3);
  -webkit-backdrop-filter: blur(28px) saturate(1.3);
  padding: 2.8rem 2.3rem 2.4rem 2.3rem;
  margin-bottom: 2.2rem;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  position: relative;
  z-index: 1;
  overflow: visible;
  animation: floatCard 3.5s ease-in-out infinite alternate;
}
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 32px;
  padding: 2.5px;
  background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
  opacity: 0.19;
  z-index: 0;
  pointer-events: none;
}
.glass-card > * {
  position: relative;
  z-index: 1;
}
@keyframes floatCard {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-12px) scale(1.012); }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
}

.contact-link {
  color: #764ba2;
  font-weight: 600;
  text-decoration: underline;
  font-size: 1.18rem;
  word-break: break-all;
  transition: color 0.2s;
}
.contact-link:hover {
  color: #667eea;
}
.contact-icon-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.18rem;
  width: 100%;
  justify-content: flex-start;
}
.contact-icon {
  font-size: 2.4rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.9rem;
  height: 2.9rem;
  background: linear-gradient(120deg, #667eea22 0%, #764ba222 100%);
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(102,126,234,0.09);
}

.social-icons-row {
  display: flex;
  flex-direction: row;
  gap: 1.3rem;
  justify-content: flex-start;
  margin-top: 0.2rem;
}
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #f8f9fa;
  color: #333;
  border: 2.5px solid transparent;
  font-size: 1.3rem;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  box-shadow: 0 2px 12px rgba(102,126,234,0.10);
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.social-btn.github:hover {
  background: #333;
  color: #fff;
  border-color: #333;
  transform: translateY(-2px) scale(1.09);
}
.social-btn.linkedin:hover {
  background: #0077b5;
  color: #fff;
  border-color: #0077b5;
  transform: translateY(-2px) scale(1.09);
}

@media (max-width: 600px) {
  .glass-card {
    padding: 1.1rem 0.4rem;
    max-width: 99vw;
  }
  .contact-title {
    font-size: 1.5rem;
  }
  .contact-intro {
    font-size: 1rem;
  }
  .contact-bg-shape {
    width: 98vw;
    height: 220px;
    top: -60px;
    left: 50%;
    border-radius: 50% 50% 60% 40%/60% 40% 60% 40%;
  }
  .contact-icon-row, .social-icons-row {
    gap: 0.7rem;
  }
  .social-btn {
    width: 42px;
    height: 42px;
  }
  .contact-icon {
    font-size: 1.7rem;
    width: 2.1rem;
    height: 2.1rem;
  }
}

@media (max-width: 900px) {
  .glass-card {
    padding: 1.3rem 0.7rem;
    max-width: 98vw;
  }
}
</style>
