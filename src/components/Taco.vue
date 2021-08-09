<template>
  <div v-for="t in tacos" :key="t.title">
    <a class="card mb-3" :href="'https://' + t.linkURL">
      <img :src="t.square" :alt="t.title">
    </a>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { tacosService } from '../services/TacosService'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
export default {
  name: 'Taco',
  setup() {
    onMounted(async() => {
      try {
        await tacosService.getTacos()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      tacos: computed(() => AppState.tacos)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
