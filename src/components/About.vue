<template>
  <section id="about" class="about">
    <div class="container">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Hello! I'm Chanheng, a passionate web developer with a love for creating 
            digital experiences that are both beautiful and functional. I enjoy 
            working with modern technologies and constantly learning new skills.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open source projects, or enjoying a good cup of coffee 
            while planning my next project.
          </p>
          <div class="about-stats">
            <div class="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div class="stat">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="placeholder-image">
            <p>Your Photo Here</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
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

.about h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #666;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 2rem;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat p {
  color: #666;
  font-weight: 500;
}

.about-image {
  display: flex;
  justify-content: center;
}

.placeholder-image {
  width: 300px;
  height: 300px;
  background: #e9ecef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-weight: 500;
}

@media (max-width: 768px) {
  .about {
    padding: 60px 15px;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .about-stats {
    justify-content: center;
    gap: 1.5rem;
  }
  
  .placeholder-image {
    width: 200px;
    height: 200px;
  }
  
  .about h2 {
    font-size: 2rem;
  }
}
</style>
