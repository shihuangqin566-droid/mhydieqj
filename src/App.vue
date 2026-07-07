<template>
  <div id="app">
    <!-- Header -->
    <header class="site-header">
      <div class="inner">
        <router-link to="/" class="logo">
          <span class="logo-icon">东</span>
          东子证券
        </router-link>
        <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>
        <nav class="nav-links" :class="{ open: menuOpen }">
          <router-link to="/" @click="menuOpen = false">首页</router-link>
          <router-link to="/potential-sectors" @click="menuOpen = false">潜力板块</router-link>
          <router-link to="/darkhorse-sectors" @click="menuOpen = false">黑马板块</router-link>
          <router-link to="/darkhorse-stocks" @click="menuOpen = false">黑马个股</router-link>
          <router-link to="/contact" @click="menuOpen = false">联系我们</router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="inner">
        <div>
          <div class="footer-logo">
            <span>东</span>
            东子证券
          </div>
          <p>专注于证券市场研究与投资咨询，以数据驱动的板块评分体系和黑马挖掘模型，为投资者提供专业的投资建议。</p>
        </div>
        <div>
          <h3>快速链接</h3>
          <router-link to="/potential-sectors">潜力板块</router-link>
          <router-link to="/darkhorse-sectors">黑马板块</router-link>
          <router-link to="/darkhorse-stocks">黑马个股</router-link>
        </div>
        <div>
          <h3>关于</h3>
          <router-link to="/">关于我们</router-link>
          <router-link to="/contact">联系我们</router-link>
        </div>
        <div>
          <h3>联系方式</h3>
          <a>服务热线：400-000-0000</a>
          <a>邮箱：service@dongzisec.com</a>
          <a>地址：北京市朝阳区金融街88号</a>
        </div>
        <div class="footer-bottom">
          © 2026 东子证券 版权所有 | 投资有风险，入市需谨慎
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)

// 粒子动画
let particles = []
let animationId = null
let mouseX = 0
let mouseY = 0

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.size = Math.random() * 2 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.3
    this.speedY = (Math.random() - 0.5) * 0.3
    this.opacity = Math.random() * 0.4 + 0.1
    this.hue = Math.random() < 0.5 ? 90 : 15 // sage green or clay
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    // Mouse interaction
    const dx = mouseX - this.x
    const dy = mouseY - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 200) {
      this.x -= dx * 0.002
      this.y -= dy * 0.002
    }

    if (this.x < 0 || this.x > this.canvas.width ||
        this.y < 0 || this.y > this.canvas.height) {
      this.reset()
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `hsla(${this.hue}, 30%, 60%, ${this.opacity})`
    ctx.fill()
  }
}

function initParticles(canvas) {
  const count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000))
  particles = Array.from({ length: count }, () => new Particle(canvas))
}

function drawParticles(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach(p => { p.update(); p.draw(ctx) })

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = `rgba(180, 160, 140, ${0.08 * (1 - dist / 120)})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }
  }

  animationId = requestAnimationFrame(() => drawParticles(ctx, canvas))
}

onMounted(() => {
  // 创建粒子画布
  const canvas = document.createElement('canvas')
  canvas.id = 'particle-canvas'
  document.body.prepend(canvas)
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    particles = []
    initParticles(canvas)
  }

  resize()
  window.addEventListener('resize', resize)

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  drawParticles(ctx, canvas)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
})
</script>
