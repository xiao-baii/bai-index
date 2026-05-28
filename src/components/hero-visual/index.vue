<template>
  <div class="hero-visual" aria-hidden="true">
    <div class="aura" />

    <div class="ring ring--lg" />
    <div class="ring ring--md" />
    <div class="ring ring--sm" />

    <div class="tracker tracker--fast">
      <i class="dot dot--cyan" />
    </div>
    <div class="tracker tracker--mid">
      <i class="dot dot--pink" />
    </div>
    <div class="tracker tracker--slow">
      <i class="dot dot--violet" />
    </div>

    <div class="core" />
  </div>
</template>

<script>
export default {
  name: 'HeroVisual',
}
</script>

<style lang="scss" scoped>
.hero-visual {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem auto 0;
}

// 中心光球
.core {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 48px;
  height: 48px;
  margin: -24px 0 0 -24px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #6366f1 0%,
    #a855f7 45%,
    #ec4899 100%
  );
  background-size: 200% 200%;
  box-shadow:
    0 0 24px rgba(168, 85, 247, 0.65),
    0 0 48px rgba(99, 102, 241, 0.35);
  animation:
    gradient-flow 1.4s ease infinite,
    core-beat 0.9s ease-in-out infinite;
}

.aura {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(168, 85, 247, 0.35) 0%,
    rgba(99, 102, 241, 0.12) 45%,
    transparent 70%
  );
  animation: aura-breathe 1.1s ease-in-out infinite;
}

// 旋转环
.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 2px solid transparent;
  animation: spin linear infinite;

  &--lg {
    z-index: 0;
    width: 168px;
    height: 168px;
    margin: -84px 0 0 -84px;
    border-top-color: rgba(99, 102, 241, 0.55);
    border-right-color: rgba(236, 72, 153, 0.25);
    animation-duration: 2.2s;
  }

  &--md {
    z-index: 0;
    width: 128px;
    height: 128px;
    margin: -64px 0 0 -64px;
    border-top-color: rgba(34, 211, 238, 0.75);
    border-left-color: rgba(34, 211, 238, 0.2);
    animation-duration: 1.4s;
    animation-direction: reverse;
  }

  &--sm {
    z-index: 2;
    width: 88px;
    height: 88px;
    margin: -44px 0 0 -44px;
    border: 1px dashed rgba(148, 163, 184, 0.45);
    border-top: 2px solid rgba(168, 85, 247, 0.7);
    animation-duration: 3.2s;
  }
}

// 轨道粒子：父级旋转，子级偏移到轨道半径
.tracker {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 0;
  height: 0;
  animation: spin linear infinite;

  &--fast {
    animation-duration: 1.2s;
  }

  &--mid {
    animation-duration: 1.9s;
    animation-direction: reverse;
  }

  &--slow {
    animation-duration: 2.8s;
  }
}

.dot {
  display: block;
  border-radius: 50%;
  animation: dot-glow 0.7s ease-in-out infinite;

  &--cyan {
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    transform: translateY(-82px);
    background: #22d3ee;
    box-shadow: 0 0 12px #22d3ee, 0 0 24px rgba(34, 211, 238, 0.6);
  }

  &--pink {
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    transform: translateY(-58px);
    background: #f472b6;
    box-shadow: 0 0 10px #f472b6, 0 0 20px rgba(244, 114, 182, 0.55);
    animation-delay: 0.3s;
  }

  &--violet {
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    transform: translateY(-72px);
    background: #818cf8;
    box-shadow: 0 0 14px #818cf8, 0 0 28px rgba(129, 140, 248, 0.55);
    animation-delay: 0.6s;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gradient-flow {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes core-beat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes aura-breathe {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.25);
    opacity: 1;
  }
}

@keyframes dot-glow {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.4);
  }
}

@media (max-width: 767px) {
  .hero-visual {
    width: 168px;
    height: 168px;
    margin-top: 1.25rem;
  }

  .ring--lg {
    width: 140px;
    height: 140px;
    margin: -70px 0 0 -70px;
  }

  .ring--md {
    width: 106px;
    height: 106px;
    margin: -53px 0 0 -53px;
  }

  .ring--sm {
    width: 74px;
    height: 74px;
    margin: -37px 0 0 -37px;
  }

  .dot--cyan {
    transform: translateY(-68px);
  }

  .dot--pink {
    transform: translateY(-48px);
  }

  .dot--violet {
    transform: translateY(-60px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tracker,
  .ring {
    animation-duration: 24s;
  }

  .core,
  .aura,
  .dot {
    animation-duration: 4s;
  }
}
</style>
