import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/toolbar',
    name: 'toolbar',
    component: () => import('../views/Toolbar.vue'),
    children:[
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
    ]
  },
  {
    path: '/register-admin',
    name: 'register-admin',
    component: () => import('../views/Register-admin.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/flooter',
    name: 'flooter',
    component: () => import('../views/Flooter.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../views/Navbar.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/manageproduct',
    name: 'manageproduct',
    component: () => import('../views/ManageProduct.vue')
  },
  {
    path: '/manageorder',
    name: 'manageorder',
    component: () => import('../views/ManageOrder.vue')
  },
  {
    path: '/managecart',
    name: 'managecart',
    component: () => import('../views/ManageCart.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
