<template>
  <section id="education" class="education">
    <div class="container">
      <h2>Education</h2>
      <div class="education-timeline">

        <div class="education-item">
          <div class="education-date">
            <span>2020 - 2025</span>
          </div>
          <div class="education-content">
            <h3>AS in Computer and Information Science</h3>
            <h4>Columbus State Community College</h4>
            <p class="education-location">Columbus, Ohio</p>
            <p>Comprehensive program covering fundamental computer science concepts, programming languages, 
               and practical application development. Gained strong foundation in problem-solving, 
               software design principles, and collaborative project development.</p>
            <div class="education-achievements">
              <span class="achievement">Dean's List</span>
              <span class="achievement">Web Development Club President</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-date">
            <span>2025 - 2027</span>
          </div>
          <div class="education-content">
            <h3>BA in Computer Science</h3>
            <h4>Capital University</h4>
            <p class="education-location">Bexley, Ohio</p>
            <p>Advanced computer science program emphasizing software engineering, advanced algorithms, 
               and modern development frameworks. Focus on full-stack development, system design, 
               and industry best practices for scalable applications.</p>
            <div class="education-achievements">
              <span class="achievement">Top 10% Graduate</span>
              <span class="achievement">Best Project Award</span>
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
  padding: 80px 20px;
  background: #f8f9fa;
  width: 100%;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.education h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.education-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #667eea;
  transform: translateX(-50%);
}

.education-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
}

.education-item:nth-child(odd) {
  flex-direction: row;
}

.education-item:nth-child(even) {
  flex-direction: row-reverse;
}

.education-date {
  flex: 0 0 120px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.education-date span {
  background: #667eea;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-block;
}

.education-date::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  transform: translateY(-50%);
}

.education-item:nth-child(odd) .education-date::after {
  right: -6px;
}

.education-item:nth-child(even) .education-date::after {
  left: -6px;
}

.education-content {
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;
  position: relative;
}

.education-content::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
}

.education-item:nth-child(odd) .education-content::before {
  left: -20px;
  border-right-color: white;
}

.education-item:nth-child(even) .education-content::before {
  right: -20px;
  border-left-color: white;
}

.education-content h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.education-content h4 {
  color: #667eea;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.education-location {
  color: #888;
  font-size: 0.95rem;
  font-style: italic;
  margin-bottom: 1rem !important;
}

.education-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.education-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.achievement {
  background: #e8f0fe;
  color: #667eea;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .education {
    padding: 60px 15px;
  }
  
  .education-timeline::before {
    left: 30px;
  }
  
  .education-item {
    flex-direction: column !important;
    align-items: flex-start;
    margin-left: 60px;
  }
  
  .education-item:nth-child(even) {
    flex-direction: column !important;
  }
  
  .education-date {
    margin-bottom: 1rem;
  }
  
  .education-date::after {
    left: -54px !important;
  }
  
  .education-content {
    margin: 0;
    width: 100%;
  }
  
  .education-content::before {
    display: none;
  }
  
  .education h2 {
    font-size: 2rem;
  }
}
</style>
