<script setup>
import { onMounted, computed } from 'vue'
import { useMateriStore } from '@/stores/materiStore'

const materiStore = useMateriStore()

onMounted(() => {
  materiStore.fetchMateri()
})

const groupedMateri = computed(() => {
  const grouped = {}
  for (const item of materiStore.materi) {
    if (!grouped[item.kategori]) grouped[item.kategori] = []
    grouped[item.kategori].push(item)
  }
  return grouped
})

function getPersen(list) {
  const total = list.length
  const selesai = list.filter(m => m.selesai).length
  return Math.round((selesai / total) * 100)
}

const toggleProgress = async (id) => {
  await materiStore.toggleSelesai(id)
}
</script>

<template>
  <div class="container mt-5 pt-4">
    <h2 class="mb-3">📊 Progress Belajar</h2>

    <div v-for="(group, kategori) in groupedMateri" :key="kategori" class="mb-4">
      <h5>{{ kategori }}</h5>
      <div class="progress mb-2" style="height: 20px;">
        <div
          class="progress-bar bg-success"
          :style="{ width: getPersen(group) + '%' }"
        >
          {{ getPersen(group) }}%
        </div>
      </div>

      <ul class="list-group">
        <li
          v-for="materi in group"
          :key="materi.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>{{ materi.judul }}</span>
          <input
            type="checkbox"
            :checked="materi.selesai"
            @change="toggleProgress(materi.id)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
