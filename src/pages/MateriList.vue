<template>
  <div class="container mt-5 pt-navbar">
    <h1 class="mb-4 text-center">Materi Belajar</h1>

    <div v-if="kategoriDipilih" class="alert alert-info text-center">
      Menampilkan materi untuk kategori: <strong>{{ kategoriDipilih }}</strong>
    </div>

    <div class="row">
      <div
        v-for="materi in materiTerfilter"
        :key="materi.id"
        class="col-md-4 mb-4"
      >
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ materi.judul }}</h5>
            <p class="card-text">{{ materi.deskripsi }}</p>
            <router-link
              :to="`/materi/${materi.id}`"
              class="btn btn-primary btn-sm me-2"
            >
              Lihat Detail
            </router-link>
            <button
              @click="handleFavorit(materi)"
              class="btn btn-outline-danger btn-sm"
              :disabled="!userStore.isLoggedIn"
            >
              <i class="bi" :class="materi.favorit ? 'bi-heart-fill' : 'bi-heart'"></i>
              {{ materi.favorit ? 'Hapus dari Favorit' : 'Tambah ke Favorit' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    
    <div v-if="materiTerfilter.length === 0" class="text-center text-muted mt-4">
      <p>Tidak ada materi yang tersedia untuk kategori ini.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useMateriStore } from '@/stores/materiStore'
import { useUserStore } from '@/stores/userStore'

const store = useMateriStore()
const userStore = useUserStore()
const route = useRoute()

const kategoriDipilih = computed(() => route.query.kategori)

const materiTerfilter = computed(() => {
  return kategoriDipilih.value
    ? store.materi.filter((m) => m.kategori === kategoriDipilih.value)
    : store.materi
})

const handleFavorit = (materi) => {
  if (!userStore.isLoggedIn) {
    alert('Silakan login terlebih dahulu untuk menambahkan favorit.')
    return
  }
  store.toggleFavorit(materi.id)
}

onMounted(() => {
  store.fetchMateri()
})
</script>

<style scoped>
.pt-navbar {
  padding-top: 70px;
}
</style>
