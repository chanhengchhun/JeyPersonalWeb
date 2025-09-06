<template>
  <div>
    <Home />
    <About />
    <Experience />
    <Contact />
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Experience from './Experience.vue'
import Contact from './Contact.vue'

export default {
  name: 'HomePage',
  components: {
    Home,
    About,
    Experience,
    Contact
  }
}
</script>
