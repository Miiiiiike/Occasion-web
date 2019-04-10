<template>
    <div class="sidebar col l2 hide-on-med-and-down">
        <ul clas="nav">
            <li><router-link to="/offers" class="nav-item"> Offers</router-link></li> 
            <li><router-link to="/bookings" class="nav-item"> Bookings</router-link></li> 
            <li><router-link to="/ratings" class="nav-item"> Ratings and reviews</router-link></li> 
            <li><router-link to="/notifications" class="nav-item"> Notifications</router-link></li> 
            <li><router-link to="/deliveries" class="nav-item"> Deliveries</router-link></li> 
        </ul>

    </div>
    
    
</template>

<script>
export default {
    name:'SideNav'
}
</script>

<style scoped>
.sidebar{    
    height: 100vh;
    background:#fff;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0px;
}

.sidebar .nav{
    padding: 0px;
    margin-left: 0px;
    margin-right: 0px;
}

.sidebar ul li{
    padding: 16px;
    margin: 2px;
    transition: 500ms all;

}
.sidebar ul li:hover{
    background: #f2f2f2;
    transition: 500ms all;
}

a{
    color: black;
    font-weight: bold;
    font-size: 14pt;
}

</style>
