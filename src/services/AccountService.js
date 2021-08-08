import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class AccountService {
  async getAccount(query = {}) {
    try {
      const res = await api.get('/account' + convertToQuery(query))
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
