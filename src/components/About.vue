<template>
  <section id="about" class="about">
    <div class="container">

      <!-- Section header -->
      <div class="section-header reveal">
        <p class="label">Who I Am</p>
        <h2>Get to Know Me</h2>
      </div>

      <!-- Two-column layout -->
      <div class="about-grid reveal reveal-delay-1">

        <!-- Text -->
        <div class="about-text">
          <!-- Pull-quote accent line -->
          <div class="pullquote-bar"></div>
          <h3 class="about-title">About Me</h3>
          <p>
            My name is Chanheng, you may also know me as Jey. I'm an international
            student at Capital University, pursuing a bachelor in computer science with a minor in Data Science.
          </p>
          <p>
            I've always been curious about technologies and I want to dive deeper into its
            complexity. Studying in the U.S. has allowed me to satisfy that curiosity while
            learning to adapt to new cultures and environments. I really enjoy the puzzle
            of coding, the problem solving part keeps me curious.
          </p>
          <p>
            Outside of school, I enjoy going out shooting photography, playing video games,
            and getting fit at the gym. Hiking, cycling, and camping are also things I'd
            like to do more.
          </p>
        </div>

        <!-- Scrolling gallery column -->
        <div class="about-gallery">
          <div class="scrolling-gallery">
            <div class="scrolling-gallery-scrollable">
              <div class="scrolling-gallery-inner">
                <img v-for="(img, i) in filmImages.concat(filmImages)" :key="'film-img-'+i"
                  :src="img" class="film-img" alt="Film photograph" loading="eager" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Portal cards: Photography & Blog -->
      <div class="portal-section reveal reveal-delay-2">
        <div class="portal-divider">
          <span class="rule-line"></span>
          <span class="portal-label label">Explore</span>
          <span class="rule-line"></span>
        </div>

        <div class="portal-cards">
          <router-link class="portal-card" to="/photography">
            <!-- Camera SVG icon -->
            <svg class="portal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <span class="portal-title">Photography</span>
          </router-link>

          <router-link class="portal-card" to="/blog">
            <!-- Feather/pen SVG icon -->
            <svg class="portal-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
              <line x1="16" y1="8" x2="2" y2="22"/>
              <line x1="17.5" y1="15" x2="9" y2="15"/>
            </svg>
            <span class="portal-title">Blog</span>
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import about1 from '../assets/images/about1.webp'
import about3 from '../assets/images/about3.webp'
import about4 from '../assets/images/about4.webp'
const filmImages = [about1, about3, about4]
</script>

<style scoped>
.about {
  padding: var(--space-24) var(--space-6);
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

/* Section header */
.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-header .label {
  margin-bottom: var(--space-3);
}

.section-header h2 {
  font-size: var(--text-5xl);
  font-weight: 300;
  margin: 0;
  line-height: 1.05;
}

/* Two-column grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
  margin-bottom: var(--space-16);
}

/* Text side */
.about-text {
  position: relative;
  padding-left: var(--space-8);
}

.pullquote-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-primary);
  opacity: 0.4;
}

.about-title {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 400;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  letter-spacing: 0;
  text-transform: none;
}

.about-text p {
  font-size: var(--text-base);
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

/* Gallery side */
.about-gallery { overflow: hidden; }

.scrolling-gallery {
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface-alt);
  box-shadow:
    inset 0 0 0 4px var(--color-surface),
    inset 0 0 0 5px var(--color-border),
    var(--shadow-md);
}

.scrolling-gallery-scrollable {
  height: 560px;
  overflow: hidden;
  width: 100%;
}

.scrolling-gallery-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: vertical-marquee 18s linear infinite;
}

.scrolling-gallery-inner:hover {
  animation-play-state: paused;
}

.film-img {
  width: 100%;
  height: auto;
  display: block;
  filter: sepia(12%);
  transition: filter var(--transition-slow);
}

.film-img:hover { filter: sepia(0%); }

/* Portal section */
.portal-section { text-align: center; }

.portal-divider {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-bottom: var(--space-10);
}

.rule-line {
  flex: 1;
  height: 1px;
  background: var(--color-border);
  display: block;
}

.portal-label { margin: 0; }

.portal-cards {
  display: flex;
  gap: var(--space-6);
  justify-content: center;
  flex-wrap: wrap;
}

.portal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  min-width: 180px;
  padding: var(--space-10) var(--space-8);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all var(--transition-base);
}

.portal-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.portal-icon {
  width: 32px;
  height: 32px;
  color: var(--color-text-tertiary);
  transition: color var(--transition-fast);
}

.portal-card:hover .portal-icon { color: var(--color-primary); }

.portal-title {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.portal-card:hover .portal-title { color: var(--color-primary); }

/* Responsive */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .about-text { padding-left: var(--space-6); }

  .scrolling-gallery-scrollable { height: 380px; }
}

@media (max-width: 600px) {
  .about { padding: var(--space-16) var(--space-4); }

  .section-header h2 { font-size: var(--text-4xl); }

  .portal-cards { flex-direction: column; align-items: center; }

  .portal-card { width: 100%; max-width: 300px; }

  .scrolling-gallery-scrollable { height: 300px; }
}

/* Marquee animation */
@keyframes vertical-marquee {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -50%, 0); }
}
</style>