<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}

main {
  width: 100%;
}

/* Ensure sections don't have horizontal scroll */
section {
  width: 100%;
  overflow-x: hidden;
}
</style>
