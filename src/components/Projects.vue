<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div class="project-card" @mouseenter="handleCardHover" @mouseleave="handleCardLeave">
          <div class="project-image">
            <div class="placeholder-project">
              <div class="project-icon">🛒</div>
              <div class="project-overlay">
                <button class="preview-btn">Quick Preview</button>
              </div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3>E-Commerce Website</h3>
              <div class="project-status">✨ Featured</div>
            </div>
            <p>A modern e-commerce platform built with Vue.js and Node.js featuring user authentication, product catalog, and payment integration.</p>
            <div class="project-tech">
              <span class="tech-tag vue">Vue.js</span>
              <span class="tech-tag node">Node.js</span>
              <span class="tech-tag mongo">MongoDB</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link primary">
                <span>Live Demo</span>
                <i class="link-icon">🔗</i>
              </a>
              <a href="#" class="project-link secondary">
                <span>GitHub</span>
                <i class="link-icon">📂</i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="project-card" @mouseenter="handleCardHover" @mouseleave="handleCardLeave">
          <div class="project-image">
            <div class="placeholder-project">
              <div class="project-icon">📋</div>
              <div class="project-overlay">
                <button class="preview-btn">Quick Preview</button>
              </div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3>Task Management App</h3>
              <div class="project-status new">🆕 New</div>
            </div>
            <p>A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
            <div class="project-tech">
              <span class="tech-tag react">React</span>
              <span class="tech-tag firebase">Firebase</span>
              <span class="tech-tag css">CSS3</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link primary">
                <span>Live Demo</span>
                <i class="link-icon">🔗</i>
              </a>
              <a href="#" class="project-link secondary">
                <span>GitHub</span>
                <i class="link-icon">📂</i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="project-card" @mouseenter="handleCardHover" @mouseleave="handleCardLeave">
          <div class="project-image">
            <div class="placeholder-project">
              <div class="project-icon">🌤️</div>
              <div class="project-overlay">
                <button class="preview-btn">Quick Preview</button>
              </div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3>Weather Dashboard</h3>
              <div class="project-status">⭐ Popular</div>
            </div>
            <p>A responsive weather application that provides real-time weather data, forecasts, and location-based weather information.</p>
            <div class="project-tech">
              <span class="tech-tag js">JavaScript</span>
              <span class="tech-tag api">API</span>
              <span class="tech-tag bootstrap">Bootstrap</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link primary">
                <span>Live Demo</span>
                <i class="link-icon">🔗</i>
              </a>
              <a href="#" class="project-link secondary">
                <span>GitHub</span>
                <i class="link-icon">📂</i>
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
  name: 'Projects',
  methods: {
    handleCardHover(event) {
      const card = event.currentTarget;
      card.style.transform = 'translateY(-8px) rotateX(5deg)';
    },
    handleCardLeave(event) {
      const card = event.currentTarget;
      card.style.transform = 'translateY(0) rotateX(0)';
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 80px 5%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1" fill="%23667eea" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.projects h2 {
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 3.5rem;
  color: #333;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  perspective: 1000px;
}

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  transform-style: preserve-3d;
}

.project-card:hover {
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
}

.project-image {
  height: 250px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.placeholder-project {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  z-index: 2;
}

.project-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.preview-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.preview-btn:hover {
  background: white;
  color: #667eea;
  transform: scale(1.05);
}

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-content h3 {
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
  flex: 1;
}

.project-status {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-weight: 600;
  white-space: nowrap;
  margin-left: 1rem;
}

.project-status {
  background: #e8f0fe;
  color: #667eea;
}

.project-status.new {
  background: #e8f5e8;
  color: #4caf50;
}

.project-content p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  transition: transform 0.2s ease;
}

.tech-tag:hover {
  transform: translateY(-2px);
}

.tech-tag.vue { background: #4fc08d; }
.tech-tag.react { background: #61dafb; color: #333; }
.tech-tag.node { background: #339933; }
.tech-tag.mongo { background: #47a248; }
.tech-tag.firebase { background: #ffca28; color: #333; }
.tech-tag.js { background: #f7df1e; color: #333; }
.tech-tag.css { background: #1572b6; }
.tech-tag.api { background: #ff6b6b; }
.tech-tag.bootstrap { background: #7952b3; }

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-link.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.project-link.secondary {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border: 2px solid rgba(102, 126, 234, 0.2);
}

.project-link:hover {
  transform: translateY(-2px);
}

.project-link.primary:hover {
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.project-link.secondary:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: #667eea;
}

.link-icon {
  transition: transform 0.3s ease;
}

.project-link:hover .link-icon {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .project-status {
    margin-left: 0;
    align-self: flex-start;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .project-link {
    justify-content: center;
  }
}
</style>
