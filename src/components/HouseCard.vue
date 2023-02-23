<template>
        <div class="HouseCard card card-size my-2 rounded-top">
            <router-link :to="{ name: 'House', params: { houseId: house.id } }">
                <img :src="house.imgUrl" alt="" class="house-img rounded-top">
            </router-link>
            <div class="card-body">
                <p><b>{{ house.bedrooms }}bed  {{ house.bathrooms }}bath | ${{ house.price }}</b></p>
            </div>
            <div class="card-footer text-end" v-if="showSeller">
                <span class="me-2">{{ house.seller.name }}</span>
                <img :src="house.seller.picture" :alt="house.seller.name" :title="house.seller.name" height="40" width="40"
                class="rounded-circle">
            </div>
        </div>
</template>


<script>
import { House } from '../models/House.js';

export default {
    props: {
        house: { type: House, required: true },
        showSeller: { type: Boolean, default: true }
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

.card-size{
    height: 20em;
}

.house-img{
    height:12em;
}

</style>