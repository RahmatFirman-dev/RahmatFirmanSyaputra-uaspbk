<template>
  <div class="container mt-5">
    <h2 class="mb-4">Tambah Materi Baru</h2>
    <form @submit.prevent="tambahMateri">
      <div class="mb-3">
        <label for="judul" class="form-label">Judul</label>
        <input v-model="judul" type="text" class="form-control" id="judul" required />
      </div>
      <div class="mb-3">
        <label for="kategori" class="form-label">Kategori</label>
        <input v-model="kategori" type="text" class="form-control" id="kategori" required />
      </div>
      <div class="mb-3">
        <label for="konten" class="form-label">Konten</label>
        <textarea v-model="konten" class="form-control" id="konten" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-success">Simpan</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMateriStore } from '@/stores/materiStore'
import { useUserStore } from '@/stores/userStore'

const judul = ref('')
const kategori = ref('')
const konten = ref('')

const router = useRouter()
const materiStore = useMateriStore()
const userStore = useUserStore()

onMounted(() => {
  // Proteksi: hanya admin yang boleh akses
  if (userStore.role !== 'admin') {
    alert('Akses ditolak! Halaman ini hanya untuk Admin.')
    router.push('/')
  }
})

const tambahMateri = async () => {
  await materiStore.tambahMateri({
    judul: judul.value,
    kategori: kategori.value,
    konten: konten.value
  })
  router.push('/materi')
}
</script>
