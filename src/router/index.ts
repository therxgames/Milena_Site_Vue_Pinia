import { HomeView, WorksView, WorkDetailView } from '@views'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/works', component: WorksView, name: 'Works' },
  { path: '/works/:id', component: WorkDetailView, meta: { hidden: true } },
  // { path: '/about', component: WorkDetailView, name: 'About' },
  // { path: '/contact', component: WorksView, name: 'Contact' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
