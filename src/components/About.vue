<template>
  <section id="about" class="about">
    <div class="container">

      <!-- Two-column layout -->
      <div class="about-grid reveal">

        <!-- Text -->
        <div class="about-text">
          <!-- Pull-quote accent line -->
          <div class="pullquote-bar"></div>
          <h3 class="about-title">About Me</h3>
          <div class="about-text-body" v-html="aboutHtml"></div>
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

    </div>
  </section>
</template>

<script setup>
import { marked } from 'marked'
import about1 from '../assets/images/about1.webp'
import about3 from '../assets/images/about3.webp'
import about4 from '../assets/images/about4.webp'
import aboutMd from '../content/about.md?raw'

const filmImages = [about1, about3, about4]
const aboutHtml = marked.parse(aboutMd)
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

/* Two-column grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
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

.about-text :deep(p) {
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

  .scrolling-gallery-scrollable { height: 300px; }
}

/* Marquee animation */
@keyframes vertical-marquee {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -50%, 0); }
}
</style>