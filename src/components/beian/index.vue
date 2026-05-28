<template>
  <div class="beian">
    <p class="stats">
      <span id="busuanzi_container_site_uv">
        访客 <span id="busuanzi_value_site_uv">—</span>
      </span>
      <span class="stats-sep" aria-hidden="true">·</span>
      <span id="busuanzi_container_site_pv">
        访问 <span id="busuanzi_value_site_pv">—</span>
      </span>
    </p>
    <a
      href="https://beian.miit.gov.cn"
      target="_blank"
      rel="noopener noreferrer"
    >鄂ICP备2026025888号-1</a>
  </div>
</template>

<script>
export default {
  name: 'Beian',
  mounted() {
    this.refreshBusuanzi()
  },
  methods: {
    refreshBusuanzi() {
      const run = () => {
        if (typeof window.busuanzi !== 'undefined') {
          window.busuanzi.reload()
        }
      }
      if (typeof window.busuanzi !== 'undefined') {
        run()
        return
      }
      const script = document.getElementById('busuanzi-script')
      if (script) {
        script.addEventListener('load', run, { once: true })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.beian {
  font-size: 0.9375rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.stats {
  margin: 0;
  color: rgba(44, 62, 80, 0.38);
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
}

.stats-sep {
  margin: 0 0.35rem;
}

.beian a {
  text-decoration: none;
  color: rgba(44, 62, 80, 0.4);
  transition: color 0.2s ease;

  &:hover {
    color: #c53030;
  }

  &:focus-visible {
    outline: 1px solid #c53030;
    outline-offset: 2px;
  }
}
</style>
