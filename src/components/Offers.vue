<template>
    <div>
        <div class="row">
            <div class="col offset-l2 offers-container">

                <!-- No offers card -->
                <div class="alert card" v-if="allOffers.length == 0">
                    <div class="card-content">
                    You haven't posted any offers yet
                    </div>
                </div>
                
                <!-- Offers -->
                <div :key="offer.id" v-for="offer in allOffers"  class="col s12 m12 l3 ">
                <div class="card small">
                    <div class="card-image">
                        <img :src="offerImagesURL + offer.photos[0]">
                        <span class="card-title">{{offer.name}}</span>
                    </div>
                    <div class="card-content">
                        <p>{{offer.description}}</p>
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

        <!-- Add Dialog -->
        <div id="addModal" class="modal">
            <div class="modal-content">
                <h4>Add a new offer</h4>
                <div class="input-field">
                    <label for="name">name</label>
                    <input v-model="mOfferName" id="name" class="form-control" type="text" req>
                </div>
                <div class="input-field">
                    <label for="name">description</label>
                    <input v-model="name" id="description" class="form-control" type="text" req>
                </div>
                <div class="price">
                    <div class="input-field">
                        <label for="price">price</label>
                        <input v-model="name" id="price" class="form-control" type="text" req>
                    </div>
                    <div class="input-field select">
                        <select id="price-description">
                            <option  selected>one time payment</option>
                            <option>per hour</option>
                            <option>per day</option>
                            <option>other</option>
                        </select>
                        <label for="price-description">price description</label>
                    </div>
                </div>

                <div class="input-field select" id="service-categories">
                    <select id="service-category" multiple>
                        <option  :key="serviceCategory._id" v-for="serviceCategory in allServiceCategories" :value="serviceCategory._id">{{serviceCategory.name}}</option>
                    </select>
                    <label for="service-category">Service Categories</label>
                </div>


            </div>
            <div class="modal-footer">
                <button class="modal-close waves-effect waves-white btn green" @click="handleAdd">Save</button>
                <button href="" class="modal-close waves-effect waves-white btn red">Cancel</button>
            </div>
        </div>
        <!-- End of add dialog -->

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
const config =  require('../config.js');
import { mapGetters, mapActions } from 'vuex';

export default {
    name:'Offers',
    computed: mapGetters(['allOffers']),
    components:{
    },
    data(){
        return{
            offerImagesURL: config.BACKEND_SERVER_IP + '/images/offer/',
            
            allServiceCategories:[{
                _id:"1",
                name:"Venue"
            },{
                _id:"2",
                name:"Catering"
            },{
                _id:"3",
                name:"Photography"
            },{
                _id:"4",
                name:"Car rental"
            },{
                _id:"5",
                name:"Apparel"
            },{
                _id:"6",
                name:"Tables and chairs"
            },{
                _id:"7",
                name:"Tents"
            }],
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
        ...mapActions(['fetchOffers','deleteOffer','addOffer','updateOffer']),
        
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
        this.fetchOffers()
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
