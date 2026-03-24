<template>
  <section class="in-dev">
    <div class="in-dev-container">
      <h1>🚧 Page Under Construction</h1>
      <p>This page is currently in development.<br />Please check back soon!</p>
    </div>
  </section>
</template>

<script setup>
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
  background: var(--color-surface);
  padding: var(--space-12) var(--space-8);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
}
.in-dev h1 {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
  color: var(--color-primary);
}
.in-dev p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}
</style>
