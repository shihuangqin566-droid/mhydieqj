<template>
  <div class="darkhorse-sectors-page">
    <section class="page-banner">
      <div class="container">
        <h1>黑马板块</h1>
        <p>东子证券独家挖掘的启动中与飙升中板块，精准捕捉主升浪</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="content-card fade-in">
          <h3>启动 · 飙升板块榜</h3>
          <p style="color:var(--text-secondary);margin-bottom:16px;">出品人：东子证券 ｜ 日期：2026年6月29日</p>
          <table class="data-table">
            <thead>
              <tr>
                <th>入池日期</th>
                <th>板块名称</th>
                <th>板块所属周期</th>
                <th>入池期间最大涨幅</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in surgingList" :key="i">
                <td>{{ item.date }}</td>
                <td><strong>{{ item.name }}</strong></td>
                <td>
                  <span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">{{ item.period }}</span>
                </td>
                <td class="up-red">{{ item.gain }}%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="content-card fade-in">
          <h3>近期涨幅回顾</h3>
          <div style="padding:0;">
            <div v-for="(item, i) in gainReviews" :key="i" style="display:flex;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid var(--border);font-size:14px;">
              <span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">{{ item.period }}</span>
              <span style="flex:1;color:var(--text-secondary);">{{ item.desc }}</span>
              <span style="font-weight:700;color:#e53935;">+{{ item.gain }}%</span>
            </div>
          </div>
        </div>

        <div class="content-card fade-in">
          <h3>板块定义说明</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:12px;">
            <div style="background:#fce4ec;border-radius:8px;padding:20px;">
              <h4 style="color:#c62828;margin-bottom:6px;font-size:16px;">🔥 飙升中板块</h4>
              <p style="color:var(--text-secondary);font-size:14px;line-height:1.8;">
                已进入主升浪阶段，资金加速流入，短期涨幅可观，适合短线强势操作。
              </p>
            </div>
            <div style="background:#e3f2fd;border-radius:8px;padding:20px;">
              <h4 style="color:#1565c0;margin-bottom:6px;font-size:16px;">🚀 启动中板块</h4>
              <p style="color:var(--text-secondary);font-size:14px;line-height:1.8;">
                处于底部启动初期，趋势刚刚形成，具备较大上涨空间，适合中线布局。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const surgingList = [
  { date: '2026/6/26', name: '光学光电子', period: '飙升中', gain: 8 },
  { date: '2026/6/29', name: '半导体', period: '飙升中', gain: 13 },
  { date: '2026/6/30', name: '化学制药', period: '启动中', gain: 9 },
]

const gainReviews = [
  { period: '飙升中', desc: '半导体于6月29日进入榜单，3个交易日涨幅', gain: 15 },
  { period: '飙升中', desc: '光学光电子于6月29日进入榜单，3个交易日涨幅', gain: 12 },
  { period: '启动中', desc: '化学制药于6月26日进入榜单，3个交易日涨幅', gain: 10 },
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
