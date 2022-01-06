import { createRouter, createWebHashHistory } from 'vue-router';

// app router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/app',
      name: 'app',
      component: () => import('/@/views/Init/index.vue'),
    },
  ],
});
