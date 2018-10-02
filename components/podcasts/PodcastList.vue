<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-list subheader>
          <v-subheader>Podcasts</v-subheader>
          <PodcastListItem v-for="podcast in podcasts" :key="podcast.id" :podcast="podcast" />
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
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
