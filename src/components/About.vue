<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2>Get to Know Me</h2>
        <div class="section-subtitle">Discover my journey in data and technology</div>
      </div>
      <div class="about-content">
        <div class="about-glass-unified">
          <div class="about-two-col">
            <div class="about-col about-col-text">
              <div class="personal-intro">
                <h3>About Me</h3>
                <p>
                  Hi! I'm Chanheng (Jey), a passionate data enthusiast and creative problem solver. I love exploring new technologies, uncovering insights from data, and sharing my journey through writing and photography. This space is where I share my story, values, and what drives me every day.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div class="about-divider"></div>
            <div class="about-col about-col-gallery">
              <div class="about-masonry-gallery scrolling-gallery">
                <div class="gallery-gradient-top"></div>
                <div class="scrolling-gallery-scrollable">
                  <div class="scrolling-gallery-inner css-marquee">
                    <img v-for="(img, i) in filmImages.concat(filmImages)" :key="'film-img-'+i" :src="img" class="film-img" />
                  </div>
                </div>
                <div class="gallery-gradient-bottom"></div>
                <div class="gallery-scroll-indicator"></div>
              </div>
            </div>
          </div>
          <!-- Portal Links Section: Photograph and Blog in a single row under About Me -->
          <div class="about-portal-section">
            <div class="portal-cards">
              <a class="portal-card" href="/photograph">
                <div class="portal-icon">📷</div>
                <div class="portal-title">Photograph</div>
                <div class="portal-desc">See my favorite shots and photo stories</div>
              </a>
              <a class="portal-card" href="/blog">
                <div class="portal-icon">📝</div>
                <div class="portal-title">Blog</div>
                <div class="portal-desc">Read my latest thoughts and tutorials</div>
              </a>
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
/* --- Gallery Styles --- */
.scrolling-gallery {
  background: rgba(255,255,255,0.15);
  overflow: hidden;
  backdrop-filter: blur(28px) saturate(1.25);
  border: 10px solid rgba(255,255,255,0.32);
  box-shadow:
    0 8px 32px 0 rgba(30,30,60,0.13),
    0 0 0 2px rgba(143,230,255,0.10),
    0 0 0 8px rgba(255,255,255,0.13) inset,
    0 0 24px 4px rgba(143,230,255,0.10);
  border-radius: 36px;
  position: relative;
  box-shadow:
    0 8px 32px 0 rgba(30,30,30,0.10),
    0 0 0 2px rgba(143,230,152,0.06),
    0 0 0 4px rgba(255,255,255,0.18) inset,
    0 0 12px 2px rgba(255,255,255,0.22) inset,
    0 0 24px 4px rgba(200,220,255,0.10);
}
.scrolling-gallery-scrollable {
  height: 540px;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
  position: relative;
}
.scrolling-gallery-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0;
  align-items: center;
}
.gallery-scroll-indicator {
  position: absolute;
  right: 12px;
  top: 50%;
  width: 6px;
  height: 60px;
  background: linear-gradient(to bottom, rgba(143,230,255,0.18) 0%, rgba(255,255,255,0.10) 100%);
  border-radius: 3px;
  opacity: 0.5;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 3;
}

.scrolling-gallery .film-img {
  width: 100%;
  max-width: 320px;
  height: auto;
  box-sizing: border-box;
  display: block;
  border-radius: 0;
  clip-path: none;
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  margin: 0;
  border: none;
  background: transparent;
  filter: drop-shadow(0 0 8px rgba(143,230,255,0.10));
  transition: box-shadow 0.3s, transform 0.3s, background 0.3s;
  image-rendering: auto;
}
.scrolling-gallery .film-img:hover {
  box-shadow: 0 12px 32px 0 rgba(143,230,152,0.18);
  transform: scale(1.04);
}
.gallery-gradient-top,
.gallery-gradient-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 48px;
  z-index: 2;
  pointer-events: none;
}
.gallery-gradient-top {
  top: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0.22) 80%, transparent 100%);
}
.gallery-gradient-bottom {
  bottom: 0;
  background: linear-gradient(to top, rgba(255,255,255,0.22) 80%, transparent 100%);
}

/* --- Portal Links Section --- */
.about-portal-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0 1.5rem 0;
}
.portal-cards {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}
.portal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  max-width: 240px;
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  background: rgba(255,255,255,0.18);
  border-radius: 28px;
  border: 1.5px solid rgba(255,255,255,0.22);
  box-shadow: 0 8px 32px rgba(143,230,255,0.10), 0 2px 8px rgba(45,59,47,0.04);
  text-decoration: none;
  color: var(--color-text, #222);
  transition: box-shadow 0.3s, transform 0.3s, border 0.3s;
  max-width: 1200px;
}
.portal-card:hover {
  box-shadow: 0 16px 48px rgba(143,230,255,0.18), 0 0 0 4px rgba(143,230,255,0.13);
  border-color: rgba(143,230,255,0.22);
  transform: translateY(-4px) scale(1.04);
}
.portal-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 8px rgba(143,230,255,0.13));
}
.portal-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}
.portal-desc {
  font-size: 1rem;
  color: var(--color-text-light, #444);
  text-align: center;
  opacity: 0.85;
}
@media (max-width: 700px) {
  .portal-cards {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
  .portal-card {
    min-width: 80vw;
    max-width: 98vw;
    padding: 1.5rem 1rem;
  }
}
/* --- Add the rest of your About.vue CSS here (about-glass-unified, about-two-col, etc.) --- */
.about-glass-unified {
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(32px) saturate(1.3);
  border: 1.5px solid rgba(255,255,255,0.22);
  border-radius: 38px;
  max-width: 1800px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .about-glass-unified {
    padding: 2.2rem 1.2rem 1.5rem 1.2rem;
    max-width: 98vw;
  }
  .about-section-divider {
    margin: 1.2rem 0 0.7rem 0;
  }
}

.about-masonry-gallery {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
}
.masonry-img {
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 6px 32px 0 rgba(143,230,152,0.13), 0 0 0 4px rgba(255,255,255,0.7);
  background: #fff;
  border: none;
  transition: box-shadow 0.3s, transform 0.3s;
}
.masonry-img:hover {
  box-shadow: 0 12px 40px 0 rgba(143,230,152,0.18), 0 0 0 8px rgba(229,185,138,0.13);
  transform: scale(1.05) rotate(-2deg);
}

.masonry-img-tall {
  width: 130px;
  height: 210px;
  align-self: flex-end;
  margin-bottom: 18px;
}
.masonry-img-main {
  width: 200px;
  height: 160px;
  align-self: flex-start;
  margin-bottom: 0;
  z-index: 2;
}
.masonry-img-short {
  width: 110px;
  height: 110px;
  align-self: flex-end;
  margin-bottom: 32px;
}



.about-avatar {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(143,230,152,0.25);
  box-shadow: 0 4px 16px rgba(143,230,152,0.10);
  background: #fff;
}
/* Gallery Section */
.my-gallery-section {
  background: var(--color-bg-glass);
  backdrop-filter: blur(20px) saturate(1.1);
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 30px;
  padding: 2.5rem 2rem;
  margin: 2.5rem 0;
  text-align: center;
  box-shadow: 0 12px 32px rgba(0,0,0,0.07);
}
.my-gallery-section h3 {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}
.gallery-photo {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  border: 2px solid rgba(255,255,255,0.18);
  background: #fff;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
}
.gallery-photo:hover {
  transform: scale(1.06) rotate(-2deg);
  box-shadow: 0 8px 32px rgba(143,230,152,0.13);
}


.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(143, 230, 152, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(229, 185, 138, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(45, 59, 47, 0.05) 0%, transparent 50%);
  z-index: 1;
}

.about::after {
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

.container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: slideInUp 0.8s ease-out;
}

.section-header h2 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, 
    var(--color-primary) 0%,
    var(--color-accent) 50%,
    var(--color-secondary) 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  animation: gradientShift 4s ease-in-out infinite;
  text-shadow: 0 4px 16px rgba(143, 230, 152, 0.3);
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-light);
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.about-content {
  display: flex;
  justify-content: center;
  width: 100%;
}

.main-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}



/* Two-column About layout */
.about-two-col {
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(32px) saturate(1.3);
  border: 1.5px solid rgba(255,255,255,0.22);
  border-radius: 38px;
  padding: 3.5rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 0;
  position: relative;
  overflow: hidden;
  max-width: 1300px;
  min-height: 420px;
  margin: 0 auto 3.5rem auto;
  box-shadow:
    0 18px 48px rgba(143,230,152,0.10),
    0 2px 8px rgba(45,59,47,0.04),
    0 1.5px 0 rgba(255,255,255,0.13) inset;
  animation: slideInUp 0.8s ease-out 0.8s both;
}
.about-col {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.about-col-text {
  align-items: flex-start;
  padding-right: 2.2rem;
  justify-content: center;
}
.about-col-gallery {
  align-items: center;
  justify-content: center;
  padding-left: 2.2rem;
}
.about-divider {
  width: 1.5px;
  background: linear-gradient(to bottom, rgba(143,230,152,0.10) 0%, rgba(229,185,138,0.13) 100%);
  margin: 0 0.5rem;
  border-radius: 2px;
  opacity: 0.7;
}
.personal-intro {
  max-width: 520px;
  margin: 0 0 0.5rem 0;
  text-align: left;
  font-size: 1.13rem;
  color: var(--color-text);
}
.about-masonry-gallery {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 900px) {
  .about-two-col {
    flex-direction: column;
    padding: 2.2rem 1.2rem 1.5rem 1.2rem;
    max-width: 98vw;
    min-height: 340px;
  }
  .about-col-text, .about-col-gallery {
    padding: 0;
    align-items: center;
    justify-content: center;
  }
  .about-divider {
    display: none;
  }
  .personal-intro {
    text-align: center;
    font-size: 1rem;
  }
  .about-masonry-gallery {
    gap: 1rem;
  }
  .masonry-img-tall {
    width: 90px;
    height: 140px;
  }
  .masonry-img-main {
    width: 130px;
    height: 90px;
  }
  .masonry-img-short {
    width: 70px;
    height: 70px;
  }
}
@media (max-width: 900px) {
  .skills-highlight {
    padding: 2.2rem 1.2rem 1.5rem 1.2rem;
    max-width: 98vw;
    min-height: 340px;
  }
  .personal-intro {
    font-size: 1rem;
  }
  .about-masonry-gallery {
    gap: 1rem;
  }
  .masonry-img-tall {
    width: 90px;
    height: 140px;
  }
  .masonry-img-main {
    width: 130px;
    height: 90px;
  }
  .masonry-img-short {
    width: 70px;
    height: 70px;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .about {
    padding: 100px 15px 60px 15px;
  }
  .section-header {
    margin-bottom: 3rem;
  }
}

.css-marquee {
  display: flex;
  flex-direction: column;
  animation: vertical-marquee 15s linear infinite;
  will-change: transform;
}
.css-marquee:hover {
  animation-play-state: paused;
}
@keyframes vertical-marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -50%, 0);
  }
}
</style>