<template>
  <div>
    <PodcastListItem v-for="podcast in podcasts" :key="podcast.id" :podcast="podcast" />
  </div>
</template>

<script>
import PodcastListItem from '@/components/podcasts/PodcastListItem'

export default {
  components: { PodcastListItem },
  props: {
    podcasts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
PodcastListElement {
  width: 100%;
}
</style>
