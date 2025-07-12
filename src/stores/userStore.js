import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const isLoggedIn = ref(false)

  const login = (name) => {
    if (!name) return  
    username.value = name
    isLoggedIn.value = true
    localStorage.setItem('user', JSON.stringify({ username: name }))
  }

  const logout = () => {
    username.value = ''
    isLoggedIn.value = false
    localStorage.removeItem('user')
  }

  const loadUser = () => {
    try {
      const data = JSON.parse(localStorage.getItem('user'))
      if (data?.username) {
        username.value = data.username
        isLoggedIn.value = true
      }
    } catch (err) {
      console.warn('Gagal parsing user dari localStorage:', err)
    }
  }

  return {
    username,
    isLoggedIn,
    login,
    logout,
    loadUser
  }
})
