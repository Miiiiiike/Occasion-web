<template>
    <div class="col-lg-2 col-md-4 side-bar">
        <ul>
        <img src="../assets/logo.png" class="logo" alt="">
            <router-link to="/offers"> <li>Offers</li> </router-link>
            <router-link to="/bookings"> <li>Bookings</li> </router-link>
            <router-link to="/ratings"> <li>Ratings and reviews</li> </router-link>
            <router-link to="/notifications"> <li>Notifications</li> </router-link>
            <router-link to="/deliveries"> <li>Deliveries</li> </router-link>
            <v-input></v-input>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Navigation'
}
</script>

<style scoped>
.side-bar{
    background:#067ad8;
    color: #fff;
    height: 100vh;
    overflow: auto;

}

.side-bar ul{
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
}
.side-bar li{
    list-style: none;
    font-weight: bold;
    padding: 28px;
    transition: all 250ms;
    font-size: 16pt;
    /* border-top-right-radius:24pt; */
    /* border-bottom-right-radius:24pt; */

}
.side-bar li:hover{
    background: #066bbe;
    /* transform: scale(1.05); */
    padding-left: 32px;
}

.logo{
    margin: auto;
    height: 150px;
}
a, a:hover, a:visited{
    color: white;
}

</style>
