<template>
  <div class="market-ticker">
    <div class="ticker-track">
      <div class="ticker-items" ref="tickerInner">
        <div class="ticker-item" v-for="(item, i) in tickerData" :key="i">
          <span class="ticker-name">{{ item.name }}</span>
          <span class="ticker-price">{{ item.price }}</span>
          <span class="ticker-change" :class="item.change >= 0 ? 'up' : 'down'">
            {{ item.change >= 0 ? '+' : '' }}{{ item.change }}%
          </span>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="ticker-item" v-for="(item, i) in tickerData" :key="'dup-'+i">
          <span class="ticker-name">{{ item.name }}</span>
          <span class="ticker-price">{{ item.price }}</span>
          <span class="ticker-change" :class="item.change >= 0 ? 'up' : 'down'">
            {{ item.change >= 0 ? '+' : '' }}{{ item.change }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] }
})

const tickerData = computed(() => props.data.length ? props.data : defaultData)

const defaultData = [
  { name: '上证指数', price: '3,286.75', change: 1.28 },
  { name: '深证成指', price: '10,892.43', change: 1.85 },
  { name: '创业板指', price: '2,245.68', change: 2.12 },
  { name: '科创50', price: '986.32', change: 0.95 },
  { name: '沪深300', price: '3,912.56', change: 1.45 },
  { name: '半导体', price: '5,432.10', change: 3.25 },
  { name: '化学制药', price: '2,156.80', change: 2.56 },
  { name: '贵金属', price: '1,892.45', change: -0.38 },
  { name: '汽车零部件', price: '3,245.67', change: 1.89 },
  { name: '机器人', price: '2,876.34', change: 4.12 },
]
</script>

<style scoped>
.market-ticker {
  width: 100%;
  overflow: hidden;
  background: rgba(10, 22, 40, 0.9);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 8px 0;
  position: relative;
}

.ticker-track {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 3%, black 97%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 3%, black 97%, transparent);
}

.ticker-items {
  display: flex;
  gap: 0;
  animation: tickerScroll 40s linear infinite;
  width: max-content;
}

.ticker-items:hover {
  animation-play-state: paused;
}

@keyframes tickerScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.ticker-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 24px;
  white-space: nowrap;
  border-right: 1px solid rgba(255,255,255,0.06);
}

.ticker-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-300);
}

.ticker-price {
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-100);
  font-family: 'Inter', monospace;
}

.ticker-change {
  font-size: 12px;
  font-weight: 700;
  font-family: 'Inter', monospace;
  padding: 2px 8px;
  border-radius: 4px;
}

.ticker-change.up {
  color: var(--red-400);
  background: rgba(239, 68, 68, 0.1);
}

.ticker-change.down {
  color: var(--green-400);
  background: rgba(34, 197, 94, 0.1);
}
</style>
