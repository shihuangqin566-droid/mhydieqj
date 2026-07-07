<template>
  <div class="contact-page">
    <section class="page-banner">
      <div class="container">
        <h1>联系我们</h1>
        <p>专业投资研究，助您把握市场机遇</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="content-card fade-in">
          <div class="contact-grid">
            <div class="contact-info">
              <h3>联系方式</h3>
              <div class="contact-info-item">
                <div class="icon">📞</div>
                <div>
                  <strong>服务热线</strong>
                  <p style="color:var(--text-secondary);font-size:13px;margin-top:2px;">400-000-0000</p>
                  <p style="color:var(--text-muted);font-size:12px;">工作日 9:00 - 18:00</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="icon">📧</div>
                <div>
                  <strong>电子邮箱</strong>
                  <p style="color:var(--text-secondary);font-size:13px;margin-top:2px;">service@dongzisec.com</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="icon">📍</div>
                <div>
                  <strong>公司地址</strong>
                  <p style="color:var(--text-secondary);font-size:13px;margin-top:2px;">北京市朝阳区金融街88号</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="icon">💬</div>
                <div>
                  <strong>微信公众号</strong>
                  <p style="color:var(--text-secondary);font-size:13px;margin-top:2px;">东子证券（扫码关注获取最新研报）</p>
                </div>
              </div>
            </div>
            <div class="contact-form">
              <h3>在线留言</h3>
              <form @submit.prevent="submitForm">
                <input type="text" v-model="form.name" placeholder="您的姓名" required />
                <input type="tel" v-model="form.phone" placeholder="联系电话" required />
                <input type="email" v-model="form.email" placeholder="电子邮箱（选填）" />
                <textarea v-model="form.message" placeholder="请输入您想咨询的内容..." required></textarea>
                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
                  {{ submitting ? '提交中...' : '提交咨询' }}
                </button>
              </form>
              <div v-if="submitted" style="margin-top:12px;padding:12px;background:#e8f5e9;border-radius:6px;text-align:center;">
                <p style="color:#2e7d32;font-weight:600;">✓ 提交成功！</p>
                <p style="color:var(--text-secondary);font-size:13px;margin-top:4px;">感谢您的咨询，我们的投研团队将在1个工作日内与您联系。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-card fade-in" style="margin-top:24px;">
          <h3>公司位置</h3>
          <div style="background:var(--jb-bg-alt);border-radius:8px;padding:48px;text-align:center;color:var(--text-muted);">
            <p style="font-size:16px;margin-bottom:8px;color:var(--jb-text);">北京市朝阳区金融街88号 · 东子证券大厦</p>
            <p style="font-size:14px;">地铁2号线金融街站A口出，步行500米即到</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({ name: '', phone: '', email: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const submitForm = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    form.value = { name: '', phone: '', email: '', message: '' }
    setTimeout(() => { submitted.value = false }, 5000)
  }, 800)
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
