<template>
    <div >
        <!-- <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">home</router-link>
             <router-link to="/registration" class="nav-item">Registation</router-link>
        </div> -->
            <div class="alert alert-danger " v-if="!offers">You have't posted any offers yet</div>
            <div class="row">
                <div class="col offset-l2 offers-container">
                    
                    <div :key="offer.id" v-for="offer in offers"  class="col s12 m12 l3 ">
                    <div class="card darken-1  small">
                        <div class="card-image">
                            <img  :src="offerImagesURL + offer.photos[0]">
                            <span class="card-title">{{offer.name}}</span>
                        </div>
                        <div class="card-content">
                            <p>{{offer.description}}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Details</a>
                            <a href="#" class="right">Remove</a>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        
  <a class="btn-floating btn-large waves-effect blue right"><i class="material-icons">add</i></a>

    <!-- <img src="http://localhost/images/offer/hummer.jpg" alt="" class="materialboxed"> -->
    </div>
</template>

<script>
import Axios from 'axios';
const config =  require('../config.js');



export default {
    name:'Offers',
    components:{
    },
    data(){
        return{
            offers:null,
            offerImagesURL: config.BACKEND_SERVER_IP + '/images/offer/'
        }
    },
    methods:{
        goToLogin() {
            this.$router.push('/login')
        }
    },
    created(){

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
    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {inDuration:275});
            // console.log('added the event listener')
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


</style>
