<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2>About Me</h2>
        <div class="section-subtitle">Discover my journey in data and technology</div>
      </div>
      
      <div class="about-content">
        <div class="main-content">
          <div class="intro-text">
            <div class="text-block">
              <h3>👋 Hello there!</h3>
              <p>
                I'm <strong>Chanheng (Jey)</strong>, a passionate data enthusiast and problem solver 
                who thrives on transforming complex datasets into meaningful insights. My journey 
                in technology is driven by curiosity and a genuine love for uncovering patterns 
                that can make a real impact.
              </p>
            </div>
            
            <div class="text-block">
              <h3>🚀 My Passion</h3>
              <p>
                What excites me most is the intersection of data science and real-world applications. 
                I believe that every dataset tells a story, and I'm dedicated to finding innovative 
                ways to extract valuable insights that drive decision-making and solve complex challenges.
              </p>
            </div>
            
            <div class="text-block">
              <h3>🎯 My Approach</h3>
              <p>
                I approach every project with meticulous attention to detail and a commitment to 
                continuous learning. Whether it's exploring new analytical methodologies, mastering 
                cutting-edge tools, or collaborating on interdisciplinary projects, I'm always 
                eager to expand my expertise and contribute meaningful solutions.
              </p>
            </div>
          </div>
          
          <div class="skills-highlight">
            <h3>Areas of Focus</h3>
            <div class="focus-areas">
              <div class="focus-item">
                <div class="focus-icon">📊</div>
                <h4>Data Analysis</h4>
                <p>Extracting insights from complex datasets</p>
              </div>
              <div class="focus-item">
                <div class="focus-icon">🧠</div>
                <h4>Problem Solving</h4>
                <p>Creative solutions to analytical challenges</p>
              </div>
              <div class="focus-item">
                <div class="focus-icon">📈</div>
                <h4>Data Visualization</h4>
                <p>Making data stories come alive</p>
              </div>
              <div class="focus-item">
                <div class="focus-icon">🔍</div>
                <h4>Research</h4>
                <p>Continuous learning and methodology exploration</p>
              </div>
            </div>
          </div>

          <div class="hobbies-section">
            <h3>Beyond the Data</h3>
            <p class="hobbies-intro">
              When I'm not diving into datasets, I explore creativity through writing and visual storytelling. 
              These passions complement my analytical work by fostering different perspectives and creative thinking.
            </p>
            
            <div class="hobbies-grid">
              <div class="hobby-card">
                <div class="hobby-icon">✍️</div>
                <h4>Blog</h4>
                <p>Sharing insights, experiences, and thoughts on data, technology, and personal growth through written storytelling.</p>
                <button @click="navigateToBlog" class="hobby-btn">
                  <span>Explore My Blog</span>
                  <div class="btn-arrow">→</div>
                </button>
              </div>
              
              <div class="hobby-card">
                <div class="hobby-icon">📸</div>
                <h4>Photography</h4>
                <p>Capturing moments and perspectives through the lens, finding beauty in everyday scenes and special occasions.</p>
                <button @click="navigateToPhotography" class="hobby-btn">
                  <span>View My Photography</span>
                  <div class="btn-arrow">→</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    navigateToBlog() {
      // For now, we'll open a placeholder - you can later replace with actual blog URL
      window.open('/blog', '_blank') || (window.location.href = '/blog');
    },
    navigateToPhotography() {
      // For now, we'll open a placeholder - you can later replace with actual photography URL
      window.open('/photography', '_blank') || (window.location.href = '/photography');
    }
  }
}
</script>


<style scoped>
.about {
  min-height: 100vh;
  padding: 120px 20px 80px 20px;
  background: linear-gradient(135deg, 
    rgba(143, 230, 152, 0.03) 0%, 
    rgba(45, 59, 47, 0.05) 50%,
    rgba(143, 230, 152, 0.03) 100%);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(143, 230, 152, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(229, 185, 138, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(45, 59, 47, 0.05) 0%, transparent 50%);
  z-index: 1;
}

.about::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.02)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.03)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  z-index: 1;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: slideInUp 0.8s ease-out;
}

.section-header h2 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, 
    var(--color-primary) 0%,
    var(--color-accent) 50%,
    var(--color-secondary) 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  animation: gradientShift 4s ease-in-out infinite;
  text-shadow: 0 4px 16px rgba(143, 230, 152, 0.3);
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-light);
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.about-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.main-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.intro-text {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.text-block {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(25px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.06),
    0 8px 24px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
  animation: slideInLeft 0.8s ease-out;
  animation-fill-mode: both;
}

.text-block:nth-child(1) { animation-delay: 0.2s; }
.text-block:nth-child(2) { animation-delay: 0.4s; }
.text-block:nth-child(3) { animation-delay: 0.6s; }

.text-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.08),
    transparent
  );
  transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.text-block::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(143, 230, 152, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(229, 185, 138, 0.04) 0%, transparent 50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.text-block:hover {
  transform: translateY(-5px) scale(1.02);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 
    0 32px 64px rgba(0, 0, 0, 0.08),
    0 16px 48px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.08);
}

.text-block:hover::before {
  left: 100%;
}

.text-block:hover::after {
  opacity: 1;
}

.text-block h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, 
    var(--color-primary) 0%,
    var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
}

.text-block p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  letter-spacing: 0.2px;
}

.text-block strong {
  color: var(--color-primary);
  font-weight: 600;
}

.skills-highlight {
  background: var(--color-bg-glass);
  backdrop-filter: blur(25px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  padding: 3rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.05),
    inset 0 2px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  animation: slideInUp 0.8s ease-out 0.8s both;
}

.skills-highlight::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(143, 230, 152, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(229, 185, 138, 0.06) 0%, transparent 50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.skills-highlight:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.08),
    0 20px 60px rgba(0, 0, 0, 0.05),
    inset 0 2px 0 rgba(255, 255, 255, 0.3),
    inset 0 -2px 0 rgba(0, 0, 0, 0.08);
}

.skills-highlight:hover::before {
  opacity: 1;
}

.skills-highlight h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, 
    var(--color-primary) 0%,
    var(--color-accent) 50%,
    var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.focus-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.focus-item {
  background: var(--color-bg-glass);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  animation: float 6s ease-in-out infinite;
}

.focus-item:nth-child(1) { animation-delay: 0s; }
.focus-item:nth-child(2) { animation-delay: 1.5s; }
.focus-item:nth-child(3) { animation-delay: 3s; }
.focus-item:nth-child(4) { animation-delay: 4.5s; }

.focus-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(143, 230, 152, 0.1) 0%,
    rgba(229, 185, 138, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.focus-item:hover {
  transform: translateY(-8px) scale(1.05);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 25px rgba(143, 230, 152, 0.15);
  animation-play-state: paused;
}

.focus-item:hover::before {
  opacity: 1;
}

.focus-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.focus-item h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--color-text);
  line-height: 1.3;
}

.focus-item p {
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;
}

/* Hobbies Section */
.hobbies-section {
  background: var(--color-bg-glass);
  backdrop-filter: blur(25px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  padding: 3rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.08),
    0 12px 40px rgba(0, 0, 0, 0.05),
    inset 0 2px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  animation: slideInUp 0.8s ease-out 1s both;
}

.hobbies-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 25% 25%, rgba(229, 185, 138, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(143, 230, 152, 0.06) 0%, transparent 50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.hobbies-section:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.08),
    0 20px 60px rgba(0, 0, 0, 0.05),
    inset 0 2px 0 rgba(255, 255, 255, 0.3),
    inset 0 -2px 0 rgba(0, 0, 0, 0.08);
}

.hobbies-section:hover::before {
  opacity: 1;
}

.hobbies-section h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, 
    var(--color-accent) 0%,
    var(--color-primary) 50%,
    var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hobbies-intro {
  font-size: 1.1rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.hobby-card {
  background: var(--color-bg-glass);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 2.5rem 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.hobby-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(229, 185, 138, 0.08) 0%,
    rgba(143, 230, 152, 0.06) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.hobby-card:hover {
  transform: translateY(-10px) scale(1.05);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.1),
    0 10px 30px rgba(229, 185, 138, 0.15);
}

.hobby-card:hover::before {
  opacity: 1;
}

.hobby-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.hobby-card h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text);
  line-height: 1.3;
}

.hobby-card p {
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hobby-btn {
  background: linear-gradient(135deg, 
    rgba(229, 185, 138, 0.8) 0%, 
    rgba(143, 230, 152, 0.8) 100%);
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  letter-spacing: 0.3px;
}

.hobby-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.hobby-btn:hover::before {
  width: 300px;
  height: 300px;
}

.hobby-btn:hover {
  transform: translateY(-3px) scale(1.05);
  background: linear-gradient(135deg, 
    rgba(229, 185, 138, 0.9) 0%, 
    rgba(143, 230, 152, 0.9) 100%);
  box-shadow: 
    0 15px 35px rgba(229, 185, 138, 0.4),
    0 6px 20px rgba(143, 230, 152, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.hobby-btn:active {
  transform: translateY(-1px) scale(1.02);
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.hobby-btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .intro-text {
    grid-template-columns: 1fr;
  }
  
  .focus-areas {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  
  .hobbies-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 100px 15px 60px 15px;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
  }
  
  .text-block {
    padding: 2rem;
  }
  
  .skills-highlight {
    padding: 2.5rem 2rem;
  }
  
  .focus-areas {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .main-content {
    gap: 2.5rem;
  }
  
  .hobbies-section {
    padding: 2.5rem 2rem;
  }
  
  .hobbies-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .hobby-card {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 80px 10px 40px 10px;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .text-block {
    padding: 1.8rem;
    border-radius: 20px;
  }
  
  .text-block h3 {
    font-size: 1.3rem;
  }
  
  .text-block p {
    font-size: 1rem;
  }
  
  .skills-highlight {
    padding: 2rem 1.5rem;
    border-radius: 25px;
  }
  
  .skills-highlight h3 {
    font-size: 1.7rem;
  }
  
  .focus-item {
    padding: 1.5rem;
  }
  
  .focus-icon {
    font-size: 2rem;
  }
  
  .focus-item h4 {
    font-size: 1.2rem;
  }
  
  .hobbies-section {
    padding: 2rem 1.5rem;
    border-radius: 25px;
  }
  
  .hobbies-section h3 {
    font-size: 1.7rem;
  }
  
  .hobbies-intro {
    font-size: 1rem;
  }
  
  .hobby-card {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
  
  .hobby-icon {
    font-size: 2.5rem;
  }
  
  .hobby-card h4 {
    font-size: 1.3rem;
  }
  
  .hobby-btn {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }
}
</style>