<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-brand">
        <h2>Chanh</h2>
      </div>
      <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand h2 {
  color: #333;
  font-size: 1.8rem;
  margin: 0;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 0;
}

.nav-menu a:hover {
  color: #646cff;
}

@media (max-width: 768px) {
  .nav {
    padding: 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .nav-menu a {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-menu {
    display: none;
  }
}
</style>
