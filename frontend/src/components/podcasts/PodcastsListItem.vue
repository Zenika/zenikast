<template>
  <v-list-tile class="tile" avatar>
    <v-list-tile-action>
      <v-list-tile-avatar>
        <v-icon>headset_mic</v-icon>
      </v-list-tile-avatar>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{podcast.name}}</v-list-tile-title>
      <v-list-tile-sub-title>
        <strong>{{formatedDate}}</strong>
      </v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn @click="podcastClicked" outline color="primary">Écouter</v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: { podcast: Object },
  computed: {
    formatedDate() {
      return format(this.podcast.createTimestamp, 'DD/MM/YYYY');
    }
  },
  methods: {
    podcastClicked() {
      this.$router.push({
        name: 'podcast',
        params: { podcastId: this.podcast.id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
