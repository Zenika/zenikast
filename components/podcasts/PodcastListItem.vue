<template>
  <nuxt-link :to="`podcasts/${podcast.id}`" class="root">
    <v-list-tile :key="podcast.id">
      <v-list-tile-avatar>
        <img :src="thumbnail">
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-titletitle>{{ podcast.title }}</v-list-tile-titletitle>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>play_arrow</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    podcast: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
}

a {
  text-decoration: none;
  color: black;
}
</style>
