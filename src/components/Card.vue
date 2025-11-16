<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
      <slot>Card content goes here</slot>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Card from Microfrontend 2'
  }
})
</script>

<style scoped>
.card {
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 400px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-header {
  background: #16a085;
  color: white;
  padding: 16px 20px;
}

.card-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.card-body {
  padding: 20px;
  color: #333;
  line-height: 1.6;
}

.card-footer {
  padding: 16px 20px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
}
</style>
