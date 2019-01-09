<template>
  <v-list-tile @click="$emit('clicked')" class="tile" avatar>
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
      <v-chip v-if="isNew" outline label color="orange">
        <v-icon left>star</v-icon>Nouveau
      </v-chip>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: { podcast: Object, isNew: Boolean },
  computed: {
    formatedDate() {
      return format(this.podcast.createTimestamp, 'DD/MM/YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
