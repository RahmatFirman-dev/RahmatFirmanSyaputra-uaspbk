
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

import Home from '@/pages/Home.vue'
import MateriList from '@/pages/MateriList.vue'
import MateriDetail from '@/pages/MateriDetail.vue'
import Favorit from '@/pages/Favorit.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/materi', component: MateriList },
  { path: '/materi/:id', component: MateriDetail, meta: { requiresAuth: true } },
  { path: '/favorit', component: Favorit, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  userStore.loadUser() 

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next('/login') 
  } else {
    next() 
  }
})

export default router
