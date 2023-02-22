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
  <div class="row sticky-bottom" v-if="account.id">
        <div class="col-12 text-end">
          <button class="fs-5 btn btn-dark" data-bs-toggle="modal" data-bs-target="#test-modal">
            Add Listing
          </button>
        </div>
  </div>

  <Modal id="test-modal" modal-title="Add a House">
      <HouseForm />
    </Modal>
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
      houses: computed(()=> AppState.houses),
      account: computed(()=> AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
