<template>
    <div class="home">
        <!-- <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">home</router-link>
             <router-link to="/registration" class="nav-item">Registation</router-link>
        </div> -->
        <div class="row">
            <Navigation />

            <div class="col-lg-10 col-md-8">
                <div class="main">
                    main
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation';

export default {
    name:'Home',
    components:{
        Navigation
    },
    methods:{
        goToLogin() {
            this.$router.push('/login')
        }
    },
    created(){
        if(localStorage.getItem('token') == null || localStorage.getItem('token') ==''){ 
            this.goToLogin();            

        }else{
            console.log(localStorage.getItem('token'))
        }
    }
}
</script>

<style >
*{
    box-sizing: border-box;
    margin: 0px;
}

.home{
    background: #f4f4f4;
}

.main{
    margin-top: 1%;
}


</style>
