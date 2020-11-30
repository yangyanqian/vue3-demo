import { createRouter, createWebHistory } from 'vue-router';
import { childrenRoutes } from "./childrenRoutes.js";
console.log(childrenRoutes);

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: () => import("@/views/Home.vue"),
    children: childrenRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
