import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'bootstrap'

// import 'jquery'
import 'materialize-css'

import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'


import 'vuetify/dist/vuetify.min.css' 

Vue.config.productionTip = false


Vue.use(Vuetify)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
