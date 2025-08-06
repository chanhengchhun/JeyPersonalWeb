<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2>Get In Touch</h2>
      <p class="contact-intro">
        I'm always interested in new opportunities and collaborations. 
        Feel free to reach out if you'd like to work together!
      </p>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <h3>📧 Email</h3>
            <p>chhun.chanheng@icloud.com</p>
          </div>
          <div class="contact-item">
            <h3>📍 Location</h3>
            <p>Columbus, Ohio</p>
          </div>
          <div class="social-links">
            <h3>📎 Socials</h3>
            <div class="social-icons">
              <a href="https://github.com/chanhengchhun" class="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/chanheng-chh/" class="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission here
      console.log('Form submitted:', this.form)
      alert('Thank you for your message! I\'ll get back to you soon.')
      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 80px 5%;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.contact-intro {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-item {
  margin-bottom: 2rem;
}

.contact-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.contact-item p {
  color: #666;
  font-size: 1rem;
}

.social-links h3 {
  margin-bottom: 1rem;
  color: #333;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #764ba2;
}

.contact-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
