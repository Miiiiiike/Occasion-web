<template>
    <div >
        <!-- <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">home</router-link>
             <router-link to="/registration" class="nav-item">Registation</router-link>
        </div> -->
            
            <div class="row">
                <div class="col offset-l2 bookings-container">
                    
                    <div class="alert card " v-if="allBookings.length == 0 && allRequests.length == 0">
                        <div class="card-content">
                            You haven't got any bookings yet
                        </div>
                    </div>
                    
                    <div :key="booking.id" v-for="booking in allRequests"  class="col s12 m12 l ">
                    <div class="card teal white-text">
                        <div class="card-content">
                            <h5>Booking Request for {{booking.offer.name}}</h5>
                            <p>from {{booking.startDate}} to {{booking.endDate}}</p>
                        </div>
                        <div class="card-action" v-if="!booking.confirmed">
                            <a href="#">Accept</a>
                            <a href="#" class="right">Decline</a>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col l12 offset-l2" style="width:83%; height:100%">
                    <Calendar 
                    view="month"
                    :taskView="false"/>
                </div>
            </div>

        
    </div>
</template>

<script>
import Axios from 'axios';
const config = require ('../config.js');
import { mapGetters, mapActions } from 'vuex';
import 'tui-calendar/dist/tui-calendar.css'
import { Calendar } from '@toast-ui/vue-calendar'

export default {
    name:'Offers',
    computed: mapGetters(['allBookings','allRequests']),
    components:{
        Calendar
    },
    data(){
        return{
            offerImagesURL: config.BACKEND_SERVER_IP + '/images/offer/',
            //data for the add offer modal
            mOfferName:'',
            mOfferDescription:'',
            mPrice:'',
            mPriceDescription:'',
            mServiceCategories:[],

            //data for the delete modal
            deleteID:'' // to store id of the item that is to be deleted
        }
    },
    
    methods:{
        ...mapActions(['fetchBookings','fetchRequests','deleteBooking','addBooking','updateBooking']),
        
        goToLogin() {
            this.$router.push('/login')
        },
        setDeleteId(id){
            this.deleteID = id
        },
        handleDelete(e){
            e.preventDefault()
            console.log(this.deleteID)
            this.deleteOffer(this.deleteID)
        },
        handleAdd(){
            let newOffer = {
                name: this.mOfferName,
                description: this.mOfferDescription ,
                price : this.mPrice,
                priceDescription: this.mPriceDescription,
                serviceProvider: localStorage.getItem("_id"),
                serviceCategories: this.mServiceProviders
            }
            this.addOffer(newOffer)
        },
        loadServiceCategories(){
            
        }
        
    },
    loadOffers(){
        let token = localStorage.getItem('token')
        if(token == null || token ==''){ 
            this.goToLogin();            

        }else{
            // console.log(localStorage.getItem('token'))
            var header = {
                headers: {'Authorization': "bearer " + token}
            };

            Axios.get(`${config.BACKEND_SERVER_IP}/offersbyprovider`,header)
                .then((response)=>{
                    this.offers = response.data
                })
                .catch((err)=>{

                })

        }
    },
    created(){
        this.fetchBookings()
        this.fetchRequests()
    },
    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {inDuration:275});

            // console.log('added the event listener')
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {inDuration:275});
        });
    }
      

}
      
       
</script>

<style scoped >
*{
    box-sizing: border-box;
    margin: 0px;
}


.btn-floating{
    position: fixed;
    right: 16px;
    bottom:32px;
}


.bookings-container{
 margin-top: 60pt;
}

.alert{
    margin: auto;
}

.card-action a{
    color:white
}
.calendar-container{
    margin-top:120pt;
}

</style>
