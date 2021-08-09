import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class TacosService {
  async getTacos() {
    try {
      const res = await api.get('api/ads')
      AppState.tacos = res.data
    } catch (err) {
      logger.error('No Tacos for you :(', err)
    }
  }
}

export const tacosService = new TacosService()
