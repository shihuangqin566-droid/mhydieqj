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
        <!-- 板块榜 -->
        <div class="content-card fade-in">
          <h3>启动 · 飙升板块榜</h3>
          <p style="color:var(--text-mid);margin-bottom:20px;">出品人：东子证券 ｜ 日期：2026年6月29日</p>
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

        <!-- 涨幅回顾 -->
        <div class="content-card fade-in">
          <h3>近期涨幅回顾</h3>
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

        <!-- 板块定义 -->
        <div class="content-card fade-in">
          <h3>板块定义说明</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:16px;">
            <div style="background:#FFF3E0;border-radius:8px;padding:24px;">
              <h4 style="color:#E65100;margin-bottom:8px;">🔥 飙升中板块</h4>
              <p style="color:var(--text-mid);font-size:14px;">
                已进入主升浪阶段，资金加速流入，短期涨幅可观，适合短线强势操作。
              </p>
            </div>
            <div style="background:#E3F2FD;border-radius:8px;padding:24px;">
              <h4 style="color:#1565C0;margin-bottom:8px;">🚀 启动中板块</h4>
              <p style="color:var(--text-mid);font-size:14px;">
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
