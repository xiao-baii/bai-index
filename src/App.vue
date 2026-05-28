<template>
  <div class="page">
    <main class="content">
      <Introduction />
      <HeroVisual />
    </main>
    <footer class="footer">
      <Beian />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  min-height: 100vh;
  font-size: 1.0625rem;
  font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: linear-gradient(165deg, #f8fafc 0%, #eef2f7 45%, #e8edf4 100%);
}

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 520px;
  padding: 2.5rem 1.5rem 1rem;
  text-align: center;
}

.footer {
  width: 100%;
  margin-top: auto;
  padding: 0.5rem 1rem;
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
  display: flex;
  justify-content: center;
}
</style>
