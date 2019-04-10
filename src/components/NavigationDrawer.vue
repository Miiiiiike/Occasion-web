<template>
    <div class="col-lg-2 col-md-4 side-bar">
        <!-- <img src="../assets/logo.png" class="logo" /> -->
        <!-- <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a> -->
        <ul id="slide-out" class="sidenav">
            <li><div class="user-view">
                 <div class="background">
        <img src="http://localhost/images/offer/mercedes.jpg">
      </div>
      <a href="#user"><img class="circle" src="http://localhost/images/offer/hummer.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    
            <li><router-link to="/offers"> Offers</router-link></li> 
            <li><router-link to="/bookings"> Bookings</router-link></li> 
            <li><router-link to="/ratings"> Ratings and reviews</router-link></li> 
            <li><router-link to="/notifications"> Notifications</router-link></li> 
            <li><router-link to="/deliveries"> Deliveries</router-link></li> 
        </ul>
    </div>
</template>

<script>
export default {
    name:'NavigationDrawer',
    mounted(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
        
    }
}
</script>

<style scoped>

.logo{
    margin: auto;
    height: 150px;
}

a, a:hover, a:visited{
    text-decoration: none;
    
}

</style>
