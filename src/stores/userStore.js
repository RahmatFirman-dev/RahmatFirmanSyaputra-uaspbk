
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const isLoggedIn = computed(() => username.value !== '')

  const login = (u) => {
    username.value = u
    localStorage.setItem('user', JSON.stringify({ username: u }))
  }

  const logout = () => {
    username.value = ''
    localStorage.removeItem('user')
  }

  const loadUser = () => {
    const stored = localStorage.getItem('user')
    if (stored) {
      const parsed = JSON.parse(stored)
      username.value = parsed.username
    }
  }

  return { username, isLoggedIn, login, logout, loadUser }
})
