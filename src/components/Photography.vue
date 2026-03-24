<template>
  <section id="photography" class="photography">
    <div class="container">

      <!-- Header -->
      <div class="photo-header reveal">
        <p class="label">Visual Work</p>
        <h2>Photography</h2>
        <p class="photo-intro">My casual photographic shots</p>
      </div>

      <!-- Masonry gallery -->
      <div class="photo-masonry">
        <div
          v-for="(photo, index) in allPhotos"
          :key="photo.id"
          class="masonry-item reveal"
          :style="{ transitionDelay: `${index * 0.08}s` }"
          @click="openLightbox(index)"
        >
          <img
            :src="photo.thumbnail"
            :alt="photo.title || `Photo ${index + 1}`"
            class="masonry-img"
          />
          <div class="photo-overlay">
            <span v-if="photo.location" class="overlay-location">{{ photo.location }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
          <div class="lightbox-container">

            <!-- Close — SVG X -->
            <button class="lightbox-close" @click="closeLightbox" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <!-- Prev — SVG arrow -->
            <button class="lightbox-nav prev" @click.stop="prevPhoto" aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <!-- Next — SVG arrow -->
            <button class="lightbox-nav next" @click.stop="nextPhoto" aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>

            <div class="lightbox-content" @click.stop>
              <img
                :src="currentPhoto?.fullsize || currentPhoto?.thumbnail"
                :alt="currentPhoto?.title || 'Photography'"
                class="lightbox-img"
              />
              <p v-if="currentPhoto?.location" class="lightbox-caption">{{ currentPhoto.location }}</p>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import photo1 from '../assets/photography/photo1.jpg'
import photo2 from '../assets/photography/photo2.jpg'
import photo3 from '../assets/photography/photo3.jpg'
import photo4 from '../assets/photography/photo4.jpg'
import photo5 from '../assets/photography/photo5.jpg'
import photo6 from '../assets/photography/photo6.jpg'
import photo7 from '../assets/photography/photo7.jpg'

const lightboxOpen      = ref(false)
const currentPhotoIndex = ref(0)

const allPhotos = ref([
  { id: 1, thumbnail: photo1, fullsize: photo1, location: 'Columbus, OH' },
  { id: 2, thumbnail: photo2, fullsize: photo2, location: 'Columbus, OH' },
  { id: 3, thumbnail: photo3, fullsize: photo3, location: 'Columbus, OH' },
  { id: 4, thumbnail: photo4, fullsize: photo4, location: 'Columbus, OH' },
  { id: 5, thumbnail: photo5, fullsize: photo5, location: 'Tacoma, WA' },
  { id: 6, thumbnail: photo6, fullsize: photo6, location: 'Columbus, OH' },
  { id: 7, thumbnail: photo7, fullsize: photo7, location: 'Columbus, OH' },
])

const currentPhoto = computed(() => allPhotos.value[currentPhotoIndex.value])

const openLightbox = (index) => {
  currentPhotoIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const nextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % allPhotos.value.length
}

const prevPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value - 1 + allPhotos.value.length) % allPhotos.value.length
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape')     closeLightbox()
  if (e.key === 'ArrowLeft')  prevPhoto()
  if (e.key === 'ArrowRight') nextPhoto()
}

onMounted(()  => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.photography {
  padding: var(--space-20) var(--space-6);
  background: var(--color-background);
  min-height: 100vh;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
}

/* Header */
.photo-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.photo-header .label { margin-bottom: var(--space-3); }

.photo-header h2 {
  font-size: var(--text-5xl);
  font-weight: 300;
  margin-bottom: var(--space-3);
}

.photo-intro {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: var(--text-lg);
  color: var(--color-text-tertiary);
  margin: 0;
}

/* ============================================
   Masonry — CSS columns
   ============================================ */
.photo-masonry {
  columns: 3;
  column-gap: var(--space-3);
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: var(--space-3);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  background: var(--color-surface-alt);
  /* Photo-print thin border */
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.masonry-item:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border-dark);
}

.masonry-img {
  width: 100%;
  height: auto;
  display: block;
  filter: sepia(10%);
  transition: transform 0.5s ease, filter 0.5s ease;
}

.masonry-item:hover .masonry-img {
  transform: scale(1.03);
  filter: sepia(0%);
}

/* Vignette overlay on hover */
.photo-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%);
  opacity: 0;
  transition: opacity var(--transition-base);
  display: flex;
  align-items: flex-end;
  padding: var(--space-4);
}

.masonry-item:hover .photo-overlay { opacity: 1; }

.overlay-location {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.85);
}

/* ============================================
   Lightbox
   ============================================ */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(13, 11, 9, 0.96);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-enter-active,
.lightbox-leave-active { transition: opacity 0.3s ease; }
.lightbox-enter-from,
.lightbox-leave-to { opacity: 0; }

.lightbox-container {
  position: relative;
  width: 90%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  gap: var(--space-4);
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
}

.lightbox-caption {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.4);
  margin: 0;
}

/* Lightbox buttons */
.lightbox-close,
.lightbox-nav {
  position: absolute;
  background: rgba(245, 240, 232, 0.06);
  border: 1px solid rgba(245, 240, 232, 0.12);
  color: rgba(245, 240, 232, 0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.lightbox-close {
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
}

.lightbox-close:hover,
.lightbox-nav:hover {
  background: rgba(245, 240, 232, 0.12);
  color: white;
}

.lightbox-nav {
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
}

.lightbox-nav.prev { left: -70px; }
.lightbox-nav.next { right: -70px; }

/* ============================================
   Responsive
   ============================================ */
@media (max-width: 900px) {
  .photo-masonry { columns: 2; }
  .lightbox-nav.prev { left: -50px; }
  .lightbox-nav.next { right: -50px; }
}

@media (max-width: 560px) {
  .photography { padding: var(--space-12) var(--space-3); }

  .photo-masonry {
    columns: 2;
    column-gap: var(--space-2);
  }

  .masonry-item { margin-bottom: var(--space-2); }

  .photo-header h2 { font-size: var(--text-4xl); }

  .lightbox-container { width: 95%; }

  .lightbox-nav {
    top: auto;
    bottom: -60px;
    transform: none;
    width: 44px;
    height: 44px;
  }

  .lightbox-nav.prev { left: 30%; }
  .lightbox-nav.next { right: 30%; }

  .lightbox-close { top: -50px; }
}
</style>
