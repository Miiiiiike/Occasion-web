import Vuex from 'vuex';
import Vue from 'vue';
import offers from './modules/offers'
import bookings from './modules/bookings'
import deliveries from './modules/deliveries'
import reviews from './modules/reviews'
import registrationRequests from './modules/registrationRequests'
import couriers from './modules/couriers'

//Load vuex
Vue.use(Vuex)

//Create store
export default new Vuex.Store({
    modules:{
        offers,
        bookings,
        deliveries,
        reviews,
        registrationRequests,
        couriers
    }
})