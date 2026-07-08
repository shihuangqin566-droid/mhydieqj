<template>
  <div class="dashboard">
    <!-- 顶栏 -->
    <div class="dash-header">
      <div class="dash-header-left">
        <span class="dash-logo">dz</span>
        <span class="dash-title">东子研究 · 量化平台</span>
      </div>
      <div class="dash-header-right">
        <span class="dash-status"></span>
        <span class="dash-date">2026/07/07 15:30</span>
      </div>
    </div>

    <!-- 指标卡 -->
    <div class="dash-metrics">
      <div class="dash-metric">
        <span class="metric-label">上证指数</span>
        <span class="metric-value up">3,286.75</span>
        <span class="metric-change up">+1.28%</span>
      </div>
      <div class="dash-metric">
        <span class="metric-label">深证成指</span>
        <span class="metric-value up">10,892.43</span>
        <span class="metric-change up">+1.85%</span>
      </div>
      <div class="dash-metric">
        <span class="metric-label">创业板指</span>
        <span class="metric-value up">2,245.68</span>
        <span class="metric-change up">+2.12%</span>
      </div>
      <div class="dash-metric">
        <span class="metric-label">板块评分均值</span>
        <span class="metric-value">35.6</span>
        <span class="metric-change up">+0.8</span>
      </div>
    </div>

    <!-- 主内容区 -->
    <div class="dash-main">
      <!-- 折线图 -->
      <div class="dash-chart">
        <div class="chart-header">
          <span class="chart-title">板块评分趋势</span>
          <span class="chart-period">近5日</span>
        </div>
        <div class="chart-area">
          <svg viewBox="0 0 400 160" class="chart-svg">
            <!-- 网格线 -->
            <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
            <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
            <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(0,0,0,0.04)" stroke-width="1"/>
            <!-- 面积填充 -->
            <path d="M0,140 L30,130 L60,120 L90,100 L120,110 L150,85 L180,90 L210,70 L240,75 L270,50 L300,55 L330,35 L360,40 L390,30 L400,28 L400,160 L0,160 Z" fill="rgba(108,92,231,0.06)"/>
            <!-- 折线 -->
            <path d="M0,140 L30,130 L60,120 L90,100 L120,110 L150,85 L180,90 L210,70 L240,75 L270,50 L300,55 L330,35 L360,40 L390,30 L400,28" fill="none" stroke="#6c5ce7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- 端点 -->
            <circle cx="400" cy="28" r="3" fill="#6c5ce7"/>
          </svg>
          <!-- X轴标签 -->
          <div class="chart-labels">
            <span>7/3</span>
            <span>7/4</span>
            <span>7/5</span>
            <span>7/6</span>
            <span>7/7</span>
          </div>
        </div>
      </div>

      <!-- 排行榜 -->
      <div class="dash-rank">
        <div class="chart-header">
          <span class="chart-title">板块评分 Top 5</span>
        </div>
        <div class="rank-list">
          <div class="rank-item" v-for="(item, i) in rankData" :key="i">
            <span class="rank-num" :class="rankClass(i)">{{ i + 1 }}</span>
            <span class="rank-name">{{ item.name }}</span>
            <span class="rank-bar-wrap">
              <span class="rank-bar" :style="{ width: item.score + '%' }"></span>
            </span>
            <span class="rank-score">{{ item.score }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部数据表 -->
    <div class="dash-footer">
      <div class="chart-header">
        <span class="chart-title">黑马个股监测</span>
        <span class="chart-period">实时更新</span>
      </div>
      <table class="dash-table">
        <thead>
          <tr>
            <th>个股</th>
            <th>板块</th>
            <th>阶段</th>
            <th>涨幅</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in stockData" :key="i">
            <td class="cell-name">{{ item.name }}</td>
            <td>{{ item.sector }}</td>
            <td><span class="dash-tag" :class="item.period === '飙升中' ? 'tag-hot' : 'tag-new'">{{ item.period }}</span></td>
            <td class="cell-gain up">{{ item.gain }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const rankData = [
  { name: '化学制药', score: 46 },
  { name: '生物制品', score: 46 },
  { name: '贵金属', score: 45 },
  { name: '汽车零部件', score: 41 },
  { name: '动物保健', score: 39 },
]

const stockData = [
  { name: '北京君正', sector: '半导体', period: '飙升中', gain: 101 },
  { name: '士兰微', sector: '半导体', period: '飙升中', gain: 77 },
  { name: '北方华创', sector: '半导体', period: '飙升中', gain: 58 },
  { name: '海南海药', sector: '化学制药', period: '启动中', gain: 52 },
]

const rankClass = (i) => {
  if (i === 0) return 'rank-gold'
  if (i === 1) return 'rank-silver'
  if (i === 2) return 'rank-bronze'
  return ''
}
</script>

<style scoped>
.dashboard {
  width: 100%;
  max-width: 520px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 32px;
  padding: 24px;
  box-shadow: 0 28px 60px rgba(0,0,0,0.24);
  color: #f8f9fd;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.dashboard-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dash-logo {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #7a5bff, #5d4dfa);
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 800;
  color: white;
}

.dash-title {
  font-size: 13px;
  font-weight: 700;
  color: white;
}

.dash-header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dash-status {
  width: 8px;
  height: 8px;
  background: #4edb84;
  border-radius: 50%;
}

.dash-date {
  font-size: 12px;
  color: rgba(255,255,255,0.72);
}

.dash-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 22px;
}

.dash-metric {
  background: rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 16px 18px;
}

.metric-label {
  display: block;
  font-size: 11px;
  color: rgba(255,255,255,0.7);
  font-weight: 600;
  margin-bottom: 8px;
}

.metric-value {
  display: block;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
}

.metric-change {
  font-size: 11px;
  color: #4edb84;
  font-weight: 700;
}

.dash-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 20px;
}

.dash-chart,
.dash-rank,
.dash-footer {
  background: rgba(255,255,255,0.06);
  border-radius: 28px;
  padding: 18px;
}

.chart-header,
.rank-item,
.dash-table th,
.dash-table td {
  color: rgba(255,255,255,0.9);
}

.chart-title,
.rank-name,
.dash-table th {
  font-weight: 700;
}

.chart-period,
.metric-label,
.dash-date {
  color: rgba(255,255,255,0.65);
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 12px;
}

.chart-labels span {
  font-size: 11px;
  color: rgba(255,255,255,0.64);
}

.rank-list {
  display: grid;
  gap: 12px;
}

.rank-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}

.rank-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 11px;
  font-weight: 800;
}

.rank-gold { background: rgba(122,91,255,0.18); color: #d6c8ff; }
.rank-silver { background: rgba(255,255,255,0.14); color: #f3f4f8; }
.rank-bronze { background: rgba(255,255,255,0.12); color: #f3f4f8; }

.rank-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
}

.rank-bar-wrap {
  position: relative;
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 6px;
  overflow: hidden;
}

.rank-bar {
  height: 100%;
  background: linear-gradient(135deg, #7a5bff, #5d4dfa);
}

.rank-score {
  font-size: 11px;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
}

.dash-table {
  width: 100%;
  border-collapse: collapse;
}

.dash-table th,
.dash-table td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.dash-table th {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.64);
}

.dash-table td {
  font-size: 12px;
  color: rgba(255,255,255,0.86);
}

.cell-name { font-weight: 700; color: white; }

.cell-gain { text-align: right; color: #ff8fa0; font-weight: 700; }

.dash-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}

.dash-tag.tag-hot { background: rgba(255,122,154,0.18); color: #ff8fa0; }
.dash-tag.tag-new { background: rgba(102,184,255,0.18); color: #66b8ff; }

@media (max-width: 900px) {
  .dash-main { grid-template-columns: 1fr; }
}
</style>
