<template>
    <div>
        <div class="row">
            <div class="col offset-l2 offers-container">

                <!-- No offers card -->
                <div class="alert card" v-if="allDeliveries.length == 0">
                    <div class="card-content">
                    You don't have any deliveries
                    </div>
                </div>
                <!-- Offers -->
                <div :key="delivery.id" v-for="delivery in allDeliveries"  class="col s12 m12 l3 ">
                <div class="card small ">
                    <div class="card-image">
                        <img :src="offerImagesURL + delivery.offer.photos[0]">
                        <span class="card-title">{{delivery.offer.name}}</span>
                    </div>
                    <div class="card-content">
                        <p>{{delivery.status}}</p>
                    </div>
                    <div class="card-action">
                        <a href="#">View</a>
                        <a v-if="delivery.status=='in progress'" class="right">Cancel</a>
                    </div>
                </div>

            </div>
            </div>
            
        </div>



        

    </div>
</template>

<script>
import Axios from 'axios';
const config =  require('../config.js');
import { mapGetters, mapActions } from 'vuex';

export default {
    name:'Offers',
    computed: mapGetters(['allDeliveries']),
    components:{
    },
    data(){
        return{
            offerImagesURL: config.BACKEND_SERVER_IP + '/images/offer/',

        }
    },
    
    methods:{
        ...mapActions(['fetchDeliveries','deleteOffer','addOffer','updateOffer']),
        
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
            //TODO: load service categories
        }
    },
    
    created(){
        this.fetchDeliveries()
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

.card{
    height: 15%;
}

.btn-floating{
    position: fixed;
    right: 16px;
    bottom:32px;
}


.offers-container{
 margin-top: 60pt;
}

.alert{
    margin: auto;
}


.price{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.price div{
    flex: 1;
}

.modal-class{
    margin:18px;
}

#deleteModal{
    width: 50%;
}

#service-categories{
    margin-bottom: 120pt;
}
</style>
