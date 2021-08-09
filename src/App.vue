<template>
  <div class="container-fluid p-0">
    <div class="row w-100 m-0">
      <div class="col-md-2 border-right border-dark bg-dark p-0 StayForever d-flex align-items-center sticky-top goAway">
        <UserSide />
      </div>
      <div class="col-md-10 d-flex justify-content-center p-0 m-0">
        <div class="row w-100">
          <div class="col-md-12 p-0 m-0 ">
            <header class="StayForever sticky-top">
              <Navbar />
            </header>
            <main class="d-flex justify-content-center backgroundDys">
              <router-view />
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.backgroundDys {
background: #606c88;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.StayForever {
  max-height: 100vh;
}

</style>
