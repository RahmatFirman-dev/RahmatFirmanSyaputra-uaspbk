<template>
  <div class="container mt-5 pt-navbar">
    <div v-if="materi">
      <h2 class="fw-bold">{{ materi.judul }}</h2>
      <p class="text-muted">Kategori: <strong>{{ materi.kategori }}</strong></p>
      <p class="lead">{{ materi.deskripsi }}</p>

      <button
        @click="handleFavorit"
        class="btn btn-sm btn-favorit mt-2"
        :class="{ favorited: materi.favorit }"
        :disabled="!userStore.isLoggedIn"
      >
        <i class="bi me-1" :class="materi.favorit ? 'bi-heart-fill' : 'bi-heart'"></i>
        {{ materi.favorit ? 'Favorit' : 'Tambah ke Favorit' }}
      </button>

      <div class="mt-4 content-area" v-html="materi.isi"></div>
    </div>

    <div v-else class="text-center text-muted">
      <p>Materi tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useMateriStore } from '@/stores/materiStore'
import { useUserStore } from '@/stores/userStore'

const route = useRoute()
const materiStore = useMateriStore()
const userStore = useUserStore()

const materi = ref(null)

onMounted(async () => {
  await materiStore.fetchMateri()
  const id = parseInt(route.params.id)
  materi.value = materiStore.getMateriById(id)
})

const handleFavorit = async () => {
  if (!userStore.isLoggedIn) {
    alert('Silakan login untuk menambahkan ke favorit.')
    return
  }

  if (materi.value) {
    await materiStore.toggleFavorit(materi.value.id)
    materi.value = materiStore.getMateriById(materi.value.id)
  }
}
</script>

<style scoped>
.pt-navbar {
  padding-top: 70px;
}
</style>
