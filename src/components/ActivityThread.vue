<template>
  <div class="">
    <ActivityCard v-for="a in activities" :key="a.id" :activity="a" />
  </div>
</template>

<script>
import ActivityCard from '../components/ActivityCard.vue'
export default {
  name: 'ActivityThread',
  props: {
    activities: {
      type: Object,
      required: true
    }
  },
  components: {
    ActivityCard
  }
}
</script>

<style lang="scss" scoped>
aside {
    width: 40%;
    padding-left: .5rem;
    margin-left: .5rem;
    float: right;
    box-shadow: inset 5px 0 5px -5px #29627e;
    font-style: italic;
    color: #29627e;
}

aside > p {
    margin: .5rem;
}

p {
    font-family: 'Fira Sans', sans-serif;
}

</style>
