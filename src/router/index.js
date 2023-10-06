import { createRouter, createWebHistory } from 'vue-router'
import Homeshop from '../views/Homeshop.vue'
import productdetai from '../components/ProductDetai.vue'
import ClickShop from '../components/ClickShop.vue'
import TotalP from '../components/TotalPrice.vue'
import orderList from '../components/OrderList.vue'

import testCard from '../views/testCardA.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeshop
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/testCard',
      name: 'testCard',
      component: testCard
    },
    {
      path: '/TotalP',
      name: 'TotalP',
      component: TotalP
    },
    {
      path: '/ClickShop',
      name: 'ClickShop',
      component: ClickShop
    },
    {
      path: '/productdetai',
      name: 'productdetai',
      component: productdetai 
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
