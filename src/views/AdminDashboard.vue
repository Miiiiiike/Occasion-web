<template>
    <div >
        <!-- <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">home</router-link>
             <router-link to="/registration" class="nav-item">Registation</router-link>
        </div> -->
        <NavBar/>
        <div class="row">
            <SideNav :menuItems="this.navItems" />
            <NavigationDrawer />
            <!-- <div class="col-lg-10 col-md-8"> -->
            <router-view></router-view>

            <!-- </div> -->

        </div>
    </div>
</template>

<script>
import NavigationDrawer from '../components/NavigationDrawer';
import NavBar from '../components/admin/NavBar';
import SideNav from '../components/admin/SideNav';

export default {
    name:'Home',
    components:{
        NavigationDrawer,
        NavBar,
        SideNav
    },
    data(){
        return {
        navItems:[
            {
                name:"Registration Requests",
                path:"/registrationrequests"
            },
            {
                name:"Couriers",
                path:"/couriers"
            },
            {
                name:"Deliveries",
                path:"/deliveries"
            },
            {
                name:"Statistics",
                path:"/statistics"
            },
            {
                name:"Reports",
                path:"/reports"
            }
        ]
        }
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
            // console.log(localStorage.getItem('token'))
        }
    }
}
</script>

<style >
*{
    box-sizing: border-box;
    margin: 0px;
}

body{
    background: #f4f4f4;

}

.main{
    margin-top: 1%;
}


</style>
