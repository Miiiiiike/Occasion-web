import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Offers from './components/Offers.vue'
import Bookings from './components/Bookings.vue'
import Registration from './views/Registration.vue'

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
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
