<template>
  <div class="micro-app-2">
    <div class="header">
      <h2>Microfrontend 2</h2>
      <p>Dynamic Card Components</p>
    </div>

    <div class="content">
      <div class="demo-section">
        <h3>Card Gallery</h3>
        <div class="card-grid">
          <Card title="Feature Card 1">
            <p>This card demonstrates the reusable card component from Microfrontend 2.</p>
            <p><strong>Features:</strong> Customizable title, slots for content and footer.</p>
            <template #footer>
              <small>Created: {{ currentDate }}</small>
            </template>
          </Card>

          <Card title="Feature Card 2">
            <p>Cards can display any content you want.</p>
            <ul>
              <li>Flexible layouts</li>
              <li>Responsive design</li>
              <li>Modern styling</li>
            </ul>
            <template #footer>
              <small>Status: Active</small>
            </template>
          </Card>

          <Card title="Feature Card 3">
            <p>Perfect for displaying information in a structured way.</p>
            <p>Module Federation makes it easy to share these components across applications.</p>
            <template #footer>
              <small>Version: 1.0.0</small>
            </template>
          </Card>
        </div>
      </div>

      <div class="info-section">
        <h3>About This Microfrontend</h3>
        <p>
          This is Microfrontend 2, which provides reusable card components.
          Cards are perfect for displaying content in an organized and visually appealing way.
        </p>
        <div class="stats">
          <div class="stat-card">
            <span class="stat-value">3</span>
            <span class="stat-label">Active Cards</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">100%</span>
            <span class="stat-label">Responsive</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from './Card.vue'

const currentDate = ref(new Date().toLocaleDateString())
</script>

<style scoped>
.micro-app-2 {
  padding: 24px;
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
}

.header {
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #16a085;
}

.header h2 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 32px;
  font-weight: 700;
}

.header p {
  margin: 0;
  color: #666;
  font-size: 16px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section, .info-section {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section h3, .info-section h3 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 20px;
  font-weight: 600;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.info-section p {
  color: #666;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.stat-card {
  background: #16a085;
  color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  display: block;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.9;
}
</style>
