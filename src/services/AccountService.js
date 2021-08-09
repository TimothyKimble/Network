import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class AccountService {
  async editAccount(account) {
    try {
      const res = await api.put('/account', account)
      AppState.account = res.data
      this.getAccount()
    } catch (error) {
      logger.error('Failed to Edit', error)
    }
  }

  async getActivityById(id) {
    try {
      const res = await api.get(`api/account/${id}/posts`)
      AppState.currentActivities = res.data.posts
      console.log(AppState.currentActivities)
    } catch (error) {
      logger.log('Could not get posts', error)
    }
  }

  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
