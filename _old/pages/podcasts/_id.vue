<template>
  <Podcast :podcast="podcast" />
</template>

<script>
import Podcast from '@/components/podcasts/Podcast'

export default {
  components: { Podcast },
  data() {
    return {
      podcast: {
        id: 1,
        title: "Let's talk about Elixir!",
        description: 'Lorem ipsum desu desu'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
Podcast {
  width: 100%;
}
</style>
