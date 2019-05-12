<template>
    <div class="sidebar col l2 hide-on-med-and-down">
        <ul clas="nav">
            <router-link v-for="item in menuItems" :key="item.name" :to="item.path" class="nav-item">  <li>{{item.name}}</li> </router-link>
        </ul>
    </div>
    
    
</template>

<script>
export default {
    name:'SideNav',
    props:{
        menuItems:{
            type:Array,
            required:true
        }
    }
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
