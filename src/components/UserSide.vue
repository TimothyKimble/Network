<template>
  <div class="row w-100 m-0 ">
    <div class="col-md-12 p-0 ">
      <div class="row m-0 w-100 ">
        <span class="d-flex justify-content-center col-md-12 p-0">
          <div class="row w-100">
            <button
              class="btn btn-outline-primary text-uppercase col-md-12"
              @click="login"
              v-if="!user.isAuthenticated"
            >
              Login
            </button>

            <div class="dropdown col-md-12 p-0 d-flex justify-content-center flex-column align-items-center text-break p-2 text-shadow" v-else>
              <div class="row m-0 justify-content-center d-flex">
                <h1 class="col-md-12 p-0 text-center">Your Profile</h1>
                <router-link :to="{name: 'Account'}" class="col-md-12 p-2 d-flex justify-content-center"><div><img class="w-100 rounded-pill" :src="account.picture" alt=""></div></router-link>
                <p class="col-md-12 p-0 text-center">{{ account.class }}</p>
                <h4 class="col-md-12 p-0 text-center">{{ account.name }}</h4>
                <p class="col-md-12 p-0 text-center">{{ user.name }}</p>
              </div>

              <div class="row m-0 w-100 d-flex justify-content-center flex-column align-items-center">
                <div class="col-3 p-3 d-flex justify-content-center align-items-center">
                  <a :href="account.github"><i class="w-100 fab fa-github fa-3x "></i></a>
                </div>
                <div class="col-3 p-3 d-flex justify-content-center align-items-center">
                  <a :href="account.linkedin"><i class="w-100 fab fa-linkedin fa-3x "></i></a>
                </div>
                <div class="col-3 p-3 d-flex justify-content-center align-items-center">
                  <a :href="account.resume"><i class="w-100 fas fa-address-card fa-3x "></i></a>
                </div>
              </div>
            </div></div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import Pop from '../utils/Notifier'
export default {
  name: 'UserSide',
  setup() {
    const state = reactive({
    })
    return {
      state,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        try {
          await AuthService.loginWithPopup()
          Pop.toast('Logged In!', 'success')
        } catch (error) {
          Pop.toast('Failed to Log in', 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
.activityGradient {
  background: #457fca;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #5691c8, #457fca);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #5691c8, #457fca); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>
