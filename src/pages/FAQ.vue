<template>
  <div class="container py-5 mt-5">
    <h2 class="mb-4"> FAQ (Pertanyaan Umum)</h2>
    <div v-for="(faq, i) in faqs" :key="i" class="mb-3">
      <h5 class="text-primary">Q: {{ faq.pertanyaan }}</h5>
      <p class="text-secondary">A: {{ faq.jawaban }}</p>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    pertanyaan: 'Bagaimana cara menandai materi favorit?',
    jawaban: 'Klik ikon hati di halaman detail materi untuk menambahkan ke favorit.'
  },
  {
    pertanyaan: 'Apakah saya perlu login?',
    jawaban: 'Ya, untuk mengakses materi dan fitur favorit, Anda perlu login.'
  },
  {
    pertanyaan: 'Apakah data saya disimpan di server?',
    jawaban: 'Tidak, data disimpan lokal menggunakan LocalStorage dan JSON Server.'
  }
]
</script>
