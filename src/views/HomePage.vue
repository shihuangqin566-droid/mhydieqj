<template>
  <div class="home-page">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="hero-badge">智能投研 · 机构级策略</span>
          <h1>东子证券 · A股智能研究平台</h1>
          <p class="lead">
            通过板块评分、黑马板块追踪与个股精选，帮助投资者快速发现市场最具潜力的机会。
            数据驱动、模型引擎、实战可执行。
          </p>
          <div class="hero-actions">
            <router-link to="/potential-sectors" class="btn btn-primary">查看潜力板块</router-link>
            <router-link to="/darkhorse-sectors" class="btn btn-secondary">了解黑马板块</router-link>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="number">15+</div>
              <div class="label">覆盖板块</div>
            </div>
            <div class="hero-stat">
              <div class="number">101%</div>
              <div class="label">最大个股涨幅</div>
            </div>
            <div class="hero-stat">
              <div class="number">5</div>
              <div class="label">评分维度</div>
            </div>
          </div>
        </div>

        <div class="dashboard-card">
          <Dashboard />
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="content-card fade-in">
          <h3>我们的核心优势</h3>
          <div class="feature-grid">
            <div class="feature-card">
              <h4>数据驱动评分</h4>
              <p>从趋势、资金、人气、基本面五大维度对板块进行量化评分，及时捕捉结构性机会。</p>
            </div>
            <div class="feature-card">
              <h4>黑马板块捕捉</h4>
              <p>筛选“启动中”和“飙升中”板块，发现具备弹性和趋势延续性的优质赛道。</p>
            </div>
            <div class="feature-card">
              <h4>个股精选策略</h4>
              <p>结合人气榜、技术突破与题材逻辑，为你甄选潜在黑马个股。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="content-card fade-in">
          <h3>本期重点推荐</h3>
          <div class="feature-grid">
            <div class="feature-card">
              <h4>潜力板块 Top 3</h4>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>排名</th>
                    <th>板块</th>
                    <th>得分</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in topSectors" :key="i">
                    <td><span class="rank-badge">{{ i + 1 }}</span></td>
                    <td>{{ item.name }}</td>
                    <td class="up-red">{{ item.score }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="feature-card">
              <h4>黑马板块追踪</h4>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>板块</th>
                    <th>周期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in surgingSectors" :key="i">
                    <td>{{ item.name }}</td>
                    <td><span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">{{ item.period }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="feature-card">
              <h4>黑马个股精选</h4>
              <table class="data-table">
                <thead>
                  <tr>
                    <th>个股</th>
                    <th>板块</th>
                    <th>周期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in blackHorseStocks" :key="i">
                    <td>{{ item.name }}</td>
                    <td>{{ item.sector }}</td>
                    <td><span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">{{ item.period }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="content-card fade-in">
          <h3>联系我们</h3>
          <p>如需咨询专属投研服务，欢迎通过以下方式联系我们。</p>
          <div class="contact-grid">
            <div class="content-card" style="padding: 24px;">
              <p><strong>服务热线</strong></p>
              <p>400-000-0000</p>
            </div>
            <div class="content-card" style="padding: 24px;">
              <p><strong>电子邮箱</strong></p>
              <p>service@dongzisec.com</p>
            </div>
            <div class="content-card" style="padding: 24px;">
              <p><strong>公司地址</strong></p>
              <p>北京市朝阳区金融街88号</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Dashboard from '../components/Dashboard.vue'

const topSectors = [
  { name: '半导体', score: 46 },
  { name: '元件', score: 35 },
  { name: '小金属', score: 35 },
]

const surgingSectors = [
  { name: '半导体', period: '飙升中' },
  { name: '化学制药', period: '启动中' },
]

const blackHorseStocks = [
  { name: '士兰微', sector: '半导体', period: '飙升中' },
  { name: '恒瑞医药', sector: '小金属', period: '启动中' },
  { name: '九州药业', sector: '玻璃玻纤', period: '启动中' },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
})
</script>
