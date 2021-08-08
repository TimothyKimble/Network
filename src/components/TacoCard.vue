<template>
  <div class="row m-0">
    <div class="col-md-12">
      {{ taco[0].square }}
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
export default {
  props: {
    taco: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    console.log(props.taco)
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>
