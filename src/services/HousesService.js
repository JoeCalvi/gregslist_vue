import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HouseService {

    async getHouses() {
        const res = await api.get('auth/api/houses')
        AppState.houses = res.data.map(h => new House(h))
        logger.log(AppState.houses)
    }

    async createHouse(houseData) {
        const res = await api.post('auth/api/houses', houseData)
        AppState.houses.push(new House(res.data))
    }

}

export const housesService = new HouseService()