<template>
  <section class="introduction">
    <h1 class="title">HexCraft</h1>
    <p class="subtitle">个人导航</p>
    <nav class="intro-list" aria-label="快捷链接">
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Introduction',
}
</script>

<style lang="scss" scoped>
.introduction {
  width: 100%;
  animation: fade-up 0.6s ease-out both;
}

.title {
  margin: 0;
  font-size: clamp(2rem, 6vw, 2.75rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #1a2a3a;
}

.subtitle {
  margin: 0.5rem 0 1.75rem;
  font-size: 1rem;
  letter-spacing: 0.2em;
  color: rgba(44, 62, 80, 0.45);
  text-transform: uppercase;
}

.intro-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  min-width: 152px;
  padding: 1rem 1.75rem;
  border-radius: 12px;
  text-decoration: none;
  color: #334155;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    color: #c53030;
    border-color: rgba(197, 48, 48, 0.25);
    box-shadow: 0 8px 28px rgba(197, 48, 48, 0.12);
  }

  &:focus-visible {
    outline: 2px solid #c53030;
    outline-offset: 2px;
  }
}

.link-label {
  font-size: 1.0625rem;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.link-hint {
  font-size: 0.875rem;
  color: rgba(51, 65, 85, 0.5);
  transition: color 0.2s ease;

  .link-card:hover & {
    color: rgba(197, 48, 48, 0.65);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .introduction {
    animation: none;
  }

  .link-card:hover {
    transform: none;
  }
}
</style>
