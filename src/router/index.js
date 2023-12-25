import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue' 
import Login from '../components/Login.vue' 
import Home from '../components/Home.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update
    },

    
  ]
})

export default router
