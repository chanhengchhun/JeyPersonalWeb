<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-project">Project 1</div>
          </div>
          <div class="project-content">
            <h3>E-Commerce Website</h3>
            <p>A modern e-commerce platform built with Vue.js and Node.js featuring user authentication, product catalog, and payment integration.</p>
            <div class="project-tech">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-project">Project 2</div>
          </div>
          <div class="project-content">
            <h3>Task Management App</h3>
            <p>A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
            <div class="project-tech">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">CSS3</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div class="project-card">
          <div class="project-image">
            <div class="placeholder-project">Project 3</div>
          </div>
          <div class="project-content">
            <h3>Weather Dashboard</h3>
            <p>A responsive weather application that provides real-time weather data, forecasts, and location-based weather information.</p>
            <div class="project-tech">
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">API</span>
              <span class="tech-tag">Bootstrap</span>
            </div>
            <div class="project-links">
              <a href="#" class="project-link">Live Demo</a>
              <a href="#" class="project-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
.projects {
  padding: 80px 5%;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.project-image {
  height: 200px;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-project {
  color: #6c757d;
  font-size: 1.2rem;
  font-weight: 500;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}

.project-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #764ba2;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
