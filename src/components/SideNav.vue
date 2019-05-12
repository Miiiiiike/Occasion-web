<template>
    <div class="sidebar col l2 hide-on-med-and-down">
        <ul clas="nav">
            <router-link to="/offers" class="nav-item">  <li>Offers</li> </router-link>
            <router-link to="/bookings" class="nav-item"> <li>Bookings</li></router-link> 
            <router-link to="/reviews" class="nav-item"> <li> Reviews</li> </router-link>
            <router-link to="/notifications" class="nav-item"><li> Notifications</li></router-link> 
            <router-link to="/deliveries" class="nav-item"> <li>Deliveries</li> </router-link>
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
    padding: 0px;
}

.sidebar ul{
    padding: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 80px;
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
