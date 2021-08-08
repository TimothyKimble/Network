import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
class ActivitiesService {
  async getAll(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log(res.data.posts)
    AppState.activities = res.data.posts
  }

  async getActivityById(id) {
    try {
      const res = await api.get('api/profiles/' + id + '/posts/')
      AppState.currentActivities = res.data.activities
    } catch (error) {
      logger.log('Could not get posts')
    }
  }
}

export const activitiesService = new ActivitiesService()
