<template>
    <div class="HousePage" v-if="house">
        <div class="container">
            <div class="row my-3">
                <div class="col-md-8 m-auto">
                    <HouseCard :house="house" :showSeller="false" />
                    <div class="card my-2">
                        <div class="card-body">
                            <p>
                                {{ house.description }}
                            </p>
                            <div>
                                <ul>
                                <li>Year: {{ house.year }}</li>
                                <li>Levels: {{ house.levels }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                        <div>
                            <button @click="removeHouse" v-if="account.id == house.seller.id" class="btn btn-danger">remove
                            listing</button>
                        </div>
                        <div>
                            <span class="me-2">{{ house.seller.name }}</span>
                            <img height="64" width="64" :src="house.seller.picture" :alt="house.seller.name">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { router } from '../router.js';
import { AppState } from '../AppState.js'
import { housesService } from '../services/HousesService.js'
import Pop from '../utils/Pop.js'



export default {
    setup(){
        const route = useRoute()
        const houseId = route.params.houseId

        async function getHouseById() {
            try {
                await housesService.getHouseById(houseId)
            } catch (error) {
                Pop.error(error, '[getting by Id]')
            }
        }

        onMounted(() => {
            getHouseById()
        })
        return {
            houseId,
            account: computed(() => AppState.account),
            house: computed(() => AppState.house),

            async removeHouse() {
                try {
                    await housesService.removeHouse(houseId)
                    router.push({ name: 'Houses' })
                } catch (error) {
                    Pop.error(error, '[removing house]')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>