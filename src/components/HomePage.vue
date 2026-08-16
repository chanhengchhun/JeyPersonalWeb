<template>
  <!-- The personal side of the site. Contact info lives in the
       shared Footer rather than a section here. page-shell lets
       style.css stretch About to meet the footer on tall
       viewports — see the comment there. -->
  <div class="page-shell">
    <Home />
    <About />
  </div>
</template>

<script setup>
import Home from './Home.vue'
import About from './About.vue'
</script>
