<template>
    <div class="houseForm">
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="bedrooms" class="form-label">bedrooms</label>
                <input required class="form-control" type="number" v-model="editable.bedrooms" id="bedrooms" name="bedrooms" placeholder="bedrooms...">
            </div>
            <div class="mb-3">
                <label for="bathrooms" class="form-label">bathrooms</label>
                <input required class="form-control" type="number" v-model="editable.bathrooms" id="bathrooms" name="bathrooms" placeholder="bathrooms...">
            </div>
            <div class="mb-3">
                <label for="levels" class="form-label">levels</label>
                <input required class="form-control" type="number" v-model="editable.levels" id="levels" name="levels" placeholder="levels...">
            </div>
            <div class="mb-3">
                <label for="imgUrl" class="form-label">imgUrl</label>
                <input required class="form-control" type="text" v-model="editable.imgUrl" id="imgUrl" name="imgUrl" placeholder="imgUrl...">
            </div>
            <div class="mb-3">
                <label for="year" class="form-label">year</label>
                <input required class="form-control" type="number" v-model="editable.year" id="year" name="year" placeholder="year...">
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input required class="form-control" type="number" v-model="editable.price" id="price" name="price" placeholder="price...">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">description</label>
                <textarea class="form-control" v-model="editable.description" name="description" id="description" rows="3"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'

export default {
    setup(){
        const editable = ref({})
        return {
            editable,
            async handleSubmit(){
                try {
                    const house = editable.value.id
                        ? await housesService.editHouse(editable.value)
                        : await housesService.createHouse(editable.value)
                        
                        editable.value = {}

                        if(house?.id) {
                            router.push({ name: 'House', params: { houseid: house.id }})
                        }
                } catch (error) {
                    Pop.error(error, '[handling submit]')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>