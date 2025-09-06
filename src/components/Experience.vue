<template>
  <section id="experience" class="experience">
    <div class="experience-container">
      <header class="section-header">
        <h2 class="section-title">Experience</h2>
      </header>
      <div class="experience-columns">
        <div class="experience-col">
          <h3 class="section-subtitle">Professional experiences</h3>
          <div class="experience-cards-list">
            <div
              v-for="exp in experiences"
              :key="exp.id"
              class="experience-card"
              tabindex="0"
              :aria-label="exp.title + (exp.company ? ' at ' + exp.company : '') + ', ' + exp.date + ', ' + exp.location">
              <div class="experience-card-main">
                <header class="experience-card-header">
                  <div class="exp-title-group">
                    <span class="exp-title">{{ exp.title }}</span>
                    <span v-if="exp.company || exp.date" class="exp-company-row">
                      <span v-if="exp.company" class="exp-company-below">{{ exp.company }}</span>
                      <span v-if="exp.company && exp.date" class="exp-separator">&nbsp;•&nbsp;</span>
                      <span v-if="exp.date" class="exp-meta">{{ exp.date }}</span>
                    </span>
                  </div>
                </header>
                <div class="description">{{ exp.description }}</div>
                <div v-if="exp.tech" class="tech-showcase">
                  <span v-for="t in exp.tech" :key="t" class="tech-item">{{ t }}</span>
                </div>
                <span v-if="exp.location" class="exp-location">{{ exp.location }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="experience-col">
          <h3 class="section-subtitle">Personal Projects</h3>
          <div class="projects-cards-list">
            <div v-for="project in projects" :key="project.title" class="project-card" tabindex="0" :aria-label="'Project: ' + project.title">
              <div class="experience-card-main">
                <div class="project-header-row">
                  <img v-if="project.image" :src="project.image" :alt="project.title || 'Project image'" class="project-image" />
                  <h3 class="project-title">{{ project.title }}</h3>
                </div>
                <div class="description">{{ project.description }}</div>
                <div v-if="project.tech" class="tech-showcase">
                  <span v-for="t in project.tech" :key="t" class="tech-item">{{ t }}</span>
                </div>
                <div v-if="project.demo || project.repo" class="project-links-row">
                  <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="project-link-btn">Live Demo</a>
                  <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" class="project-link-btn">Source Code</a>
                </div>
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
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          id: 'student_data_assistant',
          title: 'Student Data Assistant',
          company: 'Capital University',
          date: '2025 - Present',
          location: 'Bexley, Ohio',
          description: "Support Capital University's admissions office with data cleaning and consolidation to ensure student information is accurate and up-to-date.",
          tech: ['Data Cleaning', 'Data consolidation']
        },
        {
          id: 'student_ambassador',
          title: 'Student Ambassador Leadership Program',
          company: 'Columbus State Community College',
          date: '2022 - 2024',
          location: 'Columbus, Ohio',
          description: 'Act as a student ambassador, representing the student body and providing feedback to administration. Involved in organizing events and workshops.',
          tech: ['Leadership', 'Communication', 'Teamwork', 'Time Management']
        }
      ],
      projects: [
        {
          title: 'Administration Discord Bot',
          description: 'A Discord bot for server management and moderation, built with Python using the discord.py library.',
          image: '',
          demo: '',
          repo: '',
          tech: ['Python', 'discord.py', 'GitHub Version Control']
          
        },
        {
          title: 'Personal Website (Portfolio)',
          description: 'Modern yet simplistic portfolio website.',
          image: '',
          demo: '',
          repo: '',
          tech: ['Vue.js', 'Vite', 'CSS', 'Claude Sonnet 4.0']
        },
      ]
    }
  },
}
</script>

<style scoped>
.experience {
  padding: var(--space-20) var(--space-6);
  background: var(--color-background);
}

.experience-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0;
}

.experience-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
}

.experience-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.section-subtitle {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-8);
}

.experience-cards-list,
.projects-cards-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.experience-card,
.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  outline: none;
}

.experience-card:hover,
.experience-card:focus,
.project-card:hover,
.project-card:focus {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.experience-card-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.exp-title,
.project-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.exp-company-row {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-1);
  font-size: var(--text-sm);
}

.exp-company-below,
.exp-meta {
  color: var(--color-text-secondary);
}

.exp-separator {
  color: var(--color-text-secondary);
  opacity: 0.7;
}

.description {
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

.tech-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tech-item {
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 500;
  border: 1px solid var(--color-primary);
}

.exp-location {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-style: italic;
  margin-top: var(--space-2);
}

.project-header-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.project-image {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  object-fit: cover;
}

.project-links-row {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.project-link-btn {
  background: var(--color-primary);
  color: white;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 600;
  transition: all 0.2s ease;
  border: 2px solid var(--color-primary);
}

.project-link-btn:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  transform: translateY(-1px);
}

.project-link-btn:nth-child(2) {
  background: transparent;
  color: var(--color-primary);
}

.project-link-btn:nth-child(2):hover {
  background: var(--color-primary);
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience {
    padding: var(--space-16) var(--space-4);
  }

  .experience-columns {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

@media (max-width: 480px) {
  .experience {
    padding: var(--space-12) var(--space-2);
  }

  .experience-card,
  .project-card {
    padding: var(--space-4);
  }

  .project-links-row {
    flex-direction: column;
    gap: var(--space-2);
  }

  .project-link-btn {
    text-align: center;
  }
}
</style>
