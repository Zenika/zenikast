<template>
  <PodcastList :podcasts="podcasts" />
</template>

<script>
import PodcastList from '@/components/podcasts/PodcastList'

export default {
  components: { PodcastList },
  data() {
    return {
      podcasts: [
        {
          id: 1,
          title: "Let's talk about Elixir!",
          description: 'Lorem ipsum desu desu'
        },
        {
          id: 2,
          title: 'Management at Zenika Nantes',
          description: 'Lorem ipsum desu desu'
        },
        {
          id: 3,
          title: 'Reactive programming in the back-end',
          description: 'Lorem ipsum desu desu'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
PodcastList {
  width: 100%;
}
</style>
