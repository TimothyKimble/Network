<template>
  <div class="home col-md-12 p-0 m-0">
    <div class="row w-100 m-0 justify-content-center d-flex p-0">
      <div class="col-md-12 p-0">
        <ProfileThread :profiles="profiles" />
      </div>
      <div class="col-md-8 p-0">
        <div>
          <ActivityThread :activities="activities" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import Pop from '../utils/Notifier'
import { profilesService } from '../services/ProfileService'
import { activitiesService } from '../services/ActivitiesService'
import { useRoute } from 'vue-router'
export default {
  name: 'ProfilePage',
  setup() {
    const router = useRoute()

    // state
    // mounted
    onMounted(async() => {
      try {
        const id = router.params.id
        await activitiesService.getActivityById(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
      try {
        const id = router.params.id
        await profilesService.getProfile(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      // state,
      // computeds
      activities: computed(() => AppState.currentActivities),
      profiles: computed(() =>
        AppState.profiles
      )
      // methods
    }
  }

}
</script>
