import { createRouter, createWebHistory } from 'vue-router';

export const routerHistory = createWebHistory();

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/Home/index.vue'),
    },
  ],
});

export { routers };
