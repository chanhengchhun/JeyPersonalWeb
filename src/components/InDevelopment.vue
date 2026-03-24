<template>
  <section class="in-dev">
    <div class="in-dev-inner">
      <p class="label">Coming Soon</p>
      <h2>In Development</h2>
      <div class="rule">
        <span class="rule-line"></span>
        <span class="rule-dot"></span>
        <span class="rule-line"></span>
      </div>
      <p>This page is currently being crafted. Please check back soon.</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.in-dev {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-20) var(--space-6);
  background: var(--color-background);
}

.in-dev-inner {
  text-align: center;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.in-dev-inner .label { margin: 0; }

.in-dev-inner h2 {
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

.in-dev-inner p {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: var(--text-lg);
  color: var(--color-text-tertiary);
  margin: 0;
}
</style>
