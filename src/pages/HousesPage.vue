<template>
  <div class="housesPage">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="h in houses">
          <HouseCard :house="h" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'

export default {
  setup(){

    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error, '[getting Houses]')
      }
    }

    onMounted(() => {
      getHouses()
    })
    return {
      houses: computed(()=> AppState.houses)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
