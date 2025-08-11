<template>
  <section class="in-dev">
    <div class="in-dev-container">
      <h1>🚧 Page Under Construction</h1>
      <p>This page is currently in development.<br />Please check back soon!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InDevelopment'
}
</script>

<style scoped>
.in-dev {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.in-dev-container {
  text-align: center;
  background: rgba(255,255,255,0.85);
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(102,126,234,0.10);
}
.in-dev h1 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #764ba2;
}
.in-dev p {
  font-size: 1.2rem;
  color: #444;
}
</style>
