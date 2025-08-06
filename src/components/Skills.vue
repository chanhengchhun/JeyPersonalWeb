<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2>Skills & Technologies</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend</h3>
          <div class="skills-list">
            <div class="skill-item">
              <span class="skill-name">Vue.js</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">JavaScript</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">HTML/CSS</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 95%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">React</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>Backend</h3>
          <div class="skills-list">
            <div class="skill-item">
              <span class="skill-name">Node.js</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 80%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Python</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 70%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">MongoDB</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skill-category">
          <h3>Tools</h3>
          <div class="skills-list">
            <div class="skill-item">
              <span class="skill-name">Git</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">VS Code</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <span class="skill-name">Figma</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: 70%"></div>
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
  name: 'Skills'
}
</script>

<style scoped>
.skills {
  padding: 80px 5%;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.skills h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #667eea;
  text-align: center;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-name {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.skill-bar {
  background: #e9ecef;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
