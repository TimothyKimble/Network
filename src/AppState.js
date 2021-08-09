import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  activities: [],
  profiles: [],
  profile: {},
  tacos: [],
  ActiveProfile: null,
  activityPages: {
    page: 0,
    newer: '',
    older: ''
  },
  query: ''
})
