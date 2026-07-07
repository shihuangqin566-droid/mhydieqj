<template>
  <div class="stock-heatmap">
    <div
      class="heat-item"
      v-for="(item, i) in data"
      :key="i"
      :style="{ background: getColor(item.change) }"
    >
      <span class="heat-name">{{ item.name }}</span>
      <span class="heat-change">{{ item.change >= 0 ? '+' : '' }}{{ item.change }}%</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: { type: Array, default: () => [] }
})

const getColor = (change) => {
  if (change >= 5) return 'linear-gradient(135deg, rgba(239,68,68,0.35), rgba(239,68,68,0.15))'
  if (change >= 3) return 'linear-gradient(135deg, rgba(239,68,68,0.25), rgba(239,68,68,0.10))'
  if (change >= 1) return 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))'
  if (change >= 0) return 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.02))'
  if (change >= -1) return 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.02))'
  if (change >= -3) return 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))'
  return 'linear-gradient(135deg, rgba(34,197,94,0.25), rgba(34,197,94,0.10))'
}
</script>

<style scoped>
.stock-heatmap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 6px;
}

.heat-item {
  padding: 10px 12px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.2s;
}

.heat-item:hover {
  transform: scale(1.05);
  border-color: rgba(255,255,255,0.1);
}

.heat-name {
  display: block;
  font-size: 12px;
  color: var(--gray-300);
  font-weight: 500;
  margin-bottom: 4px;
}

.heat-change {
  display: block;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Inter', monospace;
  color: var(--gray-100);
}
</style>
