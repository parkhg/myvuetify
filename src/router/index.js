import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/common/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/components/common/About.vue') },
  { path: '/dashboard', name: 'vwDashboard', component: () => import('@/views/dashboard/DashBoard.vue') },
  { path: '/setting', name: 'vwSetting', component: () => import('@/components/common/Setting.vue') },
  { path: '/about', name: 'vwAbout', component: () => import('@/components/common/About.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
