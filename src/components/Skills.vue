
<template>
  <section id="skills" class="skills">
    <div class="skills-container">
      <div class="section-header">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">A blend of technical, creative, and collaborative skills</p>
      </div>
      <div class="skills-grid">
        <div class="skill-card" v-for="category in skillCategories" :key="category.title">
          <div class="card-header">
            <span class="card-icon">{{ category.icon }}</span>
            <h3>{{ category.title }}</h3>
          </div>
          <div class="card-body">
            <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
              <div class="skill-label">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
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
  name: 'Skills',
  data() {
    return {
      skillCategories: [
        {
          title: 'Technical Skills',
          icon: '💻',
          skills: [
            { name: 'Python', level: 75 },
            { name: 'Java', level: 75 },
            { name: 'SQL', level: 50 },
            { name: 'Vue.js', level: 75 },
            { name: 'HTML/CSS', level: 75 }
          ]
        },
        {
          title: 'Soft Skills',
          icon: '🤝',
          skills: [
            { name: 'Problem Solving', level: 90 },
            { name: 'Communication', level: 90 },
            { name: 'Team Collaboration', level: 90 },
            { name: 'Adaptability', level: 95 },
            { name: 'Creativity', level: 85 }
          ]
        },
        {
          title: 'Tools & Platforms',
          icon: '🛠️',
          skills: [
            { name: 'VS Code', level: 90 },
            { name: 'Microsoft 365', level: 90 },
            { name: 'Git & GitHub', level: 75 },
            { name: 'Vite', level: 75 },
            { name: 'PostgreSQL', level: 75 }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

.skills {
  padding: 140px 5% 80px 5%;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(155, 89, 182, 0.03) 0%, rgba(142, 68, 173, 0.05) 25%, rgba(118, 75, 162, 0.03) 50%, rgba(102, 126, 234, 0.05) 75%, rgba(240, 147, 251, 0.03) 100%);
  display: flex;
  align-items: center;
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, rgba(155, 89, 182, 1) 0%, rgba(142, 68, 173, 1) 25%, rgba(118, 75, 162, 1) 50%, rgba(102, 126, 234, 1) 75%, rgba(155, 89, 182, 1) 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1.2;
  animation: gradientShift 4s ease-in-out infinite;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 22px;
  box-shadow: 0 10px 32px rgba(155, 89, 182, 0.08), 0 4px 16px rgba(155, 89, 182, 0.05), inset 0 1px 0 rgba(255,255,255,0.2);
  border: 1px solid rgba(155, 89, 182, 0.13);
  overflow: hidden;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  position: relative;
  padding: 2.2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  min-height: 340px;
}
.skill-card:hover {
  box-shadow: 0 18px 48px rgba(155, 89, 182, 0.13), 0 8px 32px rgba(155, 89, 182, 0.08), inset 0 1px 0 rgba(255,255,255,0.3);
  border-color: rgba(155, 89, 182, 0.25);
  transform: translateY(-8px) scale(1.02);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.card-icon {
  font-size: 2.2rem;
  background: linear-gradient(135deg, rgba(155, 89, 182, 0.12), rgba(102, 126, 234, 0.12));
  border-radius: 14px;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(155, 89, 182, 0.13);
}
.card-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.skill-item {
  margin-bottom: 0.5rem;
}
.skill-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
}
.skill-name {
  font-weight: 500;
  color: #333;
  font-size: 1rem;
}
.skill-level {
  font-size: 0.95rem;
  color: #764ba2;
  font-weight: 600;
}
.skill-bar {
  background: #e9ecef;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 5px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .skill-card {
    min-height: 0;
    padding: 1.5rem 1rem 1.2rem 1rem;
  }
}
</style>

