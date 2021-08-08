import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class TacosService {
  async getTacos() {
    const res = await api.get('api/ads/')
    logger.log(res.data)
    AppState.tacos = res.data
    console.log(AppState.tacos)
  }
}

export const tacosService = new TacosService()
