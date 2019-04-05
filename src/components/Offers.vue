<template>
    <div>
        <div :key="offer.id" v-for="offer in offers" class="card">
            
        </div>
    </div>
</template>

<script>
export default {
    name:'Offers',
    data(){
        return{
            offers:[]

        }
    }
}
</script>

<style>

</style>
