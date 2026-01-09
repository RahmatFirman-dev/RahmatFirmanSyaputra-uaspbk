<template>
  <div class="container py-5 mt-5">
    <h2 class="mb-4">📚 Kategori Materi</h2>
    <ul class="list-group">
      <li v-for="kategori in kategoriList" :key="kategori" class="list-group-item">
        {{ kategori }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const kategoriList = [
  'HTML',
  'CSS',
  'JavaScript',
  'Vue.js',
  'Bootstrap',
  'Git & GitHub',
  'React',
  'Tailwind CSS'
]
</script>
