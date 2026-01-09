import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useMateriStore = defineStore('materi', () => {
  const materi = ref([])

  const fetchMateri = async () => {
    try {
      const response = await axios.get('http://localhost:3001/materi')
      materi.value = response.data
    } catch (error) {
      console.error('Gagal mengambil data materi:', error)
    }
  }

  const getMateriById = (id) => {
    return materi.value.find((m) => m.id == id)
  }

  const hapusMateri = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/materi/${id}`)
      materi.value = materi.value.filter((m) => m.id !== id)
    } catch (error) {
      console.error('Gagal menghapus materi:', error)
    }
  }

  const toggleFavorit = async (id) => {
    const index = materi.value.findIndex((m) => m.id === id)
    if (index !== -1) {
      const updatedMateri = { ...materi.value[index] }
      updatedMateri.favorit = !updatedMateri.favorit
      try {
        await axios.patch(`http://localhost:3001/materi/${id}`, {
          favorit: updatedMateri.favorit
        })
        materi.value[index].favorit = updatedMateri.favorit
      } catch (error) {
        console.error('Gagal mengupdate status favorit:', error)
      }
    }
  }

  const toggleSelesai = async (id) => {
    const index = materi.value.findIndex((m) => m.id === id)
    if (index !== -1) {
      const updatedMateri = { ...materi.value[index] }
      updatedMateri.selesai = !updatedMateri.selesai
      try {
        await axios.patch(`http://localhost:3001/materi/${id}`, {
          selesai: updatedMateri.selesai
        })
        materi.value[index].selesai = updatedMateri.selesai
      } catch (error) {
        console.error('Gagal mengupdate status selesai:', error)
      }
    }
  }

  
  return {
    materi,
    fetchMateri,
    getMateriById,
    hapusMateri,
    toggleFavorit,
    toggleSelesai
  }
})
