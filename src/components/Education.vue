<template>
  <section id="education" class="education">
    <div class="education-container">
      <div class="section-header">
        <h2 class="section-title">Educational Journey</h2>
        <p class="section-subtitle">Building knowledge through academic excellence and continuous learning</p>
      </div>
      
      <div class="education-timeline">
        <div class="education-item" data-aos="fade-up" data-aos-delay="100">
          <div class="education-date">
            <div class="date-bubble">
              <span class="year">2022 - 2025</span>
              <span class="duration">3 Years</span>
            </div>
          </div>
          <div class="education-content">
            <div class="education-icon">🎓</div>
            <h3 class="degree-title">Associate of Science</h3>
            <h4 class="degree-field">Computer and Information Science</h4>
            <h5 class="institution">Columbus State Community College</h5>
            <p class="education-location">📍 Columbus, Ohio</p>
            <p class="education-description">
              Comprehensive program covering fundamental computer science concepts, programming languages, 
              and practical application development. Gained strong foundation in problem-solving, 
              software design principles, and collaborative project development.
            </p>
            <div class="education-achievements">
              <span class="achievement">🏆 Dean's List</span>
              <span class="achievement">👨‍💼 Web Development Club President</span>
              <span class="achievement">💻 Full-Stack Projects</span>
            </div>
            <div class="skills-learned">
              <h6>Key Skills Acquired:</h6>
              <div class="skills-tags">
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Database Design</span>
                <span class="skill-tag">Web Development</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="education-item" data-aos="fade-up" data-aos-delay="200">
          <div class="education-date">
            <div class="date-bubble future">
              <span class="year">2025 - 2027</span>
              <span class="duration">2 Years</span>
            </div>
          </div>
          <div class="education-content future">
            <div class="education-icon">🚀</div>
            <h3 class="degree-title">Bachelor of Arts</h3>
            <h4 class="degree-field">Computer Science</h4>
            <h5 class="institution">Capital University</h5>
            <p class="education-location">📍 Bexley, Ohio</p>
            <p class="education-description">
              Advanced computer science program emphasizing software engineering, advanced algorithms, 
              and modern development frameworks. Focus on full-stack development, system design, 
              and industry best practices for scalable applications.
            </p>
            <div class="education-achievements">
              <span class="achievement future">🎯 Target: Top 10% Graduate</span>
              <span class="achievement future">🏅 Goal: Best Project Award</span>
              <span class="achievement future">🌟 Advanced Algorithms</span>
            </div>
            <div class="skills-learned">
              <h6>Expected Skills:</h6>
              <div class="skills-tags">
                <span class="skill-tag">Advanced Algorithms</span>
                <span class="skill-tag">System Design</span>
                <span class="skill-tag">Machine Learning</span>
                <span class="skill-tag">Software Architecture</span>
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
  name: 'Education'
}
</script>

<style scoped>
.education {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.03) 0%,
    rgba(118, 75, 162, 0.05) 25%,
    rgba(240, 147, 251, 0.03) 50%,
    rgba(42, 157, 143, 0.05) 75%,
    rgba(38, 70, 83, 0.03) 100%);
  position: relative;
  padding: 120px 20px 80px 20px;
  overflow: hidden;
}

.education::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(240, 147, 251, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(42, 157, 143, 0.04) 0%, transparent 50%);
  z-index: 1;
}

.education::after {
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

.education-container {
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
    rgba(102, 126, 234, 1) 0%,
    rgba(118, 75, 162, 1) 25%,
    rgba(240, 147, 251, 1) 50%,
    rgba(42, 157, 143, 1) 75%,
    rgba(102, 126, 234, 1) 100%);
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

.education-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, 
    rgba(102, 126, 234, 0.8) 0%,
    rgba(118, 75, 162, 0.8) 50%,
    rgba(240, 147, 251, 0.8) 100%);
  transform: translateX(-50%);
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
}

.education-item {
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  animation: fadeInScale 0.8s ease-out;
}

.education-item:nth-child(odd) {
  flex-direction: row;
}

.education-item:nth-child(even) {
  flex-direction: row-reverse;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.education-date {
  flex: 0 0 160px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 3;
}

.date-bubble {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(25px) saturate(1.2);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 25px;
  padding: 1.2rem 1.5rem;
  text-align: center;
  position: relative;
  box-shadow: 
    0 15px 35px rgba(102, 126, 234, 0.15),
    0 8px 20px rgba(102, 126, 234, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.date-bubble:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 
    0 25px 50px rgba(102, 126, 234, 0.2),
    0 12px 30px rgba(102, 126, 234, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  border-color: rgba(102, 126, 234, 0.5);
}

.date-bubble.future {
  background: rgba(240, 147, 251, 0.15);
  border-color: rgba(240, 147, 251, 0.4);
}

.date-bubble.future:hover {
  border-color: rgba(240, 147, 251, 0.6);
  box-shadow: 
    0 25px 50px rgba(240, 147, 251, 0.2),
    0 12px 30px rgba(240, 147, 251, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.year {
  display: block;
  font-weight: 700;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.3rem;
}

.duration {
  display: block;
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
}

.date-bubble::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1));
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: 
    0 0 0 4px rgba(255, 255, 255, 1),
    0 0 0 6px rgba(102, 126, 234, 0.3),
    0 4px 12px rgba(102, 126, 234, 0.3);
}

.education-item:nth-child(odd) .date-bubble::after {
  right: -32px;
}

.education-item:nth-child(even) .date-bubble::after {
  left: -32px;
}

.date-bubble.future::after {
  background: linear-gradient(135deg, rgba(240, 147, 251, 1), rgba(118, 75, 162, 1));
  box-shadow: 
    0 0 0 4px rgba(255, 255, 255, 1),
    0 0 0 6px rgba(240, 147, 251, 0.3),
    0 4px 12px rgba(240, 147, 251, 0.3);
}

.education-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(25px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 2.5rem;
  margin: 0 2.5rem;
  position: relative;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 10px 25px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.education-content:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.12),
    0 15px 35px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.3);
}

.education-content.future {
  background: rgba(240, 147, 251, 0.08);
  border-color: rgba(240, 147, 251, 0.2);
}

.education-content.future:hover {
  background: rgba(240, 147, 251, 0.12);
  border-color: rgba(240, 147, 251, 0.3);
}

.education-content::before {
  content: '';
  position: absolute;
  top: 50px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
}

.education-item:nth-child(odd) .education-content::before {
  left: -30px;
  border-right-color: rgba(255, 255, 255, 0.95);
}

.education-item:nth-child(even) .education-content::before {
  right: -30px;
  border-left-color: rgba(255, 255, 255, 0.95);
}

.education-content.future::before {
  border-right-color: rgba(240, 147, 251, 0.08);
  border-left-color: rgba(240, 147, 251, 0.08);
}

.education-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.degree-title {
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.degree-field {
  color: rgba(102, 126, 234, 1);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.institution {
  color: #666;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.education-location {
  color: #888;
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.education-description {
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.education-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.achievement {
  background: rgba(102, 126, 234, 0.1);
  color: rgba(102, 126, 234, 0.9);
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
}

.achievement:hover {
  background: rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.achievement.future {
  background: rgba(240, 147, 251, 0.1);
  color: rgba(240, 147, 251, 0.9);
  border-color: rgba(240, 147, 251, 0.2);
}

.achievement.future:hover {
  background: rgba(240, 147, 251, 0.15);
  box-shadow: 0 4px 12px rgba(240, 147, 251, 0.2);
}

.skills-learned {
  margin-top: 1.5rem;
}

.skills-learned h6 {
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-tag {
  background: rgba(42, 157, 143, 0.1);
  color: rgba(42, 157, 143, 0.9);
  padding: 0.4rem 1rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(42, 157, 143, 0.2);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(42, 157, 143, 0.15);
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(42, 157, 143, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .education-timeline {
    max-width: 800px;
  }
  
  .education-content {
    margin: 0 2rem;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .education {
    padding: 100px 15px 60px 15px;
  }
  
  .education-timeline::before {
    left: 30px;
    width: 3px;
  }
  
  .education-item {
    flex-direction: column !important;
    align-items: flex-start;
    margin-left: 60px;
    margin-bottom: 3rem;
  }
  
  .education-item:nth-child(even) {
    flex-direction: column !important;
  }
  
  .education-date {
    margin-bottom: 1.5rem;
    flex: none;
  }
  
  .date-bubble::after {
    left: -54px !important;
    right: auto !important;
  }
  
  .education-content {
    margin: 0;
    width: 100%;
    padding: 2rem 1.5rem;
  }
  
  .education-content::before {
    display: none;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .education-achievements {
    gap: 0.6rem;
  }
  
  .achievement {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
  
  .skills-tags {
    gap: 0.5rem;
  }
  
  .skill-tag {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .education {
    padding: 80px 10px 40px 10px;
  }
  
  .education-item {
    margin-left: 40px;
  }
  
  .date-bubble::after {
    left: -34px !important;
  }
  
  .education-content {
    padding: 1.5rem 1rem;
    border-radius: 20px;
  }
  
  .date-bubble {
    padding: 1rem 1.2rem;
    border-radius: 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .degree-title {
    font-size: 1.3rem;
  }
  
  .degree-field {
    font-size: 1.1rem;
  }
  
  .education-description {
    font-size: 0.95rem;
  }
}
</style>
