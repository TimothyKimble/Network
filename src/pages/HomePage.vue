<template>
  <div class="home col-md-8">
    <div class="">
      <ActivityThread :activities="activities" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { activitiesService } from '../services/ActivitiesService'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await activitiesService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      activities: computed(() => AppState.activities)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
