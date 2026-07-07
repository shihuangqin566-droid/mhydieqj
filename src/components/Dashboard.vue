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
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.05);
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 13px;
  transition: all 300ms ease;
}

.dashboard:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

/* Header */
.dash-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.dash-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dash-logo {
  width: 26px;
  height: 26px;
  background: #6c5ce7;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: white;
  letter-spacing: 0;
}

.dash-title {
  font-size: 13px;
  font-weight: 600;
  color: #111;
  letter-spacing: -0.01em;
}

.dash-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dash-status {
  width: 6px;
  height: 6px;
  background: #6c5ce7;
  border-radius: 50%;
}

.dash-date {
  font-size: 11px;
  color: #999;
  font-weight: 500;
}

/* Metrics */
.dash-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 20px;
}

.dash-metric {
  background: #f7f7f5;
  border-radius: 12px;
  padding: 12px 14px;
}

.metric-label {
  display: block;
  font-size: 11px;
  color: #999;
  font-weight: 500;
  margin-bottom: 4px;
}

.metric-value {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 2px;
}

.metric-value.up { color: #c0392b; }

.metric-change {
  font-size: 11px;
  font-weight: 600;
}

.metric-change.up { color: #c0392b; }

/* Main area */
.dash-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

/* Chart */
.dash-chart {
  background: #f7f7f5;
  border-radius: 12px;
  padding: 14px;
}

.chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.chart-title {
  font-size: 12px;
  font-weight: 600;
  color: #111;
}

.chart-period {
  font-size: 11px;
  color: #999;
  font-weight: 500;
}

.chart-area { }

.chart-svg {
  width: 100%;
  height: auto;
}

.chart-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  padding: 0 4px;
}

.chart-labels span {
  font-size: 10px;
  color: #bbb;
  font-weight: 500;
}

/* Rank */
.dash-rank {
  background: #f7f7f5;
  border-radius: 12px;
  padding: 14px;
}

.rank-list { }

.rank-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
}

.rank-item + .rank-item {
  border-top: 1px solid rgba(0,0,0,0.03);
}

.rank-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  flex-shrink: 0;
  background: #f0f0ee;
  color: #999;
}

.rank-gold { background: rgba(108,92,231,0.08); color: #6c5ce7; }
.rank-silver { background: #e8e8e6; color: #666; }
.rank-bronze { background: #ede8e0; color: #8a7a5a; }

.rank-name {
  font-size: 12px;
  font-weight: 500;
  color: #333;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rank-bar-wrap {
  flex: 1;
  height: 4px;
  background: rgba(0,0,0,0.04);
  border-radius: 2px;
  overflow: hidden;
  max-width: 60px;
}

.rank-bar {
  display: block;
  height: 100%;
  background: #6c5ce7;
  border-radius: 2px;
  transition: width 600ms ease;
}

.rank-score {
  font-size: 12px;
  font-weight: 700;
  color: #111;
  width: 24px;
  text-align: right;
}

/* Footer table */
.dash-footer {
  background: #f7f7f5;
  border-radius: 12px;
  padding: 14px;
}

.dash-table {
  width: 100%;
  border-collapse: collapse;
}

.dash-table th {
  padding: 6px 4px;
  text-align: left;
  font-size: 10px;
  font-weight: 600;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.dash-table td {
  padding: 8px 4px;
  font-size: 12px;
  color: #555;
  border-bottom: 1px solid rgba(0,0,0,0.03);
}

.dash-table tr:last-child td { border-bottom: none; }

.cell-name {
  font-weight: 600;
  color: #111;
}

.cell-gain {
  font-weight: 700;
  text-align: right;
}

.cell-gain.up { color: #c0392b; }

.dash-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
}

.dash-tag.tag-hot { background: rgba(192,57,43,0.06); color: #c0392b; }
.dash-tag.tag-new { background: rgba(41,128,185,0.06); color: #2980b9; }
</style>
