import { setActivePinia, createPinia } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { describe, it, expect, beforeEach, vi } from 'vitest'

// 🔧 Mock localStorage
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null
  },
  setItem(key, value) {
    this.store[key] = value
  },
  removeItem(key) {
    delete this.store[key]
  },
  clear() {
    this.store = {}
  }
}

describe('userStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it('default username kosong dan tidak login', () => {
    const store = useUserStore()
    expect(store.username).toBe('')
    expect(store.isLoggedIn).toBe(false)
  })

  it('bisa login dan menyimpan ke localStorage', () => {
    const store = useUserStore()
    store.login('rahmat')
    expect(store.username).toBe('rahmat')
    expect(store.isLoggedIn).toBe(true)
    expect(localStorage.getItem('user')).toContain('rahmat')
  })

  it('logout menghapus data user', () => {
    const store = useUserStore()
    store.login('rahmat')
    store.logout()
    expect(store.username).toBe('')
    expect(store.isLoggedIn).toBe(false)
    expect(localStorage.getItem('user')).toBeNull()
  })

  it('loadUser memuat dari localStorage', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'firman' }))
    const store = useUserStore()
    store.loadUser()
    expect(store.username).toBe('firman')
    expect(store.isLoggedIn).toBe(true)
  })
})
