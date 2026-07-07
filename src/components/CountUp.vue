<template>
  <span class="count-up" ref="elRef">{{ displayValue }}</span>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  value: { type: Number, default: 0 },
  suffix: { type: String, default: '' },
  prefix: { type: String, default: '' },
  duration: { type: Number, default: 2000 },
  decimals: { type: Number, default: 0 },
})

const elRef = ref(null)
const displayValue = ref('0')

let observer = null
let animationId = null
let hasAnimated = false

const animate = () => {
  if (hasAnimated) return
  hasAnimated = true

  const start = performance.now()
  const from = 0
  const to = props.value

  const step = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = from + (to - from) * eased

    displayValue.value = props.prefix + current.toFixed(props.decimals) + props.suffix

    if (progress < 1) {
      animationId = requestAnimationFrame(step)
    }
  }

  animationId = requestAnimationFrame(step)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animate()
      if (observer) observer.disconnect()
    }
  }, { threshold: 0.3 })
  if (elRef.value) observer.observe(elRef.value)
})

watch(() => props.value, () => { hasAnimated = false; animate() })
</script>
