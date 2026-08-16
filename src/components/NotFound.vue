<template>
  <!-- Catch-all 404. Reached only via a mistyped or stale URL,
       so it offers a way back rather than just an apology. -->
  <section class="not-found">
    <div class="not-found-inner">
      <span class="label">Error 404</span>
      <h2>Page not found</h2>

      <div class="rule">
        <span class="rule-line"></span>
        <span class="rule-dot"></span>
        <span class="rule-line"></span>
      </div>

      <p>This page doesn't exist &mdash; it may have moved, or the link may be out of date.</p>

      <router-link to="/" class="link-draw">Back to home</router-link>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-20) var(--space-6);
  background: var(--color-background);
}

.not-found-inner {
  text-align: center;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.not-found-inner h2 {
  font-size: var(--text-5xl);
  font-weight: 300;
  margin: 0;
  line-height: 1.05;
}

.rule {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  width: 180px;
}

.rule-line {
  flex: 1;
  height: 1px;
  background: var(--color-border-dark);
  display: block;
}

.rule-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
}

.not-found-inner p {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: var(--text-lg);
  color: var(--color-text-tertiary);
  margin: 0;
}
</style>
