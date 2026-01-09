<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4 w-100" style="max-width: 420px;">
      <h3 class="text-center text-primary mb-4">Login</h3>
      <p class="text-center text-muted mb-4">Masuk untuk melanjutkan belajar</p>
      <div v-if="errorMsg" class="alert alert-danger text-center">{{ errorMsg }}</div>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            id="username"
            placeholder="Masukkan username"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Masukkan password"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">Masuk</button>
      </form>

      <p class="mt-3 text-center">
        Belum punya akun?
        <router-link to="/register">Daftar di sini</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const store = useUserStore()

const username = ref('')
const password = ref('')
const errorMsg = ref('')

const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem('registeredUsers')) || []

  const found = users.find(user => user.username === username.value && user.password === password.value)

  if (found) {
    store.login(username.value)
    router.push('/')
  } else {
    errorMsg.value = 'Username atau password salah.'
  }
}
</script>
