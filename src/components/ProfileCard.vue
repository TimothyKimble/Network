<template>
  <div class="row w-100 mt-5 d-flex justify-content-between m-0">
    <div class="col-md-9 p-0">
      <div class="row w-100 m-0 px-3 d-flex justify-content-between">
        <div class="col-md-9 d-flex justify-content-center flex-column p-0 CardShadowing  bg-dark">
          <div class="row w-100 m-0">
            <div class="col-md-12 p-0">
              <img class="coverImage" :src="profile.coverImg" alt="">
            </div>
          </div>
          <div class="row w-100 m-0 d-flex justify-content-center">
            <div class="col-md-12 col-8 p-0">
              <div class="row w-100 m-0">
                <div class="col-md-3 spill">
                  <div class="row w-100 m-0">
                    <div class="col-md-12 p-0">
                      <img class="rounded-pill w-100 h-100 " :src="profile.picture" alt="">
                    </div>
                    <div class="col-md-12 p-0 d-flex justify-content-end" v-if="profile.graduated === true">
                      <aside class="spillTwo">
                        <i class="fas fa-user-graduate fa-3x text-warning"></i>
                      </aside>
                    </div>
                  </div>
                </div>
                <div class="col-md-9 justify-content-end mt-1 p-0">
                  <div class="row w-100 d-flex justify-content-end m-0">
                    <div class="col-md-8 p-0">
                      <div class="row w-100 d-flex justify-content-between m-0">
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                          <a :href="profile.github"><i class="w-100 fab fa-github fa-3x "></i></a>
                        </div>
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                          <a :href="profile.linkedin"><i class="w-100 fab fa-linkedin fa-3x "></i></a>
                        </div>
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                          <a :href="profile.resume"><i class="w-100 fas fa-address-card fa-3x "></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100 m-0">
            <div class="col-md-12 p-0">
              <div><h6>{{ profile.class }}</h6></div>
              <div><h5> {{ profile.name }} </h5></div>
              <div>{{ profile.bio }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2 p-0">
      <div class="row w-100 m-0 d-flex justify-content-center">
        <div class="col-md-6 p-0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
import TacoCard from '../components/TacoCard.vue'
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.coverImage {
  width: 100%;
  max-height: 300px;
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
.spill {
  position: relative;
  bottom: 3rem;
}
.spillTwo {
  position: relative;
  bottom: 2.5rem;
}

</style>
