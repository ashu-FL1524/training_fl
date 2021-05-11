import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import cart from '../views/cart.vue'
import Myaccount from '../views/Myaccount.vue'
import Logout from '../views/Logout.vue'
import checkout from '../views/checkout.vue'
import orderplaced from '../views/orderplaced.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/Register',
    name: 'register',
    component: Register
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/Myaccount',
    name: 'myaccount',
    component: Myaccount
  },
  {
    path: '/Logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/orderplaced',
    name: 'orderpalced',
    component: orderplaced
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
