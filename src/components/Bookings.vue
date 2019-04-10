<template>
    <div class="main col-lg-10 col-md-8">
        <!-- <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">home</router-link>
             <router-link to="/registration" class="nav-item">Registation</router-link>
        </div> -->
        <div class="container">
            <div class="alert alert-danger " v-if="!bookings">You have't got any bookings</div>
        </div>

        <div class="container offer-container">
            <div  :key="booking.id" v-for="booking in bookings" class="card " >
                <img class="card-img-top" 
                    v-bind:src="'http://localhost:3000/images/offer/' + offer.photos[0]" x
                    alt="offer_image">
                <div class="card-body">
                    <h5 class="card-title">{{booking.name}}</h5>
                    <p class="card-text">{{booking.description}}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            
            

        </div>


        
        

    </div>
</template>

<script>
import Axios from 'axios';
const config = require ('../config.js');

export default {
    name:'Bookings',
    components:{
    },
    data(){
        return{
            bookings:null
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
            console.log(localStorage.getItem('token'))
            var headers = {
                headers: {'Authorization': "bearer " + token}
            };

            Axios.get(`${config.BACKEND_SERVER_IP}/bookings`,headers)
            
            .then((response)=>{
                this.bookings = response.data
            })
            .catch((err)=>{

            })

        }
    }
}
</script>

<style scoped >
*{
    box-sizing: border-box;
    margin: 0px;
}
*{
    color:#000;
}


.main{

    color: white;
    height: 100vh;
    margin: 0px;
    padding: 16px;
    
}

.offer-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 80pt;


}
    
.card{
    margin: 16px;
}
/* .card-img-top{
} */

@media(max-width: 1200px){
    .offer-container{
        grid-template-columns: 1fr;
    }
}

.container{
    margin: 16px;
}



</style>
