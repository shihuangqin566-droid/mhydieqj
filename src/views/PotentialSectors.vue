<template>
  <div class="potential-sectors-page">
    <section class="page-banner">
      <div class="container">
        <div class="hero-tag" style="display:inline-flex;align-items:center;gap:8px;padding:6px 20px;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);border-radius:9999px;font-size:13px;color:var(--gold-400);margin-bottom:20px;">
          评分体系
        </div>
        <h1>潜力板块得分</h1>
        <p>东子证券独家评分体系，全方位量化评估A股各大板块投资潜力</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="content-card fade-in">
          <h3>📐 评分标准说明</h3>
          <p style="color:var(--gray-400);margin-bottom:24px;">
            东子证券潜力板块评分体系由五大维度组成，总分100分，从技术面、资金面、人气面、基本面全面评估板块潜力。
          </p>
          <div class="score-method">
            <div class="score-item" v-for="item in scoreMethods" :key="item.name">
              <div class="score-value">{{ item.score }}</div>
              <div class="score-name">{{ item.name }}</div>
              <div class="score-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>

        <div class="content-card fade-in">
          <h3>📊 2026年7月6日 · 潜力板块得分榜</h3>
          <p style="color:var(--gray-400);margin-bottom:20px;">出品人：东子证券</p>
          <table class="data-table">
            <thead>
              <tr>
                <th>排名</th>
                <th>板块名称</th>
                <th>得分汇总</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in latestRanking" :key="i">
                <td>
                  <span class="rank-badge" :class="rankBadge(i)">{{ item.rank }}</span>
                </td>
                <td><strong>{{ item.name }}</strong></td>
                <td class="up-red">{{ item.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="content-card fade-in">
          <h3>📅 2026年6月29日 · 历史得分榜</h3>
          <p style="color:var(--gray-400);margin-bottom:20px;">出品人：东子证券</p>
          <table class="data-table">
            <thead>
              <tr>
                <th>排名</th>
                <th>板块名称</th>
                <th>得分汇总</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in prevRanking" :key="i">
                <td>
                  <span class="rank-badge" :class="rankBadge(i)">{{ item.rank }}</span>
                </td>
                <td><strong>{{ item.name }}</strong></td>
                <td class="up-red">{{ item.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const scoreMethods = [
  { name: '板块指数5日涨幅', score: '10分', desc: '5日涨幅越高得分越高' },
  { name: '板块资金持续流入', score: '40分', desc: '成交额放大 + 资金净流入' },
  { name: '板块趋势强度', score: '30分', desc: '均线多头 + K线形态 + MACD' },
  { name: '板块人气热度', score: '10分', desc: '涨停数量 + 涨幅分布' },
  { name: '板块基本面', score: '10分', desc: '景气度 + 政策 + 业绩预期' },
]

const latestRanking = [
  { rank: 1, name: '化学制药', score: 46 },
  { rank: 2, name: '生物制品', score: 46 },
  { rank: 3, name: '贵金属', score: 45 },
  { rank: 4, name: '汽车零部件', score: 41 },
  { rank: 5, name: '动物保健II', score: 39 },
  { rank: 6, name: '工程机械', score: 35 },
  { rank: 7, name: '航海装备II', score: 34 },
  { rank: 8, name: '机器人', score: 34 },
  { rank: 9, name: '教育', score: 34 },
  { rank: 10, name: '航天装备II', score: 33 },
  { rank: 11, name: '军工电子II', score: 33 },
  { rank: 12, name: '保险II', score: 32 },
  { rank: 13, name: '饰品', score: 32 },
  { rank: 14, name: '家居用品', score: 31 },
  { rank: 15, name: '装修建材', score: 31 },
]

const prevRanking = [
  { rank: 1, name: '光学光电子', score: 43 },
  { rank: 2, name: '化学制药', score: 42 },
  { rank: 3, name: '半导体', score: 40 },
  { rank: 4, name: '化学制品', score: 35 },
  { rank: 5, name: '电子化学品II', score: 34 },
  { rank: 6, name: '航天装备II', score: 33 },
  { rank: 7, name: '通用设备', score: 33 },
  { rank: 8, name: '风电设备', score: 31 },
  { rank: 9, name: '军工电子II', score: 31 },
  { rank: 10, name: '消费电子', score: 31 },
  { rank: 11, name: '工程机械', score: 30 },
  { rank: 12, name: '医疗器械', score: 30 },
]

const rankBadge = (i) => {
  if (i === 0) return 'gold'
  if (i === 1) return 'silver'
  if (i === 2) return 'bronze'
  return 'default'
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
