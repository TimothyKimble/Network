<template>
  <div class="row w-100 my-5 mx-0 CardShadowing activityGradient text-light grow">
    <div class="col-md-12 p-0 m-0 w-100">
      <div class="row w-100 p-0 mx-0 d-flex justify-content-between border-bottom border-light ">
        <div class="col-md-4 p-2 m-1">
          <!-- NOTE @click.stop prevents the parent element from being clicked -->
          <router-link router-link :to="{ name: 'ProfilePage', params: {id: activity.creator.id } }" class="creator w-100 d-flex">
            <img class="h-100 rounded-pill m-0 p-0"
                 :src="activity.creator.picture"
                 alt=""
                 srcset=""
            >
            <span class="d-flex align-self-center pl-1">{{ activity.creator.name }}</span>
          </router-link>
        </div>
        <div class="col-md-2 p-2 d-flex m-1 justify-content-center align-items-center" v-if="account.id === activity.creatorId">
          <button class="btn btn-danger text-center">
            Delete
          </button>
        </div>
      </div>
      <div class="row w-100 p-0 mx-0 d-flex justify-content-start">
        <div class="col-md-12
 p-3"
        >
          <h6 class="text-left">
            {{ activity.body }}
          </h6>
        </div>
      </div>
      <div class="row w-100 p-0 mx-0 d-flex justify-content-center">
        <div class="col-md-12 p-0">
          <img :src="activity.imgUrl" alt="" class="w-100">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { activitiesService } from '../services/ActivitiesService'
export default {
  props: {
    activity: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-img {
  height: 200px;
  width: 250px;
  object-fit: cover;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.creator{
  height: 3em;
}
.activityGradient {
background: #457fca;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #5691c8, #457fca);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #5691c8, #457fca); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

text-shadow: 1px 1px black;
border-radius: 15px;

}
.CardShadowing {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.grow {
transition: all .3s ease-in-out;
}

.grow:hover {
transform: scale(1.04);
}
</style>
