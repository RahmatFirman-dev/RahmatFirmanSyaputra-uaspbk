<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4 w-100" style="max-width: 420px;">
      <h3 class="text-center text-primary mb-4">Register</h3>
      <p class="text-center text-muted mb-4">Buat akun baru untuk mulai belajar</p>
      <div v-if="errorMsg" class="alert alert-danger text-center">{{ errorMsg }}</div>
      <div v-if="successMsg" class="alert alert-success text-center">{{ successMsg }}</div>

      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            id="username"
            required
            placeholder="Masukkan username"
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            required
            placeholder="Masukkan password"
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">Daftar</button>
      </form>

      <p class="mt-3 text-center">
        Sudah punya akun?
        <router-link to="/login">Login di sini</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMsg = ref('')
const successMsg = ref('')
const router = useRouter()

const handleRegister = () => {
  errorMsg.value = ''
  successMsg.value = ''

  if (username.value.length < 3 || password.value.length < 4) {
    errorMsg.value = 'Username minimal 3 huruf dan password minimal 4 karakter.'
    return
  }

  const users = JSON.parse(localStorage.getItem('registeredUsers')) || []
  const alreadyExists = users.find(user => user.username === username.value)

  if (alreadyExists) {
    errorMsg.value = 'Username sudah digunakan.'
    return
  }

  users.push({ username: username.value, password: password.value })
  localStorage.setItem('registeredUsers', JSON.stringify(users))

  successMsg.value = 'Registrasi berhasil! Silakan login.'
  username.value = ''
  password.value = ''

  setTimeout(() => {
    router.push('/login')
  }, 1500)
}
</script>
