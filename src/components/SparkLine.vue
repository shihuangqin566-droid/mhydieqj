<template>
  <div class="sparkline-chart">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  data: { type: Array, default: () => [] },
  color: { type: String, default: '#f87171' },
  height: { type: Number, default: 60 },
  width: { type: Number, default: 160 },
})

const canvasRef = ref(null)
let chartInstance = null

const createChart = () => {
  if (!canvasRef.value) return
  if (chartInstance) { chartInstance.destroy() }

  const ctx = canvasRef.value.getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 0, props.height)
  gradient.addColorStop(0, props.color + '40')
  gradient.addColorStop(1, props.color + '00')

  const labels = props.data.map((_, i) => i)
  const isUp = props.data.length > 1 && props.data[props.data.length - 1] >= props.data[0]

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: props.data,
        borderColor: isUp ? '#f87171' : '#4ade80',
        backgroundColor: gradient,
        borderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 0,
        fill: true,
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 800 },
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      },
      elements: { point: { radius: 0 } }
    }
  })
}

onMounted(createChart)
watch(() => props.data, createChart, { deep: true })
onUnmounted(() => { if (chartInstance) chartInstance.destroy() })
</script>

<style scoped>
.sparkline-chart {
  display: inline-block;
  height: v-bind('height + "px"');
  width: v-bind('width + "px"');
}

.sparkline-chart canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
