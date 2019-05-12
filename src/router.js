import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import AdminLogin from './views/AdminLogin.vue'
import Home from './views/Home.vue'
import Offers from './components/Offers.vue'
import Statistics from './components/Statistics.vue'
import Reports from './components/Reports.vue'
import Bookings from './components/Bookings.vue'
import RegistrationRequests from './components/admin/RegistrationRequests.vue'
import Couriers from './components/admin/Couriers.vue'
import Reviews from './components/Reviews.vue'
import Deliveries from './components/Deliveries.vue'
import Registration from './views/Registration.vue'
import AdminDashboard from './views/AdminDashboard.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/offers',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/offers',
          component:Offers
        },
        {
          path:'/bookings',
          component:Bookings
        },
        {
          path:'/reviews',
          component:Reviews
        },
        {
          path:'/deliveries',
          component:Deliveries
        }
      ]
    },
    {
      path:'/admin',
      redirect:'/admin/dashboard'
    },
    {
      path:'/admin/dashboard',
      component:AdminDashboard,
      children:[
        {
          path:'/registrationrequests',
          component:RegistrationRequests
        },
        {
          path:'/couriers',
          component:Couriers
        },
        {
          path:'/reports',
          component:Reports
        },
        {
          path:'/statistics',
          component:Statistics
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/adminlogin',
      name: 'admin_login',
      component: AdminLogin
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
