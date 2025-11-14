<template>
  <div>
    <Home />
    <About />
    <Contact />
  </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

export default {
  name: 'HomePage',
  components: {
    Home,
    About,
    Contact
  }
}
</script>
