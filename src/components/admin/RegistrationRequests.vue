<template>
    <div>
        <div class="row">
            <div class="col offset-l2 requests-container">

                <!-- No offers card -->
                <div class="alert card" v-if="allRequests.length == 0">
                    <div class="card-content">
                        There are no registration requests
                    </div>
                </div>

                <!-- Offers -->
                <div :key="request.id" v-for="request in allRequests.serviceProviders"  class="col">
                <div class="card green white-text">
                    <div class="card-content">
                        <div class="card-title">
                            {{request.name}}
                        </div>
                    </div>
                    <div class="card-action">
                        <a href="#" class="white-text">View trade licence</a>
                        <a href="#deleteModal" class="right modal-trigger white-text" @click="setDeleteId(offer._id)">Accept</a>
                    </div>
                </div>
                </div>

                <div :key="request.id" v-for="request in allRequests.couriers"  class="col">
                <div class="card blue">
                    <div class="card-content white-text">
                        <div class="card-title">
                            {{request.firstName}} {{request.lastName}}
                        </div>
                    </div>
                    <div class="card-action">
                        <a href="#">Details</a>
                        <a href="#deleteModal" class="right modal-trigger" @click="setDeleteId(offer._id)">Remove</a>
                    </div>
                </div>
                </div>


            </div>
            
        </div>

        <a class="btn-floating btn-large blue right modal-trigger" href="#addModal"><i class="material-icons">add</i></a>


        <!-- Delete confirmation dialog-->
        <div class="row">
            <div id="deleteModal" class="modal col">
                <div class="modal-content">
                    <h5>Are you sure you want to delete this offer?</h5>
                </div>
                <div class="modal-footer">
                    <button class="modal-close waves-effect waves-white btn green" @click="handleDelete">Yes</button>
                    <button class="modal-close waves-effect waves-white btn red">No</Button>
                </div>
            </div>
        </div>
        <!-- End of Delete Modal -->
    </div>
</template>

<script>
import Axios from 'axios';
const config =  require('../../config.js');
import { mapGetters, mapActions } from 'vuex';

export default {
    name:'RegistrationRequests',
    computed: mapGetters(['allRequests']),
    components:{
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
        ...mapActions(['fetchRequests','deleteOffer','addOffer','updateOffer']),
        
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

.card{
    height: 15%;
}

.btn-floating{
    position: fixed;
    right: 16px;
    bottom:32px;
}


.requests-container{
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
