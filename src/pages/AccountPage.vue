<template>
  <div class="row w-100">
    <div class="home col-md-12 d-flex">
    <AccountInfo :profile="profile" />
  </div>
  <div class="col-md-10 d-flex">
    <ActivityThread :activities="activities" />
  </div>
  </div>

</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import Pop from '../utils/Notifier'
import { accountService } from '../services/AccountService'
import { useRoute } from 'vue-router'
import { activitiesService } from '../services/ActivitiesService.js'
export default {
  name: 'Account',
  setup() {
    const route = useRoute()

    // state
    // mounted
    onMounted(async() => {
      try {
        const id = route.params.id
        await activitiesService.getActivityById(AppState.account.id)
        await accountService.getAccount(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      // state,
      // computeds
      activities: computed(() => AppState.currentActivities),
      profile: computed(() => AppState.account)
      // methods
    }
  }

}
</script>
