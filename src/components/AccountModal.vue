<template>
  <div class=" modal fade"
       :id="'profile-modal-' + profile.id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="create-profile"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">
            Edit Account
          </h6>
          <button type="button" class="close btn btn-info" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="changeAccount(state.changedProfile)">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" class="form-control" placeholder="Name" v-model="state.changedProfile.name">
            </div>

            <div class="form-group">
              <label for="github">Github URL</label>
              <input type="text" id="github" class="form-control" placeholder="GitHub URL" v-model="state.changedProfile.github">
            </div>

            <div class="form-group">
              <label for="linkedin">Linkedin URL</label>
              <input type="text" id="linkedin" class="form-control" placeholder="Linkedin URL" v-model="state.changedProfile.linkedin">
            </div>

            <div class="form-group">
              <label for="resume">Resume URL</label>
              <input type="text" id="resume" class="form-control" placeholder="resume URL" v-model="state.changedProfile.resume">
            </div>

            <div class="form-group">
              <label for="class">Class</label>
              <input type="text" id="class" class="form-control" placeholder="Class" v-model="state.changedProfile.class">
            </div>

            <div class="form-group">
              <label for="graduated">Graduated</label>
              <input type="checkbox" id="graduated" class="form-control" placeholder="graduated" v-model="state.changedProfile.graduated">
            </div>

            <div class="form-group">
              <label for="bio">Bio</label>
              <input type="text" id="bio" class="form-control" placeholder="About You!" v-model="state.changedProfile.bio">
            </div>

            <div class="form-group">
              <label for="photos">Background Image</label>
              <input type="text" id="photo" class="form-control" placeholder="Background Photo" v-model="state.changedProfile.coverImg">
            </div>
            <div class="form-group">
              <label for="imgUrl">Account Image</label>
              <input type="text" id="imgUrl" class="form-control" placeholder="Profile Image Url" v-model="state.changedProfile.picture">
            </div>
            <div>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import Pop from '../utils/Notifier'
import { logger } from '../utils/Logger'
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      changedProfile: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      changeAccount(changedAccount) {
        logger.log('Trying to edit')
        try {
          accountService.editAccount(changedAccount)
          Pop.toast('You Successfully Changed Your Profile!', 'success')
        } catch (error) {
          Pop.toast('Failed to Change Profile :(', 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss">
.modal-backdrop.show{
  opacity: 1!important;
  background:  var(--fade);
  backdrop-filter: blur(30px) brightness(.5) contrast(.85);
}
.modal-body{
  height: 50vh;
  overflow-y: auto;
}
.cover {
  object-fit: cover;
}
</style>
