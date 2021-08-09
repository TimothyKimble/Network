<template>
  <div class="row m-0 w-100">
    <div class="col-md-12 p-0">
      <div class="create-activity">
        <form @submit.prevent="createActivity" class="row w-100 m-0">
          <div class="col-md-12 p-0">
            <textarea class="w-100"
                      name="body"
                      id="body"
                      placeholder="What's Going On?"
                      required
                      v-model="state.newActivity.body"
            ></textarea>
            <input type="text" name="imgUrl" class="form-control" placeholder="Image URL" v-model="state.newActivity.imgUrl">
          </div>
          <div class="col-md-1 m-3">
            <button class="btn btn-warning" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { activitiesService } from '../services/ActivitiesService'
import { computed } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
export default {
  name: 'CreateActivity',
  setup() {
    const state = reactive({
      newActivity: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      async createActivity() {
        try {
          await activitiesService.postActivity(state.newActivity)
          Pop.toast('You made a Post!', 'success')
          state.newPost = {}
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
