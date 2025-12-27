<template>
  <div class="app-container">
    <div class="content-wrapper">
      <header class="app-header">
        <h1>🇵🇸 Palestine Footer</h1>
        <p class="subtitle">Vue 3 Component - مثال بسيط</p>
      </header>

      <section class="intro-section">
        <h2>📖 نظرة عامة</h2>
        <p>
          هذا مثال بسيط على استخدام مكون <strong>Palestine Footer</strong> في تطبيق Vue 3.
          المكون يستخدم Composition API وسهل الاستخدام جداً.
        </p>
      </section>

      <section class="code-section">
        <h2>💻 الكود المستخدم</h2>
        <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;مرحباً بك&lt;/h1&gt;
    &lt;!-- محتوى صفحتك هنا --&gt;
    
    &lt;PalestineFooter /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import PalestineFooter from 'palestine-footer-vue';
&lt;/script&gt;</code></pre>
      </section>

      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>

      <section class="usage-examples">
        <h2>🎨 أمثلة الاستخدام</h2>
        
        <div class="example-box">
          <h3>مثال 1: استخدام بسيط</h3>
          <pre><code>&lt;PalestineFooter /&gt;</code></pre>
        </div>

        <div class="example-box">
          <h3>مثال 2: مع Props مخصصة</h3>
          <pre><code>&lt;PalestineFooter 
  :year="2024"
  hostName="موقع فلسطين"
  message="من النهر إلى البحر"
/&gt;</code></pre>
        </div>

        <div class="example-box">
          <h3>مثال 3: تخصيص الألوان</h3>
          <pre><code>&lt;PalestineFooter 
  backgroundColor="#1a1a1a"
  textColor="#f0f0f0"
/&gt;</code></pre>
        </div>
      </section>

      <div class="spacer">
        ⬇️ اسكرول للأسفل لرؤية التذييل ⬇️
      </div>
    </div>

    <!-- Palestine Footer Component -->
    <PalestineFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PalestineFooter from '../src/PalestineFooter.vue';

const features = ref([
  { icon: '⚡', title: 'سريع', desc: 'أقل من 3KB' },
  { icon: '🎨', title: 'جميل', desc: 'تصميم احترافي' },
  { icon: '📱', title: 'Responsive', desc: 'كل الشاشات' },
  { icon: '🔧', title: 'مرن', desc: 'قابل للتخصيص' }
]);
</script>

<style scoped>
.app-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin-bottom: 100px;
}

.app-header {
  text-align: center;
  margin-bottom: 40px;
}

.app-header h1 {
  font-size: 3em;
  color: #008000;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.3em;
  color: #666;
}

.intro-section,
.code-section,
.usage-examples {
  margin-bottom: 40px;
}

h2 {
  color: #008000;
  border-bottom: 3px solid #008000;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

p {
  font-size: 1.1em;
  line-height: 1.8;
  color: #333;
}

pre {
  background: #1a1a1a;
  color: #4ade80;
  padding: 20px;
  border-radius: 8px;
  overflow: auto;
  font-size: 14px;
  line-height: 1.6;
}

code {
  font-family: 'Courier New', monospace;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.feature-card {
  background: linear-gradient(135deg, #008000 0%, #005a00 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: white;
  border: none;
  padding: 0;
}

.feature-card p {
  opacity: 0.9;
  font-size: 1em;
  color: white;
}

.example-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  border-left: 4px solid #008000;
}

.example-box h3 {
  color: #008000;
  margin-top: 0;
  margin-bottom: 15px;
  border: none;
  padding: 0;
}

.spacer {
  height: 300px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: #666;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2em;
  }
  
  .content-wrapper {
    padding: 25px;
  }
}
</style>
