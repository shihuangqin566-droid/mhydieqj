<template>
  <div class="home-page">
    <!-- ========== Hero 主视觉 ========== -->
    <section class="hero-banner">
      <div class="container">
        <div class="hero-tag">
          <span class="dot"></span>
          实时更新 · 数据驱动
        </div>
        <h1>
          <span class="gradient-text">东子证券</span><br />
          专业投资研究平台
        </h1>
        <p class="hero-subtitle">
          以数据驱动的板块评分体系和黑马挖掘模型，精准把握市场脉搏
        </p>
        <div class="hero-actions">
          <router-link to="/potential-sectors" class="btn btn-primary">
            查看今日潜力板块 →
          </router-link>
          <router-link to="/darkhorse-sectors" class="btn btn-outline">
            挖掘黑马机会
          </router-link>
        </div>
        <div class="hero-stats">
          <div class="hero-stat-item">
            <div class="number">15+</div>
            <div class="label">板块覆盖</div>
          </div>
          <div class="hero-stat-item">
            <div class="number">101%</div>
            <div class="label">最大个股涨幅</div>
          </div>
          <div class="hero-stat-item">
            <div class="number">5大</div>
            <div class="label">评分维度</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== 关于我们 ========== -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in" ref="aboutTitle">
          <div class="label">About</div>
          <h2>关于我们</h2>
          <p class="subtitle">以数据为基石，以模型为引擎，为投资者创造价值</p>
          <div class="accent-line"></div>
        </div>
        <div class="about-preview fade-in" ref="aboutContent">
          <p>东子证券是一家专注于证券市场研究与投资咨询的专业金融机构。我们拥有自主研发的板块评分体系，从板块指数涨幅、资金持续流入、趋势强度、人气热度、基本面五大维度，对A股各大板块进行全方位量化评分。</p>
          <p>同时，我们独创黑马板块与黑马个股挖掘模型，通过启动中/飙升中板块筛选、人气榜过滤、技术面突破确认等多重机制，精准锁定最具上涨潜力的投资标的。自成立以来，我们的研究成果已帮助众多投资者实现超额收益。</p>
          <router-link to="/contact" class="btn btn-outline" style="margin-top: 8px;">
            了解更多 →
          </router-link>
        </div>
      </div>
    </section>

    <!-- ========== 潜力板块 ========== -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header fade-in" ref="potentialTitle">
          <div class="label">Sectors</div>
          <h2>潜力板块</h2>
          <p class="subtitle">东子证券独家评分体系 · 2026年7月6日</p>
          <div class="accent-line"></div>
        </div>
        <div class="home-card fade-in" ref="potentialTable">
          <h3>🏆 板块得分 Top 3</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>排名</th>
                <th>板块名称</th>
                <th>得分</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in topSectors" :key="i">
                <td>
                  <span class="rank-badge" :class="rankBadge(i)">{{ i + 1 }}</span>
                </td>
                <td><strong>{{ item.name }}</strong></td>
                <td class="up-red">{{ item.score }}</td>
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
          <h2>黑马板块</h2>
          <p class="subtitle">启动 · 飙升板块实时追踪 · 2026年7月6日</p>
          <div class="accent-line"></div>
        </div>
        <div class="home-grid">
          <div class="home-card fade-in" ref="sectorTable">
            <h3>📊 启动 · 飙升板块</h3>
            <table class="data-table">
              <thead>
                <tr>
                  <th>板块名称</th>
                  <th>所属周期</th>
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
                </tr>
              </tbody>
            </table>
            <div class="card-more">
              <router-link to="/darkhorse-sectors">查看完整榜单 →</router-link>
            </div>
          </div>
          <div class="home-card fade-in" ref="sectorGain">
            <h3>📈 近期涨幅回顾</h3>
            <ul class="gain-list">
              <li>
                <span class="tag tag-hot">飙升</span>
                半导体 · 6月29日入池
                <span class="gain-percent">+15%</span>
              </li>
              <li>
                <span class="tag tag-hot">飙升</span>
                光学光电子 · 6月29日入池
                <span class="gain-percent">+12%</span>
              </li>
              <li>
                <span class="tag tag-new">启动</span>
                化学制药 · 6月26日入池
                <span class="gain-percent">+10%</span>
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
          <h2>黑马个股</h2>
          <p class="subtitle">多维度筛选 · 精准锁定最具上涨潜力标的</p>
          <div class="accent-line"></div>
        </div>
        <div class="home-grid">
          <div class="home-card fade-in" ref="stockTable">
            <h3>🎯 本期黑马个股</h3>
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
            <h3>🚀 涨幅跟踪</h3>
            <ul class="gain-list">
              <li v-for="(item, i) in stockGains" :key="i">
                <span class="tag tag-up">{{ item.tag }}</span>
                {{ item.desc }}
                <span class="gain-percent">+{{ item.gain }}%</span>
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

const stockGains = [
  { tag: '北京君正', desc: '6月5日入池 · 16个交易日', gain: 101 },
  { tag: '士兰微', desc: '6月12日入池 · 12个交易日', gain: 77 },
  { tag: '北方华创', desc: '6月12日入池 · 12个交易日', gain: 58 },
  { tag: '海南海药', desc: '6月26日入池 · 6个交易日', gain: 52 },
  { tag: '美诺华', desc: '6月30日入池 · 4个交易日', gain: 32 },
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
