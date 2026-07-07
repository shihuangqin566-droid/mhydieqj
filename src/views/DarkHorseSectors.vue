<template>
  <div class="darkhorse-sectors-page">
    <section class="page-banner">
      <div class="container">
        <div class="hero-tag" style="display:inline-flex;align-items:center;gap:8px;padding:6px 20px;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);border-radius:9999px;font-size:13px;color:var(--gold-400);margin-bottom:20px;">
          黑马挖掘
        </div>
        <h1>黑马板块</h1>
        <p>东子证券独家挖掘的启动中与飙升中板块，精准捕捉主升浪</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="content-card fade-in">
          <h3>🔥 启动 · 飙升板块榜</h3>
          <p style="color:var(--gray-400);margin-bottom:20px;">出品人：东子证券 ｜ 日期：2026年6月29日</p>
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
                  <span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">
                    {{ item.period }}
                  </span>
                </td>
                <td class="up-red">{{ item.gain }}%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="content-card fade-in">
          <h3>📈 近期涨幅回顾</h3>
          <ul class="gain-list" style="padding:0;">
            <li v-for="(item, i) in gainReviews" :key="i">
              <span class="tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">
                {{ item.period }}
              </span>
              {{ item.desc }}
              <span class="gain-percent">+{{ item.gain }}%</span>
            </li>
          </ul>
        </div>

        <div class="content-card fade-in">
          <h3>📖 板块定义说明</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:16px;">
            <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.12);border-radius:12px;padding:24px;">
              <h4 style="color:var(--red-400);margin-bottom:8px;font-size:18px;">🔥 飙升中板块</h4>
              <p style="color:var(--gray-400);font-size:14px;line-height:1.8;">
                已进入主升浪阶段，资金加速流入，短期涨幅可观，适合短线强势操作。
              </p>
            </div>
            <div style="background:rgba(96,165,250,0.06);border:1px solid rgba(96,165,250,0.12);border-radius:12px;padding:24px;">
              <h4 style="color:var(--blue-400);margin-bottom:8px;font-size:18px;">🚀 启动中板块</h4>
              <p style="color:var(--gray-400);font-size:14px;line-height:1.8;">
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
