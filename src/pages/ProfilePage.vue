<template>
  <div class="home col-md-12">
    <ProfileThread :profiles="profiles" />
    <div v-for="a in activities" :key="a.id">
      <ActivityThread :activity="a" />
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
  name: 'Profile',
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
