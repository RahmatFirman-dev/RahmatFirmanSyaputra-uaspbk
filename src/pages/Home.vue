<template>
  <div class="home pt-navbar"> 
    
    <div class="hero-section py-5 text-white bg-primary-gradient">
      <div class="container">
        <h2 class="fw-bold">Hi, {{ userStore.username || 'Selamat Datang' }}!</h2>
        <p>Mau belajar apa hari ini?</p>
      </div>
    </div>

    
    <div class="container mt-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-semibold"> Materi Pilihan</h5>
        <a href="/materi" class="text-primary fw-semibold">Lihat Semua</a>
      </div>
      <div class="d-flex overflow-auto gap-3 pb-2">
        <div
          v-for="materi in unggulan"
          :key="materi.id"
          class="card flex-shrink-0 shadow-sm"
          style="min-width: 200px;"
        >
          <div class="card-body">
            <h6 class="card-title">{{ materi.judul }}</h6>
            <p class="small text-muted">{{ materi.kategori }}</p>
            <router-link :to="`/materi/${materi.id}`" class="btn btn-sm btn-outline-primary mt-2">
              Lihat Materi
            </router-link>
          </div>
        </div>
      </div>
    </div>
<div class="container mt-5">
  <h5 class="mb-3 fw-semibold">📚 Kategori Materi</h5>
  <div class="row g-3">
    <div
      v-for="kategori in kategoriList"
      :key="kategori.nama"
      class="col-6 col-md-3"
    >

      <div
        class="text-center p-3 bg-white border rounded shadow-sm h-100 kategori-card"
        @click="bukaKategori(kategori.nama)"
      >
        <i :class="kategori.icon" class="fs-2 text-primary mb-2"></i>
        <div>{{ kategori.nama }}</div>
      </div>
    </div>
  </div>
</div>
    
    <footer class="bg-light text-center py-4 mt-5">
      <div class="container">
        <p class="mb-0">© 2025 Belajar Front-End. All rights reserved.</p>
        <p class="small text-muted">Tugas Ujian Akhir Semester Pemograman Berorintasi Komponen</p>
      </div>
    </footer> 
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router' 

const userStore = useUserStore()
const router = useRouter() 

function bukaKategori(namaKategori) {
  router.push({ path: '/materi', query: { kategori: namaKategori } })
}

const unggulan = [
  { id: 1, judul: 'Dasar HTML', kategori: 'HTML' },
  { id: 2, judul: 'CSS Dasar', kategori: 'CSS' },
  { id: 3, judul: 'Vue 3 Composition API', kategori: 'Vue.js' }
]

const kategoriList = [
  { nama: 'HTML', icon: 'bi bi-code-slash' },
  { nama: 'CSS', icon: 'bi bi-palette' },
  { nama: 'JavaScript', icon: 'bi bi-lightning-fill' },
  { nama: 'Vue.js', icon: 'bi bi-vuejs' },
  { nama: 'Bootstrap', icon: 'bi bi-bootstrap-fill' },
  { nama: 'Git & GitHub', icon: 'bi bi-git' },
  { nama: 'React', icon: 'bi bi-react' },
  { nama: 'Tailwind CSS', icon: 'bi bi-layers' }
]
</script>

<style scoped>

.hero-section {
  background: linear-gradient(to right, #1976d2, #42a5f5);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}


.pt-navbar {
  padding-top: 35px;
}


.kategori-card:hover {
  background-color: #f0f8ff;
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.3s ease-in-out;
}
</style>

