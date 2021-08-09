<template>
  <div class="home col-md-8">
    <div class="row w-100 m-0">
      <div class="col-md-8 p-0">
        <ActivityThread :activities="activities.posts" />
      </div>
      <div class="col-md-2 p-0 m-5">
        <Taco />
      </div>
      <button class="btn btn-info" v-if="activityPages.newer" @click="changePage('?' + activityPages.newer)">
        Previous
      </button>
      <div class="" v-if="!activityPages.newer"></div>
      <div>{{ activityPages.page }}</div>
      <div v-if="!activityPages.older"></div>
      <button class="btn btn-info" v-if="activityPages.older" @click="changePage('?' + activityPages.older)">
        Next
      </button>
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
      activities: computed(() => AppState.activities),
      activityPages: computed(() => AppState.activityPages),
      async changePage(query) {
        try {
          await activitiesService.getAll(query)
        } catch (error) {
          Pop.toast("Can't Get Page", 'error')
        }
      }
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
