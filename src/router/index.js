import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        
        {
          path: '/category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/SubCategory/index.vue'),
        },
        {
          path: '/category/:id',
          name: 'category',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('@/views/Detail/index.vue'),
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('@/views/Cart/index.vue'),
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: () => import('@/views/Checkout/index.vue'),
        },
        {
          path: '/pay',
          name: 'pay',
          component: () => import('@/views/Pay/index.vue'),
        },
        {
          path: '/paycallback',
          name: 'paycallback',
          component: () => import('@/views//Pay/PayBack.vue'),
        }
       
      ]
  },
    {
      path: '/login',
      name: 'login',
    
      component: Login,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
