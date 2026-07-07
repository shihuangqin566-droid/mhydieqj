<template>
  <div class="sector-radar">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  labels: { type: Array, default: () => [] },
  values: { type: Array, default: () => [] },
  label: { type: String, default: '评分' },
  color: { type: String, default: '#ff0080' },
})

const canvasRef = ref(null)
let chartInstance = null

onMounted(() => {
  if (!canvasRef.value) return
  const ctx = canvasRef.value.getContext('2d')

  chartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: props.labels,
      datasets: [{
        label: props.label,
        data: props.values,
        backgroundColor: props.color + '20',
        borderColor: props.color,
        borderWidth: 2,
        pointBackgroundColor: props.color,
        pointBorderColor: '#0a1628',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000 },
      plugins: { legend: { display: false } },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          grid: { color: 'rgba(255,255,255,0.06)' },
          angleLines: { color: 'rgba(255,255,255,0.06)' },
          pointLabels: {
            color: '#94a3b8',
            font: { size: 11, family: 'Noto Sans SC' }
          },
          ticks: {
            display: false,
            stepSize: 20,
          }
        }
      }
    }
  })
})

onUnmounted(() => { if (chartInstance) chartInstance.destroy() })
</script>

<style scoped>
.sector-radar {
  width: 100%;
  height: 280px;
}
</style>
