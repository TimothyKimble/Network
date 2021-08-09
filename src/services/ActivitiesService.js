import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { convertToQuery } from '../utils/Query'
import { api } from './AxiosService'
import Pop from '../utils/Notifier'
class ActivitiesService {
  async getAll(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log(res.data)
    AppState.activities = res.data
  }

  async getActivityById(id) {
    try {
      const res = await api.get(`api/profiles/${id}/posts`)
      AppState.currentActivities = res.data.posts
      console.log(AppState.currentActivities)
    } catch (error) {
      logger.log('Could not get posts', error)
    }
  }

  async postActivity(activity) {
    try {
      const res = await api.post('api/posts', activity)
      this.getAll()
    } catch (error) {
      logger.log('Could not post', error)
    }
  }

  async destroyActivity(id) {
    await api.delete('api/posts/' + id)
    await this.getAll()
  }

  async addVote(activityid, profile) {
    try {
      const res = await api.post(`api/posts/${activityid}/like`, profile)
      await this.getAll()
    } catch (error) {
      Pop.toast('Error liking post', 'error')
    }
  }
}

export const activitiesService = new ActivitiesService()
