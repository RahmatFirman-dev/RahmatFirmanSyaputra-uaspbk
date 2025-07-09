<template>
  <div class="container mt-5 pt-navbar">
    <h2 class="mb-4 text-center">Materi Favorit</h2>
    <div class="row">
      <div
        v-for="materi in materiFavorit"
        :key="materi.id"
        class="col-md-4 mb-4"
      >
        <div class="card h-100 shadow-sm favorit-card">
          <div class="card-body">
            <h5 class="card-title">{{ materi.judul }}</h5>
            <p class="card-text text-muted">{{ materi.deskripsi }}</p>
            <router-link
              :to="`/materi/${materi.id}`"
              class="btn btn-sm btn-outline-primary"
            >
              Lihat Detail
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-if="materiFavorit.length === 0" class="text-center text-muted mt-4">
      <p>Belum ada materi yang difavoritkan.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useMateriStore } from '@/stores/materiStore'

const store = useMateriStore()

onMounted(() => {
  store.fetchMateri()
})

const materiFavorit = computed(() =>
  store.materi.filter((m) => m.favorit === true)
)
</script>

<style scoped>
.pt-navbar {
  padding-top: 70px;
}


</style>


