<template>
  <section id="home" class="home">
    <div class="home-inner">

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

      <!-- Profile image -->
      <div class="hero-image-wrap reveal reveal-delay-2">
        <div class="hero-image-frame">
          <img :src="profileImage" alt="Portrait of Chanheng Chhun" class="hero-image" loading="eager" />
        </div>
      </div>

      <!-- Personal tagline — separated from quote -->
      <p class="hero-tagline reveal reveal-delay-3">
        It feels like life is a constant journey of learning new things
        and embracing challenges. It always feels like there's something
        I don't know, or didn't know enough.
      </p>

      <!-- Aristotle quote — smaller, attributed -->
      <blockquote class="hero-quote reveal reveal-delay-3">
        <p><em>"The more you know, the more you realize you don't know."</em></p>
        <cite>— Aristotle</cite>
      </blockquote>

      <!-- CTA buttons -->
      <div class="hero-actions reveal reveal-delay-4">
        <a href="#about"   class="btn btn-primary">Learn More</a>
        <a href="#contact" class="btn btn-secondary">Get in Touch</a>
      </div>

    </div>
  </section>
</template>

<script setup>
import profileImage from '../assets/images/profile.webp'
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-16) var(--space-6);
  background: var(--color-background);
}

.home-inner {
  max-width: 640px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

/* Hero name */
.hero-name {
  font-size: clamp(3.5rem, 10vw, 6rem);
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
  width: 240px;
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

/* Profile image */
.hero-image-wrap { width: 100%; max-width: 400px; }

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

/* Personal tagline — your own words, prominent */
.hero-tagline {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 450;
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 520px;
  margin: 0;
}

/* Quote — Aristotle attribution, smaller and lighter */
.hero-quote {
  max-width: 520px;
  text-align: center;
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

/* CTA */
.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  padding-top: var(--space-2);
}

@media (max-width: 600px) {
  .home { padding: var(--space-12) var(--space-4); }
  .hero-image-wrap { max-width: 300px; }
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  .btn { width: 200px; justify-content: center; }
}
</style>