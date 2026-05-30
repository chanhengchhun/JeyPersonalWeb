<template>
  <section id="home" class="home">
    <div class="home-inner">

      <!-- Left: Profile image -->
      <div class="hero-col-left reveal reveal-delay-1">
        <div class="hero-image-frame">
          <img :src="profileImage" alt="Portrait of Chanheng Chhun" class="hero-image" loading="eager" />
        </div>
      </div>

      <!-- Right: Text content -->
      <div class="hero-col-right">

        <!-- Name -->
        <h1 class="hero-name reveal reveal-delay-1">
          Chanheng<br>
          <em class="hero-name-italic">Chhun</em>
        </h1>

        <!-- Decorative rule -->
        <div class="hero-rule reveal reveal-delay-2">
          <span class="rule-line"></span>
          <span class="rule-dot"></span>
          <span class="rule-line"></span>
        </div>

        <!-- Personal tagline -->
        <p class="hero-tagline reveal reveal-delay-3">
          It feels like life is a constant journey of learning new things
          and embracing challenges. It always feels like there's something
          I don't know, or didn't know enough.
        </p>

        <!-- Aristotle quote -->
        <blockquote class="hero-quote reveal reveal-delay-3">
          <p><em>"The more you know, the more you realize you don't know."</em></p>
          <cite>— Aristotle</cite>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '../assets/images/profile.webp'
</script>

<style scoped>
.home {
  height: calc(100vh - 68px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-10);
  background: var(--color-background);
  overflow: hidden;
}

.home-inner {
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-16);
}

/* ---- Left column: Photo ---- */
.hero-col-left {
  flex: 0 0 42%;
  max-width: 420px;
}

.hero-image-frame {
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border: 1px solid var(--color-border-dark);
  box-shadow:
    inset 0 0 0 6px var(--color-surface),
    inset 0 0 0 7px var(--color-border),
    var(--shadow-lg);
  transition: box-shadow var(--transition-base);
}

.hero-image-frame:hover {
  box-shadow:
    inset 0 0 0 6px var(--color-surface),
    inset 0 0 0 7px var(--color-border),
    var(--shadow-xl);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform var(--transition-slow);
  filter: sepia(8%);
}

.hero-image-frame:hover .hero-image {
  transform: scale(1.03);
  filter: sepia(0%);
}

/* ---- Right column: Text ---- */
.hero-col-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* Hero name */
.hero-name {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
}

.hero-name-italic {
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-secondary);
}

/* Decorative ornamental rule */
.hero-rule {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  width: 200px;
}

.rule-line {
  flex: 1;
  height: 1px;
  background: var(--color-border-dark);
}

.rule-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
}

/* Personal tagline */
.hero-tagline {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 450;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 480px;
  margin: 0;
}

/* Quote */
.hero-quote {
  max-width: 480px;
  text-align: left;
  padding: 0;
  margin: 0;
}

.hero-quote p {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 400;
  font-style: italic;
  color: var(--color-text-tertiary);
  line-height: 1.6;
  margin: 0 0 var(--space-2) 0;
}

.hero-quote cite {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-tertiary);
  font-style: normal;
}

/* ========== Responsive ========== */

/* Medium desktops & large laptops (≤1200px) */
@media (max-width: 1200px) {
  .home { padding: var(--space-8) var(--space-8); }
  .home-inner { gap: var(--space-12); }
}

/* Small laptops & tablet landscape (≤1024px) — two-column still works but tighter */
@media (max-width: 1024px) {
  .home { padding: var(--space-6) var(--space-6); }
  .home-inner { gap: var(--space-8); max-width: 900px; }
  .hero-col-left { flex: 0 0 38%; }
  .hero-col-right { gap: var(--space-4); }
  .hero-name { font-size: clamp(2.5rem, 5vw, 4rem); }
  .hero-tagline { font-size: var(--text-base); line-height: 1.6; }
  .hero-quote p { font-size: var(--text-lg); }
}

/* Height-based: short viewports while still wide (e.g., laptop screens) */
@media (min-width: 769px) and (max-height: 800px) {
  .home { padding: var(--space-4) var(--space-6); }
  .home-inner { gap: var(--space-8); }
  .hero-col-right { gap: var(--space-3); }
  .hero-name { font-size: clamp(2.2rem, 4.5vw, 3.5rem); }
  .hero-tagline { font-size: var(--text-sm); line-height: 1.5; }
  .hero-quote p { font-size: var(--text-base); }
}

/* Height-based: very short viewports (13" MacBook, etc.) */
@media (min-width: 769px) and (max-height: 700px) {
  .home { padding: var(--space-2) var(--space-6); }
  .home-inner { gap: var(--space-6); }
  .hero-col-left { flex: 0 0 35%; }
  .hero-col-right { gap: var(--space-2); }
  .hero-name { font-size: clamp(1.8rem, 4vw, 3rem); }
  .hero-tagline { font-size: var(--text-sm); line-height: 1.4; }
  .hero-quote p { font-size: var(--text-sm); }
  .hero-quote cite { font-size: 0.7rem; }
}

/* Tablet portrait & small tablets (≤768px) — stack vertically */
@media (max-width: 768px) {
  .home {
    height: auto;
    min-height: calc(100vh - 60px);
    padding: var(--space-8) var(--space-6);
  }

  .home-inner {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: var(--space-4);
    max-width: 520px;
  }

  .hero-col-left {
    flex: none;
    max-width: 240px;
    width: 100%;
  }

  .hero-col-right {
    align-items: center;
    text-align: center;
    gap: var(--space-3);
  }

  .hero-name { font-size: clamp(2.5rem, 10vw, 4rem); }
  .hero-rule { margin: 0 auto; }
  .hero-tagline { text-align: center; font-size: var(--text-base); }
  .hero-quote { text-align: center; }
}

/* Phone screens (≤480px) */
@media (max-width: 480px) {
  .home {
    padding: var(--space-4) var(--space-4);
  }

  .home-inner { gap: var(--space-3); }

  .hero-col-left { max-width: 180px; }
  .hero-col-right { gap: var(--space-2); }

  .hero-name { font-size: clamp(2rem, 10vw, 3rem); }
  .hero-tagline { font-size: var(--text-sm); line-height: 1.5; }
  .hero-quote p { font-size: var(--text-base); }
  .hero-quote cite { font-size: 0.7rem; }
}

/* Small phones (≤360px) */
@media (max-width: 360px) {
  .home { padding: var(--space-3) var(--space-3); }
  .hero-col-left { max-width: 150px; }
  .hero-name { font-size: clamp(1.8rem, 10vw, 2.5rem); }
  .hero-tagline { font-size: var(--text-xs); }
  .hero-quote p { font-size: var(--text-sm); }
  .hero-rule { width: 140px; }
}
</style>