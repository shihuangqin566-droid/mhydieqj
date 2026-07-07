<template>
  <div class="home-page">
    <!-- ========== Hero — 交易终端风格 ========== -->
    <section class="hero-banner">
      <!-- 网格线 overlay -->
      <div class="grid-overlay"></div>
      <!-- K线装饰 -->
      <div class="candle-decoration">
        <div class="candle" v-for="n in 20" :key="n"
          :style="{
            height: (30 + Math.random() * 80) + 'px',
            left: (n * 5 - 2.5) + '%',
            animationDelay: (n * 0.15) + 's',
            background: Math.random() > 0.5 ? 'linear-gradient(to top, rgba(239,68,68,0.2), rgba(239,68,68,0.05))' : 'linear-gradient(to bottom, rgba(34,197,94,0.2), rgba(34,197,94,0.05))'
          }">
        </div>
      </div>

      <div class="container">
        <div class="hero-badge">
          <span class="live-dot"></span>
          <span>实时行情 · 数据驱动</span>
        </div>
        <h1>
          <span class="gradient-text">东子证券</span>
          <span class="terminal-cursor">_</span>
        </h1>
        <div class="hero-sub-block">
          <p class="hero-subtitle">以量化模型驱动 · 精准把握市场脉搏</p>
          <div class="hero-metrics">
            <div class="metric">
              <span class="metric-label">板块覆盖</span>
              <span class="metric-value"><CountUp :value="15" suffix="+" /></span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric">
              <span class="metric-label">最大涨幅</span>
              <span class="metric-value up"><CountUp :value="101" suffix="%" /></span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric">
              <span class="metric-label">评分维度</span>
              <span class="metric-value"><CountUp :value="5" suffix="大" /></span>
            </div>
          </div>
        </div>
        <div class="hero-actions">
          <router-link to="/potential-sectors" class="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            查看潜力板块
          </router-link>
          <router-link to="/darkhorse-sectors" class="btn btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            挖掘黑马机会
          </router-link>
        </div>
      </div>
    </section>

    <!-- ========== 市场热力图 ========== -->
    <section class="section" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="container">
        <div class="section-header" style="margin-bottom: 24px;">
          <div class="label">Heatmap</div>
          <h2 style="font-size: 24px;">板块热力图</h2>
        </div>
        <StockHeatMap :data="heatmapData" />
      </div>
    </section>

    <!-- ========== 关于我们 ========== -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in" ref="aboutTitle">
          <div class="label">About</div>
          <h2>关于东子证券</h2>
          <p class="subtitle">以数据为基石，以模型为引擎，为投资者创造价值</p>
          <div class="accent-line"></div>
        </div>
        <div class="about-grid fade-in" ref="aboutContent">
          <div class="about-text">
            <p>东子证券是一家专注于证券市场研究与投资咨询的专业金融机构。我们拥有自主研发的板块评分体系，从板块指数涨幅、资金持续流入、趋势强度、人气热度、基本面五大维度，对A股各大板块进行全方位量化评分。</p>
            <p>同时，我们独创黑马板块与黑马个股挖掘模型，通过启动中/飙升中板块筛选、人气榜过滤、技术面突破确认等多重机制，精准锁定最具上涨潜力的投资标的。</p>
            <router-link to="/contact" class="btn btn-outline" style="margin-top: 16px;">
              了解更多 →
            </router-link>
          </div>
          <div class="about-chart">
            <div class="chart-card">
              <div class="chart-card-header">
                <span class="chart-dot" style="background: #f87171;"></span>
                <span class="chart-dot" style="background: #fbbf24;"></span>
                <span class="chart-dot" style="background: #4ade80;"></span>
                <span class="chart-label">sector_radar.py</span>
              </div>
              <SectorRadar
                :labels="['涨幅', '资金', '趋势', '人气', '基本面']"
                :values="[85, 72, 90, 65, 78]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 潜力板块 ========== -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in" ref="potentialTitle">
          <div class="label">Sectors</div>
          <h2>潜力板块得分</h2>
          <p class="subtitle">东子证券独家评分体系 · 2026年7月6日</p>
          <div class="accent-line"></div>
        </div>
        <div class="home-card fade-in" ref="potentialTable">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            板块得分 Top 3
          </h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>排名</th>
                <th>板块名称</th>
                <th>走势</th>
                <th>得分</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in topSectors" :key="i">
                <td>
                  <span class="rank-badge" :class="rankBadge(i)">{{ i + 1 }}</span>
                </td>
                <td><strong>{{ item.name }}</strong></td>
                <td>
                  <SparkLine :data="item.spark" :color="item.score >= 40 ? '#f87171' : '#4ade80'" />
                </td>
                <td class="up-red number-font">{{ item.score }}</td>
              </tr>
            </tbody>
          </table>
          <div class="card-more">
            <router-link to="/potential-sectors">查看完整榜单 →</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 黑马板块 ========== -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in" ref="horseSectorTitle">
          <div class="label">Dark Horse</div>
          <h2>黑马板块追踪</h2>
          <p class="subtitle">启动 · 飙升板块实时追踪 · 2026年7月6日</p>
          <div class="accent-line"></div>
        </div>
        <div class="home-grid">
          <div class="home-card fade-in" ref="sectorTable">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              启动 · 飙升板块
            </h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>板块名称</th>
                  <th>所属周期</th>
                  <th>趋势</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in surgingSectors" :key="i">
                  <td><strong>{{ item.name }}</strong></td>
                  <td>
                    <span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">
                      {{ item.period }}
                    </span>
                  </td>
                  <td>
                    <SparkLine :data="item.spark" :color="item.period === '飙升中' ? '#f87171' : '#60a5fa'" :width="120" :height="40" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="card-more">
              <router-link to="/darkhorse-sectors">查看完整榜单 →</router-link>
            </div>
          </div>
          <div class="home-card fade-in" ref="sectorGain">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              近期涨幅回顾
            </h3>
            <ul class="gain-list">
              <li v-for="(item, i) in gainReviews" :key="i">
                <span class="tag" :class="item.tagClass">{{ item.tag }}</span>
                <span class="gain-desc">{{ item.desc }}</span>
                <span class="gain-percent number-font">{{ item.gain }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 黑马个股 ========== -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in" ref="stockTitle">
          <div class="label">Stocks</div>
          <h2>黑马个股研究</h2>
          <p class="subtitle">多维度筛选 · 精准锁定最具上涨潜力标的</p>
          <div class="accent-line"></div>
        </div>
        <div class="home-grid">
          <div class="home-card fade-in" ref="stockTable">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
              本期黑马个股
            </h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>个股名称</th>
                  <th>所属板块</th>
                  <th>板块周期</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in blackHorseStocks" :key="i">
                  <td><strong>{{ item.name }}</strong></td>
                  <td>{{ item.sector }}</td>
                  <td>
                    <span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">
                      {{ item.period }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="card-more">
              <router-link to="/darkhorse-stocks">查看更多 →</router-link>
            </div>
          </div>
          <div class="home-card fade-in" ref="stockGain">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              涨幅跟踪
            </h3>
            <ul class="gain-list">
              <li v-for="(item, i) in stockGains" :key="i">
                <span class="tag tag-up">{{ item.tag }}</span>
                <span class="gain-desc">{{ item.desc }}</span>
                <span class="gain-percent number-font">+{{ item.gain }}%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 联系我们 ========== -->
    <section class="section" id="contact-home">
      <div class="container">
        <div class="section-header fade-in" ref="contactTitle">
          <div class="label">Contact</div>
          <h2>联系我们</h2>
          <p class="subtitle">专业投资研究，助您把握市场机遇</p>
          <div class="accent-line"></div>
        </div>
        <div class="contact-grid fade-in" ref="contactForm">
          <div class="contact-info">
            <h3>联系方式</h3>
            <div class="contact-info-item">
              <div class="icon">📞</div>
              <div>
                <strong>服务热线</strong>
                <p style="color:var(--gray-400);margin-top:4px;">400-000-0000</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="icon">📧</div>
              <div>
                <strong>电子邮箱</strong>
                <p style="color:var(--gray-400);margin-top:4px;">service@dongzisec.com</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="icon">📍</div>
              <div>
                <strong>公司地址</strong>
                <p style="color:var(--gray-400);margin-top:4px;">北京市朝阳区金融街88号</p>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="icon">🕐</div>
              <div>
                <strong>服务时间</strong>
                <p style="color:var(--gray-400);margin-top:4px;">工作日 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <h3>在线留言</h3>
            <form @submit.prevent="submitForm">
              <input type="text" v-model="form.name" placeholder="您的姓名" required />
              <input type="tel" v-model="form.phone" placeholder="联系电话" required />
              <textarea v-model="form.message" placeholder="请输入您想咨询的内容..." required></textarea>
              <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
                {{ submitting ? '提交中...' : '提交咨询' }}
              </button>
            </form>
            <div v-if="submitted" style="margin-top:16px;padding:16px;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2);border-radius:var(--radius-sm);text-align:center;">
              <p style="color:var(--green-400);font-weight:600;">✓ 提交成功！</p>
              <p style="color:var(--gray-400);font-size:14px;margin-top:4px;">感谢您的咨询，我们将尽快与您联系！</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SparkLine from '../components/SparkLine.vue'
import SectorRadar from '../components/SectorRadar.vue'
import StockHeatMap from '../components/StockHeatMap.vue'
import CountUp from '../components/CountUp.vue'

// 热力图数据
const heatmapData = [
  { name: '半导体', change: 3.25 },
  { name: '化学制药', change: 2.56 },
  { name: '贵金属', change: -0.38 },
  { name: '汽车零部件', change: 1.89 },
  { name: '生物制品', change: 4.12 },
  { name: '机器人', change: 4.12 },
  { name: '工程机械', change: -1.25 },
  { name: '航海装备', change: 0.85 },
  { name: '军工电子', change: 2.34 },
  { name: '教育', change: -2.15 },
  { name: '航天装备', change: 1.56 },
  { name: '保险', change: -0.65 },
  { name: '饰品', change: 3.78 },
  { name: '家居用品', change: 0.45 },
  { name: '装修建材', change: -1.89 },
]

// 模拟走势数据
const genSpark = () => Array.from({ length: 20 }, () => Math.random() * 20 + 40)

const topSectors = [
  { name: '半导体', score: 46, spark: genSpark() },
  { name: '元件', score: 35, spark: genSpark() },
  { name: '小金属', score: 35, spark: genSpark() },
]

const surgingSectors = [
  { name: '半导体', period: '飙升中', spark: [45,48,52,55,58,62,65,68,72,75,78,82,85,88,90,92,94,96,98,100] },
  { name: '化学制药', period: '启动中', spark: [30,32,35,33,36,38,40,42,45,48,50,52,55,58,60,62,65,68,70,72] },
]

const blackHorseStocks = [
  { name: '士兰微', sector: '半导体', period: '飙升中' },
  { name: '恒瑞医药', sector: '小金属', period: '启动中' },
  { name: '九州药业', sector: '玻璃玻纤', period: '启动中' },
]

const stockGains = [
  { tag: '北京君正', desc: '6月5日入池 · 16个交易日', gain: '+101%' },
  { tag: '士兰微', desc: '6月12日入池 · 12个交易日', gain: '+77%' },
  { tag: '北方华创', desc: '6月12日入池 · 12个交易日', gain: '+58%' },
  { tag: '海南海药', desc: '6月26日入池 · 6个交易日', gain: '+52%' },
  { tag: '美诺华', desc: '6月30日入池 · 4个交易日', gain: '+32%' },
]

const gainReviews = [
  { tag: '飙升', tagClass: 'tag-hot', desc: '半导体 · 6月29日入池', gain: '+15%' },
  { tag: '飙升', tagClass: 'tag-hot', desc: '光学光电子 · 6月29日入池', gain: '+12%' },
  { tag: '启动', tagClass: 'tag-new', desc: '化学制药 · 6月26日入池', gain: '+10%' },
]

const rankBadge = (i) => {
  if (i === 0) return 'gold'
  if (i === 1) return 'silver'
  if (i === 2) return 'bronze'
  return 'default'
}

const form = ref({ name: '', phone: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const submitForm = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    form.value = { name: '', phone: '', message: '' }
    setTimeout(() => { submitted.value = false }, 4000)
  }, 800)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
})
</script>
