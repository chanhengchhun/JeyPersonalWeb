<template>
  <section id="experience" class="experience">
    <div class="experience-container">
      <div class="section-header">
        <h2 class="section-title">Professional Experience</h2>
        <p class="section-subtitle">A visual journey through my career milestones and achievements</p>
      </div>
      <div class="vertical-timeline-wrapper">
        <div class="vertical-timeline">
          <div
            v-for="(item, idx) in experiences"
            :key="item.id"
            class="vertical-timeline-step"
          >
            <div class="vertical-timeline-dot" :class="{ current: idx === 0 }"></div>
            <div class="vertical-timeline-content">
              <div class="timeline-label">
                <span class="job-title">{{ item.title }}</span>
                <span v-if="item.company" class="company">@ {{ item.company }}</span>
              </div>
              <span v-if="item.date" class="date-range">{{ item.date }}</span>
              <div v-if="item.location" class="location">{{ item.location }}</div>
              <div v-if="item.description" class="description">{{ item.description }}</div>
              <div v-if="item.highlights" class="highlights">
                <div class="highlight-item" v-for="h in item.highlights" :key="h.label">
                  <span class="metric">{{ h.metric }}</span>
                  <span class="label">{{ h.label }}</span>
                </div>
              </div>
              <div v-if="item.achievements" class="achievement-tags">
                <span class="tag" v-for="a in item.achievements" :key="a">{{ a }}</span>
              </div>
              <div v-if="item.tech" class="tech-showcase">
                <span class="tech-item" v-for="t in item.tech" :key="t">{{ t }}</span>
              </div>
              <div v-if="item.skills" class="skills-list">
                <div class="skill-item" v-for="s in item.skills" :key="s.name">
                  <span class="skill-name">{{ s.name }}</span>
                  <div class="skill-bar">
                    <div class="skill-level" :style="{ width: s.level + '%' }"></div>
                  </div>
                </div>
              </div>
              <div v-if="item.stats" class="journey-stats">
                <div class="stat-item" v-for="stat in item.stats" :key="stat.label">
                  <span class="stat-number">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
              <div v-if="item.quote" class="quote-content">
                <blockquote>{{ item.quote }}</blockquote>
                <div class="quote-author">- {{ item.author }}</div>
              </div>
            </div>
            <div v-if="idx !== experiences.length - 1" class="vertical-timeline-connector"></div>
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
          id: 'current',
          title: 'Freelance Web Developer',
          company: 'Self-Employed',
          date: '2024 - Present',
          location: '📍 Remote / Columbus, Ohio',
          description: 'Developing custom web solutions for local businesses and startups. Specializing in responsive design and modern frameworks.',
          highlights: [
            { metric: '8+', label: 'Projects' },
            { metric: '5⭐', label: 'Reviews' },
            { metric: '100%', label: 'Success' }
          ],
          tech: ['Vue.js', 'React', 'Node.js', 'MongoDB']
        },
        {
          id: 'student',
          title: 'Student Developer',
          company: 'Columbus State',
          date: '2023 - 2024',
          location: '📍 Columbus, Ohio',
          description: 'Led development of student portal features and mentored junior students.',
          achievements: ['👥 Leadership', '🎓 Mentoring', '📚 Excellence'],
          tech: ['JavaScript', 'Python', 'Git']
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
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
  background: linear-gradient(135deg, 
    rgba(155, 89, 182, 1) 0%,
    rgba(142, 68, 173, 1) 25%,
    rgba(118, 75, 162, 1) 50%,
    rgba(102, 126, 234, 1) 75%,
    rgba(155, 89, 182, 1) 100%);
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

/* Pinterest-style Grid */
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
.highlights {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.2rem;
}
.highlight-item {
  text-align: center;
  flex: 1;
  background: rgba(155, 89, 182, 0.05);
  padding: 0.8rem;
  border-radius: 15px;
  border: 1px solid rgba(155, 89, 182, 0.1);
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
.achievement-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.tag {
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(155, 89, 182, 0.1);
  color: rgba(155, 89, 182, 0.9);
  border: 1px solid rgba(155, 89, 182, 0.15);
  transition: all 0.3s ease;
}
.tag:hover {
  background: rgba(155, 89, 182, 0.15);
  transform: translateY(-1px);
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
@media (max-width: 900px) {
  .vertical-timeline {
    max-width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .vertical-timeline-dot {
    margin-right: 1rem;
  }
  .vertical-timeline-content {
    padding: 1rem 0.7rem;
  }
}
@media (max-width: 600px) {
  .vertical-timeline {
    padding-left: 0;
    padding-right: 0;
  }
  .vertical-timeline-dot {
    width: 40px;
    height: 40px;
    margin-right: 0.7rem;
  }
  .vertical-timeline-content {
    padding: 0.7rem 0.5rem;
  }
}
.date-range {
  color: rgba(155, 89, 182, 0.8);
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.job-title {
  color: #333;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
}
.company {
  color: rgba(155, 89, 182, 1);
  font-size: 1rem;
  font-weight: 600;
}
.location {
  color: #888;
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 0.7rem;
  opacity: 0.8;
}
.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 1rem;
}
.highlights {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.2rem;
}
.highlight-item {
  text-align: center;
  flex: 1;
  background: rgba(155, 89, 182, 0.05);
  padding: 0.8rem;
  border-radius: 15px;
  border: 1px solid rgba(155, 89, 182, 0.1);
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
.achievement-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.tag {
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(155, 89, 182, 0.1);
  color: rgba(155, 89, 182, 0.9);
  border: 1px solid rgba(155, 89, 182, 0.15);
  transition: all 0.3s ease;
}
.tag:hover {
  background: rgba(155, 89, 182, 0.15);
  transform: translateY(-1px);
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
/* Accordion transition */
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s;
}
.accordion-enter, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to, .accordion-leave {
  max-height: 500px;
  opacity: 1;
}
@media (max-width: 900px) {
  .accordion-header, .accordion-panel {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .accordion-group {
    gap: 1rem;
  }
}
@media (max-width: 480px) {
  .experience {
    padding: 80px 10px 40px 10px;
  }
  .accordion-header {
    padding: 1rem 0.5rem;
    font-size: 1rem;
  }
  .accordion-panel {
    padding: 0 0.5rem 1rem 0.5rem;
  }
}
</style>
