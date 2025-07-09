<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold text-primary" to="/">Belajar Front-End</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navCollapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><RouterLink class="nav-link" to="/">Home</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="/materi">Materi</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link" to="/favorit">Favorit</RouterLink></li>
        </ul>

        <div class="d-flex align-items-center">
          <span v-if="store.isLoggedIn" class="me-2 text-primary">👤 {{ store.username }}</span>

          <div v-if="!store.isLoggedIn" class="d-flex gap-2">
            <RouterLink to="/login" class="btn btn-outline-primary btn-sm">Login</RouterLink>
            <RouterLink to="/register" class="btn btn-primary btn-sm">Register</RouterLink>
          </div>

          <button v-else @click="store.logout()" class="btn btn-danger btn-sm ms-2">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
const store = useUserStore()
</script>
