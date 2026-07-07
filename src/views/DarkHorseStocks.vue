<template>
  <div class="darkhorse-stocks-page">
    <section class="page-banner">
      <div class="container">
        <h1>黑马个股研究</h1>
        <p>多维度筛选、技术面确认、涨幅跟踪，挖掘最具上涨潜力的黑马个股</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="content-card fade-in">
          <h3>黑马个股筛选逻辑</h3>
          <ol style="padding-left:20px;color:var(--text-secondary);line-height:2.4;font-size:15px;">
            <li>选取<strong style="color:var(--accent);">启动中板块</strong>和<strong style="color:var(--accent);">飙升中板块</strong>中的所有个股作为基础池</li>
            <li>筛选位于东方财富、同花顺、雪球人气榜前100名的标的</li>
            <li>结合技术面（突破平台形态、均线多头排列）进行二次筛选</li>
            <li>综合评估最新一波行情阶段涨幅，确定最具上涨潜力的黑马个股</li>
          </ol>
        </div>

        <div class="content-card fade-in">
          <h3>最具上涨潜力黑马个股</h3>
          <p style="color:var(--text-secondary);margin-bottom:16px;">出品人：东子证券 ｜ 日期：2026年6月29日</p>
          <table class="data-table">
            <thead>
              <tr>
                <th>代码</th>
                <th>股票名称</th>
                <th>所属板块</th>
                <th>是否突破平台</th>
                <th>阶段涨幅</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in topPotential" :key="i">
                <td style="color:var(--text-muted);">{{ item.code }}</td>
                <td><strong>{{ item.name }}</strong></td>
                <td>{{ item.sector }}</td>
                <td>
                  <span class="tag" :class="item.breakout === '是' ? 'tag-up' : 'tag-primary'">{{ item.breakout }}</span>
                </td>
                <td class="up-red">{{ item.gain }}%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="content-card fade-in">
          <h3>黑马个股涨幅回顾</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>个股名称</th>
                <th>入池日期</th>
                <th>截至统计日</th>
                <th>累计涨幅</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in stockGains" :key="i">
                <td><strong>{{ item.name }}</strong></td>
                <td>{{ item.entryDate }}</td>
                <td>2026/7/6</td>
                <td class="up-red">{{ item.gain }}%</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:16px;padding:12px;background:#fff8e1;border-radius:6px;font-size:13px;color:#795548;">
            ⚠️ 注：以上涨幅为入池日至统计日期间最大涨幅，过往业绩不预示未来表现，投资有风险。
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const topPotential = [
  { code: '600276', name: '恒瑞医药', sector: '化学制药', breakout: '否', gain: 20 },
  { code: '000725', name: '京东方A', sector: '光学光电子', breakout: '是', gain: 121 },
  { code: '002273', name: '水晶光电', sector: '光学光电子', breakout: '是', gain: 71 },
  { code: '600703', name: '三安光电', sector: '光学光电子', breakout: '是', gain: 61 },
]

const stockGains = [
  { name: '北京君正', entryDate: '2026/6/5', gain: 101 },
  { name: '北方华创', entryDate: '2026/6/12', gain: 58 },
  { name: '士兰微', entryDate: '2026/6/12', gain: 77 },
  { name: '海南海药', entryDate: '2026/6/26', gain: 52 },
  { name: '美诺华', entryDate: '2026/6/30', gain: 32 },
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