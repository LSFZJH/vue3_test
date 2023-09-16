import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login/index.vue'
import Layout from '../views/layout/index.vue'
import Data from '../views/data/index.vue'
import Home from '../views/home/index.vue'
import Detail from '../views/home/detail/index.vue'

const routerList: any = [
  {
    path: 'home',
    name: 'home',
    component: Home,
  },
  {
    path: 'home/detail',
    name: 'detail',
    component: Detail,
  },
  {
    path: 'data',
    name: 'Data',
    component: Data
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect:'/layout/home',
      children: routerList
    }
  ]
})

export default router
