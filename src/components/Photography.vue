<template>
  <section id="photography" class="photography">
    <div class="container">
      <!-- Header Section -->
      <div class="photo-header">
        <h2>Photography</h2>
        <p class="photo-intro">My casual photographic shots</p>
      </div>

      <!-- Photo Gallery Grid -->
      <div class="photo-gallery">
        <div 
          v-for="(photo, index) in allPhotos" 
          :key="photo.id"
          :class="['photo-item', { 'featured': photo.featured }]"
          @click="openLightbox(index)"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <img 
            :src="photo.thumbnail"
            :alt="photo.title || `Photo ${index + 1}`"
            class="photo-img"
          />
          
          <div class="photo-overlay">
            <div class="overlay-content">
              <h4 v-if="photo.title">{{ photo.title }}</h4>
              <p v-if="photo.location">📍 {{ photo.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Remove load more section since we show all photos -->
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-container">
        <!-- Close Button -->
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        
        <!-- Navigation Arrows -->
        <button class="lightbox-nav prev" @click.stop="prevPhoto">❮</button>
        <button class="lightbox-nav next" @click.stop="nextPhoto">❯</button>
        
        <!-- Main Image -->
        <div class="lightbox-content" @click.stop>
          <img 
            :src="currentPhoto?.fullsize || currentPhoto?.thumbnail" 
            :alt="currentPhoto?.title || 'Photography'"
            class="lightbox-img"
          />
        </div>
      </div>
    </div>
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

// Reactive data
const lightboxOpen = ref(false)
const currentPhotoIndex = ref(0)

// Photography portfolio data
const allPhotos = ref([
  {
    id: 1,
    thumbnail: photo1,
    fullsize: photo1,
    location: "Columbus, OH",
    featured: false
  },
  {
    id: 2,
    thumbnail: photo2,
    fullsize: photo2,
    location: "Columbus, OH",
    featured: false
  },
  {
    id: 3,  
    thumbnail: photo3,
    fullsize: photo3,
    location: "Columbus, OH",
    featured: false
  },
  {
    id: 4,  
    thumbnail: photo4,
    fullsize: photo4,
    location: "Columbus, OH",
    featured: false
  },
  {
    id: 5,  
    thumbnail: photo5,
    fullsize: photo5,
    location: "Tacoma, WA",
    featured: false
  },
  {
    id: 6,  
    thumbnail: photo6,
    fullsize: photo6,
    location: "Columbus, OH",
    featured: false
  },
  {
    id: 7,  
    thumbnail: photo7,
    fullsize: photo7,
    location: "Columbus, OH",
    featured: false
  }
])

// Computed properties
const currentPhoto = computed(() => {
  return allPhotos.value[currentPhotoIndex.value]
})

// Methods
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
  if (currentPhotoIndex.value < allPhotos.value.length - 1) {
    currentPhotoIndex.value++
  } else {
    currentPhotoIndex.value = 0
  }
}

const prevPhoto = () => {
  if (currentPhotoIndex.value > 0) {
    currentPhotoIndex.value--
  } else {
    currentPhotoIndex.value = allPhotos.value.length - 1
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (!lightboxOpen.value) return
  
  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      prevPhoto()
      break
    case 'ArrowRight':
      nextPhoto()
      break
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

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
  width: 100%;
}

/* Header Section */
.photo-header {
  text-align: center;
  margin-bottom: var(--space-16);
  animation: slideInUp 0.8s ease-out;
}

.photo-header h2 {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-4) 0;
  line-height: 1.2;
}

.photo-intro {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin: 0;
}

/* Photo Gallery Grid - Simple & Clean */
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-16);
}

.photo-item {
  position: relative;
  aspect-ratio: 4/3; /* Consistent aspect ratio for all photos */
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  background: var(--color-surface);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out both;
}

/* Featured photos get subtle distinction */
.photo-item.featured {
  aspect-ratio: 4/3; /* Same as others for consistency */
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--color-primary);
}

.photo-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  z-index: 10;
}

.photo-item.featured:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s ease;
}

.photo-item:hover .photo-img {
  transform: scale(1.05);
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: var(--space-4);
}

.photo-item:hover .photo-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
  width: 100%;
}

.overlay-content h4 {
  font-size: var(--text-base);
  font-weight: 600;
  margin: 0 0 var(--space-1) 0;
}

.overlay-content p {
  font-size: var(--text-sm);
  margin: 0;
  color: white;
  opacity: 1;
  font-weight: 500;
}

/* Remove unused load more button styles */

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-out;
}

.lightbox-container {
  position: relative;
  width: 90%;
  height: 90%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
}

.lightbox-img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: var(--radius-full);
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 1001;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: var(--radius-full);
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav.prev {
  left: 20px;
}

.lightbox-nav.next {
  right: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .photography {
    padding: var(--space-16) var(--space-4);
  }

  .photo-header h2 {
    font-size: var(--text-2xl);
  }

  .photo-intro {
    font-size: var(--text-base);
  }

  .photo-gallery {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--space-3);
  }

  /* All photos same aspect ratio on mobile */
  .photo-item,
  .photo-item.featured {
    aspect-ratio: 4/3;
    border: none; /* Remove border on mobile for cleaner look */
  }

  .lightbox-container {
    width: 95%;
    height: 95%;
  }

  .lightbox-img {
    max-height: 60vh;
  }

  .lightbox-nav {
    width: 50px;
    height: 50px;
    font-size: 16px;
    top: auto;
    bottom: 80px;
    transform: none;
  }

  .lightbox-nav.prev {
    left: 20%;
  }

  .lightbox-nav.next {
    right: 20%;
  }
}

@media (max-width: 480px) {
  .photography {
    padding: var(--space-12) var(--space-2);
  }

  .photo-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-2);
  }

  .photo-item,
  .photo-item.featured {
    aspect-ratio: 4/3;
  }

  .photo-item:hover {
    transform: translateY(-4px);
  }

  .lightbox-img {
    max-height: 50vh;
  }

  .lightbox-nav {
    width: 45px;
    height: 45px;
    font-size: 14px;
    bottom: 60px;
  }

  .lightbox-nav.prev {
    left: 25%;
  }

  .lightbox-nav.next {
    right: 25%;
  }
}

</style>
