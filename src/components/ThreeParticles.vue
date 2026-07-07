<template>
  <div ref="containerRef" class="three-particles"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let scene, camera, renderer, particles, mouseX, mouseY, animationId

const init = () => {
  const container = containerRef.value
  if (!container) return

  // Scene
  scene = new THREE.Scene()
  scene.background = null

  // Camera
  const width = container.clientWidth
  const height = container.clientHeight
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 30

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  // Particles
  const count = 600
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  const color1 = new THREE.Color(0x1a2332) // navy
  const color2 = new THREE.Color(0x7d776f) // warm gray
  const color3 = new THREE.Color(0xc4bfb7) // light warm gray

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80
    positions[i * 3 + 1] = (Math.random() - 0.5) * 80
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40

    const c = Math.random()
    const color = c < 0.33 ? color1 : c < 0.66 ? color2 : color3
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b

    sizes[i] = Math.random() * 2 + 0.5
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    depthWrite: false,
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Mouse tracking
  mouseX = 0
  mouseY = 0
  document.addEventListener('mousemove', onMouseMove)

  animate()
}

const onMouseMove = (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  if (particles) {
    particles.rotation.x += 0.0003
    particles.rotation.y += 0.0005

    // Subtle mouse parallax
    particles.rotation.y += mouseX * 0.0005
    particles.rotation.x += mouseY * 0.0003
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

const onResize = () => {
  const container = containerRef.value
  if (!container || !renderer || !camera) return
  const width = container.clientWidth
  const height = container.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(() => {
  init()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', onResize)
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
  if (particles) {
    particles.geometry.dispose()
    particles.material.dispose()
  }
})
</script>

<style scoped>
.three-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>
