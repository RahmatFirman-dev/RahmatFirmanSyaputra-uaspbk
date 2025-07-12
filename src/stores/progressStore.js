// stores/progressStore.js
import { defineStore } from 'pinia'

export const useProgressStore = defineStore('progress', {
  state: () => ({
    selesaiList: JSON.parse(localStorage.getItem('selesaiList')) || []
  }),
  actions: {
    toggleSelesai(id) {
      const index = this.selesaiList.indexOf(id)
      if (index === -1) {
        this.selesaiList.push(id)
      } else {
        this.selesaiList.splice(index, 1)
      }
      localStorage.setItem('selesaiList', JSON.stringify(this.selesaiList))
    },
    isSelesai(id) {
      return this.selesaiList.includes(id)
    }
  },
})
