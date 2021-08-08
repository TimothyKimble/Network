<template>
  <div class="">
    <ProfileCard :profile="profiles" />
  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue'
export default {
  name: 'ProfileThread',
  props: {
    profiles: {
      type: Object,
      required: true
    }
  },
  components: {
    ProfileCard
  },
  setup(props) {
    console.log(props.profiles)
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
