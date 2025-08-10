<template>
  <section id="experience" class="experience glass-bg-section">
    <div class="experience-container">
      <header class="section-header">
        <h2 class="section-title">Experience</h2>
      </header>
      <div class="experience-columns modern-columns fade-in-up">
        <div class="section-block experience-col left-col fade-in-up">
          <h3 class="section-subtitle">Professional experiences</h3>
          <div class="experience-cards-list">
            <div
              v-for="exp in experiences"
              :key="exp.id"
              class="experience-card glass-card improved-card"
              tabindex="0"
              :aria-label="exp.title + (exp.company ? ' at ' + exp.company : '') + ', ' + exp.date + ', ' + exp.location">
              <div class="accent-bar" aria-hidden="true"></div>
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
                <div class="exp-desc-bg">
                  <div class="description">{{ exp.description }}</div>
                </div>
                <div v-if="exp.tech" class="tech-showcase improved-tech">
                  <span v-for="t in exp.tech" :key="t" class="tech-item improved-tech-item">{{ t }}</span>
                </div>
                <span v-if="exp.location" class="exp-location">{{ exp.location }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-block experience-col right-col fade-in-up">
          <h3 class="section-subtitle"><span class="icon"></span> Personal Projects</h3>
          <div class="projects-cards-list">
            <div v-for="project in projects" :key="project.title" class="project-card fade-in-card glass-card improved-card" tabindex="0" :aria-label="'Project: ' + project.title">
              <div class="accent-bar project-accent" aria-hidden="true"></div>
              <div class="experience-card-main">
                <div class="project-header-row">
                  <img v-if="project.image" :src="project.image" :alt="project.title || 'Project image'" class="project-image" />
                  <h3 class="project-title improved-project-title project-title-project">{{ project.title }}</h3>
                </div>
                <div class="project-desc-bg">
                  <div class="description project-description">{{ project.description }}</div>
                </div>
                <div v-if="project.tech" class="tech-showcase improved-tech">
                  <span v-for="t in project.tech" :key="t" class="tech-item improved-tech-item">{{ t }}</span>
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
        /*
        {
          id: 'current',
          title: 'Freelance Web Developer',
          company: 'Columbus State Community College',
          date: '2024 - Present',
          location: 'Columbus, Ohio',
          description: 'Developing custom web solutions for local businesses and startups. Specializing in responsive design and modern frameworks.',
          tech: ['Vue.js', 'React', 'Node.js', 'MongoDB']
        },
        */
        {
          id: 'student',
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
          description: 'A modern, glass-morphism portfolio website built with Vue 3 and Vite.',
          image: '',
          demo: '',
          repo: '',
          tech: ['Vue.js', 'Vite', 'CSS']
        },
      ]
    }
  },
}
</script>

<style scoped>
/* Cleaned: removed unused accordion, hero, and timeline styles */
/* Fade-in up animation for columns */
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 1.1s cubic-bezier(0.4,0,0.2,1) forwards;
}
.fade-in-up:nth-child(1) { animation-delay: 0.1s; }
.fade-in-up:nth-child(2) { animation-delay: 0.2s; }
.fade-in-up:nth-child(3) { animation-delay: 0.3s; }
/* Stacked experience cards (no timeline line) */
.experience-cards-list {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}

.glass-bg-section {
  background: rgba(255,255,255,0.72);
  box-shadow: 0 8px 48px 0 rgba(118,75,162,0.10), 0 2px 12px rgba(155,89,182,0.10);
  border-radius: 32px;
  backdrop-filter: blur(20px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  border: 1.5px solid rgba(155, 89, 182, 0.13);
  margin: 3.5rem auto 3.5rem auto;
  padding: 2.5rem 0 2.5rem 0;
  max-width: 1300px;
  position: relative;
  z-index: 2;
}

.experience-card.glass-card.improved-card {
  position: relative;
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(18px) saturate(1.4);
  -webkit-backdrop-filter: blur(18px) saturate(1.4);
  border-radius: 20px;
  border: 1.5px solid rgba(155, 89, 182, 0.18);
  box-shadow: 0 8px 32px rgba(155, 89, 182, 0.18), 0 2px 8px rgba(102,126,234,0.10);
  padding: 0;
  display: flex;
  min-height: 170px;
  overflow: hidden;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  outline: none;
}
.experience-card.glass-card.improved-card:hover, .experience-card.glass-card.improved-card:focus-within {
  box-shadow: 0 16px 40px rgba(155, 89, 182, 0.18), 0 4px 16px rgba(155, 89, 182, 0.13);
  border: 2.5px solid #764ba2;
  transform: scale(1.025);
}
.experience-card .accent-bar {
  width: 7px;
  background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  border-radius: 0 12px 12px 0;
  margin-right: 0.9rem;
  min-height: 100%;
  box-shadow: 0 0 12px 0 rgba(155, 89, 182, 0.10);
}

.experience-card-main {
  flex: 1 1 0;
  padding: 1.5rem 1.3rem 1.2rem 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.exp-company-row {
  display: flex;
  align-items: center;
  gap: 0.2em;
  margin-top: 0.1em;
  font-size: 1.01rem;
}
.exp-separator {
  color: #b7a7d9;
  font-size: 1.1em;
  opacity: 0.7;
}

.exp-meta {
  color: #a49bc2;
  font-size: 0.97em;
  font-weight: 500;
  margin: 0;
  opacity: 0.85;
}

.exp-company-below {
  color: #764ba2;
  font-weight: 500;
  opacity: 0.7;
  margin: 0;
}
.exp-meta {
  color: #7a6fa2;
  font-size: 0.98rem;
  font-weight: 500;
  margin: 0;
}

/* Project Card Main: visually distinct but similar */
.projects-cards-list {
  display: flex;
  flex-direction: column;
  gap: 2.2rem; /* Match experience-cards-list or adjust as needed */
}

.project-accent {
  width: 7px;
  background: linear-gradient(180deg, #ffad2a 0%);
  border-radius: 0 12px 12px 0;
  margin-right: 0.9rem;
  min-height: 100%;
  box-shadow: 0 0 12px 0 rgba(102, 126, 234, 0.10);
}

.project-card.improved-card {
  position: relative;
  background: rgba(255,255,255,0.48);
  backdrop-filter: blur(15px) saturate(1.25);
  -webkit-backdrop-filter: blur(15px) saturate(1.25);
  border-radius: 20px;
  border: 1.5px solid rgba(102, 126, 234, 0.18);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15), 0 2px 8px rgba(142, 68, 173, 0.10);
  padding: 0;
  display: flex;
  min-height: 170px;
  overflow: hidden;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  outline: none;
}

.project-card.improved-card:hover,
.project-card.improved-card:focus-within {
  box-shadow: 0 16px 40px rgba(102, 126, 234, 0.18), 0 4px 16px rgba(142, 68, 173, 0.13);
  border: 2.5px solid #667eea;
  transform: scale(1.025);
}

.project-card-main:hover,
.project-card-main:focus-within {
  background: rgba(255,255,255,0.38);
  border: 2px solid #764ba2;
  box-shadow:
    0 8px 28px rgba(142, 68, 173, 0.15),
    0 2px 8px rgba(102,126,234,0.10),
    0 1px 0 rgba(255,255,255,0.15) inset;
}

.project-title-project {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  background: linear-gradient(90deg, #764ba2 0%, #6f66ea 100%);
  -webkit-background-clip: text;
  background-clip: text; /* Standard property for compatibility */
  -webkit-text-fill-color: transparent;
  color: transparent; /* Standard property for compatibility */
}

.project-desc-bg {
  background: rgba(102, 126, 234, 0.07);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin-bottom: 0.2rem;
}
.project-description {
  color: #3d2c5a;
  font-size: 1.01rem;
  line-height: 1.6;
  font-weight: 500;
}
.project-links-row {
  display: flex;
  gap: 0.7rem;
  margin-top: 0.2rem;
}
.project-link-btn {
  padding: 0.38rem 1.1rem;
  border-radius: 10px;
  font-size: 0.93rem;
  font-weight: 600;
  background: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
  color: #764ba2;
  border: none;
  box-shadow: 0 1px 4px rgba(155, 89, 182, 0.07);
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
  outline: none;
}
.project-link-btn:hover, .project-link-btn:focus {
  background: linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%);
  color: #fff;
}

.experience-card-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.1rem;
}
.experience-icon {
  font-size: 1.7rem;
  color: #764ba2;
  opacity: 0.85;
}
/* Title group: stack company below title */
.exp-title-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.18rem;
}

.exp-location {
  display: block;
  color: #888;
  font-size: 0.97rem;
  font-style: italic;
  margin-top: 0.1em;
  opacity: 0.8;
}
.exp-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: #2d1e4a;
  letter-spacing: 0.01em;
}
.exp-company-below {
  font-size: 1.01rem;
  color: #764ba2;
  font-weight: 500;
  opacity: 0.7;
  margin-top: 0.05em;
  margin-left: 0.5px;
}
.exp-meta-row {
  display: flex;
  gap: 1.2rem;
  font-size: 0.98rem;
  color: #7a6fa2;
  margin-bottom: 0.1rem;
  align-items: center;
}
.exp-meta {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 500;
}
.meta-icon {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-right: 0.1rem;
}
.exp-desc-bg {
  background: rgba(155, 89, 182, 0.06);
  border-radius: 12px;
  padding: 0.9rem 1rem 0.9rem 1rem;
  margin: 0.1rem 0 0.2rem 0;
}
.description {
  color: #3d2c5a;
  font-size: 1.01rem;
  line-height: 1.6;
  font-weight: 500;
}

.improved-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.1rem;
}
.improved-tech-item {
  background: rgba(118, 75, 162, 0.09);
  color: #764ba2;
  font-weight: 500;
  border-radius: 10px;
  padding: 0.32rem 0.85rem;
  font-size: 0.87rem;
  border: 1px solid rgba(155, 89, 182, 0.13);
  box-shadow: 0 1px 4px rgba(155, 89, 182, 0.05);
  transition: background 0.2s, color 0.2s;
}
.improved-tech-item:hover {
  background: #764ba2;
  color: #fff;
}
@media (max-width: 600px) {
  .experience-card.glass-card.improved-card {
    flex-direction: column;
    min-height: unset;
  }
  .experience-card-main {
    padding: 1.1rem 0.7rem 1.1rem 0.7rem;
  }
}
/* Experience card header */
.experience-card-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.5rem;
}
.experience-icon {
  font-size: 1.5rem;
}
/* Centered, alternating timeline styles */
.experience {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    rgba(155, 89, 182, 0.03) 0%,
    rgba(142, 68, 173, 0.05) 25%,
    rgba(118, 75, 162, 0.03) 50%,
    rgba(102, 126, 234, 0.05) 75%,
    rgba(240, 147, 251, 0.03) 100%);
  position: relative;
  padding: 120px 20px 80px 20px;
  overflow: hidden;
}

.experience::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(155, 89, 182, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(102, 126, 234, 0.04) 0%, transparent 50%);
  z-index: 1;
}

.experience-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 1s ease-out;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  display: inline-block;
  font-size: 1.08rem;
  font-weight: 700;
  color: #6d5a8d;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: none;
  border: none;
  box-shadow: none;
  margin-bottom: 1.7rem;
  position: relative;
  padding: 0 0 0.2em 0;
  transition: color 0.2s;
}

.section-subtitle::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -0.2em;
  width: 2.5em;
  height: 2.5px;
  background: linear-gradient(90deg, #764ba2 0%, #667eea 100%);
  border-radius: 2px;
  opacity: 0.7;
  animation: gradientShift 4s linear infinite;
}



@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Vertical Timeline Layout */
.vertical-timeline-wrapper {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}
.vertical-timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}
.vertical-timeline-step {
  display: flex;
  align-items: flex-start;
  position: relative;
  min-height: 120px;
}
.vertical-timeline-dot {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  border: 3px solid rgba(155, 89, 182, 0.18);
  box-shadow: 0 4px 16px rgba(155, 89, 182, 0.08), 0 1px 4px rgba(155, 89, 182, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-right: 2rem;
  transition: border 0.3s, box-shadow 0.3s;
}
.vertical-timeline-dot.current {
  border: 3.5px solid #764ba2;
  box-shadow: 0 8px 32px rgba(155, 89, 182, 0.18), 0 2px 8px rgba(155, 89, 182, 0.10);
}
.dot-icon {
  font-size: 2rem;
}
.vertical-timeline-connector {
  position: absolute;
  left: 26px;
  top: 54px;
  width: 4px;
  height: calc(100% - 54px);
  background: linear-gradient(180deg, #667eea, #764ba2);
  z-index: 1;
}
.vertical-timeline-content {
  flex: 1 1 0;
  min-width: 320px;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 6px 24px rgba(155, 89, 182, 0.08), 0 2px 8px rgba(155, 89, 182, 0.05), inset 0 1px 0 rgba(255,255,255,0.2);
  border: 1px solid rgba(155, 89, 182, 0.13);
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.vertical-timeline-dot.current + .vertical-timeline-content {
  border: 2px solid #764ba2;
  box-shadow: 0 12px 36px rgba(155, 89, 182, 0.18), 0 4px 16px rgba(155, 89, 182, 0.10);
  transform: scale(1.04);
}
.timeline-label {
  font-size: 1.05rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.2rem;
}
.date-range {
  color: rgba(155, 89, 182, 0.8);
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.vertical-timeline-content .location {
  color: #888;
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 0.7rem;
  opacity: 0.8;
}
.vertical-timeline-content .description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 1rem;
}

.metric {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: rgba(155, 89, 182, 1);
  margin-bottom: 0.2rem;
}
.label {
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
}

.tech-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}
.tech-item {
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(155, 89, 182, 0.08);
  color: #764ba2;
  border: 1px solid rgba(155, 89, 182, 0.13);
  transition: all 0.3s ease;
}
.tech-item:hover {
  transform: translateY(-2px) scale(1.05);
}
.skills-list {
  padding: 0.5rem 0 1rem 0;
}
.skill-item {
  margin-bottom: 1rem;
}
.skill-name {
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.3rem;
}
.skill-bar {
  height: 8px;
  background: #e9ecef;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.skill-level {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 5px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.journey-stats {
  padding: 0.5rem 0 1rem 0;
  display: flex;
  gap: 1.2rem;
}
.stat-item {
  text-align: center;
  flex: 1;
}
.stat-number {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: #e67e22;
  margin-bottom: 0.2rem;
}
.stat-label {
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
}
.quote-content {
  padding: 0.5rem 0 0 0;
  text-align: center;
}
blockquote {
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin: 1rem 0;
  position: relative;
}
.quote-author {
  font-size: 0.9rem;
  color: rgba(155, 89, 182, 1);
  font-weight: 600;
  margin-top: 1rem;
}
.experience-columns {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
}
.experience-col {
  flex: 1 1 350px;
  min-width: 320px;
}
@media (max-width: 900px) {
/* ...existing code... */
  align-items: stretch;
}
.timeline-header {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.2rem;
}
.right-col .projects-bg {
  background: linear-gradient(135deg, rgba(155,89,182,0.07) 0%, rgba(102,126,234,0.06) 100%);
  border-radius: 18px;
  padding: 1.2rem 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 12px rgba(155, 89, 182, 0.06);
}
@media (max-width: 900px) {
  .experience-columns.redesigned {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .section-block {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
  }
  .column-divider {
    display: none !important;
  }
  .timeline-entry {
    flex-direction: column;
    align-items: stretch;
  }
  .timeline-dot {
    margin: 0 auto 0.7rem auto;
  }
  .timeline-card {
    margin-left: 0; 
  }
}
</style
