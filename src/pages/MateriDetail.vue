<template>
  <div class="container mt-5 pt-navbar">
    <div v-if="materi">
      <h2 class="fw-bold">{{ materi.judul }}</h2>
      <p class="text-muted">Kategori: <strong>{{ materi.kategori }}</strong></p>
      <p class="lead">{{ materi.deskripsi }}</p>

      <div class="d-flex gap-2 mb-3 align-items-center">
        <button
          @click="handleFavorit"
          class="btn btn-sm btn-favorit"
          :class="{ favorited: materi.favorit }"
          :disabled="!userStore.isLoggedIn"
        >
          <i class="bi me-1" :class="materi.favorit ? 'bi-heart-fill' : 'bi-heart'"></i>
          {{ materi.favorit ? 'Favorit' : 'Tambah ke Favorit' }}
        </button>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :checked="materi.selesai"
            :disabled="!userStore.isLoggedIn"
            @change="handleProgress"
            id="progressCheck"
          />
          <label class="form-check-label" for="progressCheck">
            Tandai sebagai selesai
          </label>
        </div>
      </div>

      <div class="mt-4 content-area" v-html="materi.isi"></div>
    </div>

    <div v-else class="text-center text-muted">
      <p>Materi tidak ditemukan.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useMateriStore } from '@/stores/materiStore'
import { useUserStore } from '@/stores/userStore'

const route = useRoute()
const materiStore = useMateriStore()
const userStore = useUserStore()
const materi = ref(null)

onMounted(async () => {
  await materiStore.fetchMateri()
  const id = route.params.id // Jangan parseInt, karena id di JSON adalah string!
  materi.value = materiStore.getMateriById(id)
})

const handleFavorit = async () => {
  if (!userStore.isLoggedIn) {
    alert('Silakan login untuk menambahkan ke favorit.')
    return
  }

  if (materi.value) {
    await materiStore.toggleFavorit(materi.value.id)
    materi.value = materiStore.getMateriById(materi.value.id) // Refresh state
  }
}

const handleProgress = async () => {
  if (!userStore.isLoggedIn) {
    alert('Silakan login untuk menandai progress.')
    return
  }

  if (materi.value) {
    await materiStore.toggleSelesai(materi.value.id)
    materi.value = materiStore.getMateriById(materi.value.id) // Refresh state
  }
}
</script>

<style scoped>
.pt-navbar {
  padding-top: 70px;
}
.btn-favorit {
  background-color: #f8f9fa;
  border: 1px solid #ccc;
}
.btn-favorit.favorited {
  color: red;
  border-color: red;
}
</style>
