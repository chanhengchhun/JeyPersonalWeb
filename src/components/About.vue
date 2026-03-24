<template>
  <section id="about" class="about">
    <!-- section-divider removed for seamless scroll -->
    <div class="container">
      <div class="about-content">
        <div class="about-glass-unified">
          <div class="section-header">
            <h2>Get to Know Me</h2>
            <div class="section-subtitle">Who I am</div>
          </div>
          <div class="about-two-col">
            <div class="about-col about-col-text">
              <div class="personal-intro">
                <h3>About Me</h3>
                <p>
                  My name is Chanheng and you may call me Jey. I'm currently an international student at Capital University, pursuing a bachelor in computer science. If you’re looking on the world map, zooming around the south eastern part of Asia, you’d see where I’m from, it’s Cambodia.
                  The reason behind why I chose my major is that I’ve always been curious about technology, and I want to dive deeper into its complexity and backbone of it. Studying in the U.S. has allowed me to satisfy that curiosity while learning to adapt to new cultures and environments. I really enjoy the puzzle of coding, the problem solving part of it keeps me curious. Ultimately, my goal is to build or develop something that makes a positive impact on humanity and the world.
                  Outside of school, I also enjoy going out shooting photography, staying in playing video games, and getting fit at the gym. Hiking, bike cycling, and camping are also my favorite activities that I haven’t done much.
                </p>
              </div>
            </div>
            <div class="about-divider"></div>
            <div class="about-col about-col-gallery">
              <div class="scrolling-gallery">
                <div class="scrolling-gallery-scrollable">
                  <div class="scrolling-gallery-inner css-marquee">
                    <img v-for="(img, i) in filmImages.concat(filmImages)" :key="'film-img-'+i" :src="img" class="film-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Portal Links Section: Photograph and Blog in a single row under About Me -->
          <div class="about-portal-section">
            <div class="portal-cards">
              <router-link class="portal-card" to="/photography">
                <div class="portal-icon">📷</div>
                <div class="portal-title">Photography</div>
              </router-link>
              <router-link class="portal-card" to="/blog">
                <div class="portal-icon">📝</div>
                <div class="portal-title">Blog</div>
              </router-link>
            </div>
          </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import about1 from '../assets/images/about1.jpg';
import about3 from '../assets/images/about3.jpg';
import about4 from '../assets/images/about4.jpg';
const filmImages = [about1, about3, about4];
</script>

<style scoped>
.about {
  padding: var(--space-20) var(--space-6);
  background: var(--color-background);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

.about-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.about-glass-unified {
  width: 100%;
  max-width: 1200px;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
  animation: slideInUp 0.8s ease-out;
}

.section-header h2 {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-4) 0;
  line-height: 1.2;
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.about-two-col {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-12);
  display: flex;
  gap: var(--space-12);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--space-12);
  animation: slideInUp 0.8s ease-out 0.4s both;
}

.about-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-col-text {
  align-items: flex-start;
}

.about-col-gallery {
  align-items: center;
  justify-content: center;
}

.about-divider {
  width: 1px;
  background: var(--color-border);
  margin: 0 var(--space-2);
  border-radius: var(--radius-full);
}

.personal-intro h3 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.personal-intro p {
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Gallery Styles */
.scrolling-gallery {
  overflow: hidden;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.scrolling-gallery:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.scrolling-gallery-scrollable {
  height: 600px;
  overflow: hidden;
  width: 100%;
}

.scrolling-gallery-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: vertical-marquee 15s linear infinite;
}

.scrolling-gallery-inner:hover {
  animation-play-state: paused;
}

.film-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.film-img:hover {
  transform: scale(1.02);
}

/* Portal Links Section */
.about-portal-section {
  display: flex;
  justify-content: center;
  margin-top: var(--space-8);
}

.portal-cards {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.portal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding: var(--space-8) var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
}

.portal-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.portal-icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-4);
}

.portal-title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-2);
  color: var(--color-text-primary);
}

.portal-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about {
    padding: var(--space-16) var(--space-4);
  }

  .about-two-col {
    flex-direction: column;
    padding: var(--space-8);
    gap: var(--space-8);
  }

  .about-col-text,
  .about-col-gallery {
    align-items: center;
    width: 100%;
  }

  .about-divider {
    display: none;
  }

  .personal-intro {
    text-align: center;
  }

  .scrolling-gallery {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .scrolling-gallery-scrollable {
    height: 400px;
    width: 100%;
  }

  .portal-cards {
    flex-direction: column;
    gap: var(--space-4);
    align-items: center;
  }

  .portal-card {
    min-width: 280px;
    width: 100%;
    max-width: 400px;
  }
}

@media (max-width: 480px) {
  .about {
    padding: var(--space-12) var(--space-2);
  }

  .about-two-col {
    padding: var(--space-6);
    gap: var(--space-6);
  }

  .scrolling-gallery {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }

  .scrolling-gallery-scrollable {
    height: 350px;
    width: 100%;
  }

  .film-img {
    width: 100%;
    height: auto;
    min-height: 150px;
    object-fit: cover;
  }

  .portal-card {
    min-width: auto;
    padding: var(--space-6) var(--space-4);
  }
}

/* Animations */
@keyframes vertical-marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -50%, 0); }
}
</style>