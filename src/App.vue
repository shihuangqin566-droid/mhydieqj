<template>
  <div id="app">
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="container">
        <router-link to="/" class="logo">
          <span class="logo-icon">东</span>
          东子证券
        </router-link>
        <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>
        <div class="nav-links" :class="{ open: menuOpen }">
          <router-link to="/" @click="menuOpen = false">首页</router-link>
          <router-link to="/potential-sectors" @click="menuOpen = false">潜力板块</router-link>
          <router-link to="/darkhorse-sectors" @click="menuOpen = false">黑马板块</router-link>
          <router-link to="/darkhorse-stocks" @click="menuOpen = false">黑马个股</router-link>
          <router-link to="/contact" @click="menuOpen = false">联系我们</router-link>
        </div>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <div class="container">
        <div>
          <h3>东子证券</h3>
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

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
