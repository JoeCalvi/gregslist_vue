import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HouseService {

    async getHouses() {
        const res = await api.get('auth/api/houses')
        logger.log(res.data)
    }

}

export const housesService = new HouseService()