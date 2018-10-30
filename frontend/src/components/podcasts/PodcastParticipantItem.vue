<template>
  <v-list-tile avatar>
    <v-list-tile-action>
      <v-list-tile-avatar>
        <img alt="Photo participant" v-if="participant.picUrl" :src="participant.picUrl">
        <v-icon v-else>account_circle</v-icon>
      </v-list-tile-avatar>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{participant.firstname}} {{participant.lastname}}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action v-if="participant.twitter">
      <v-btn target="_blank" :href="participant.twitter" icon ripple>
        <img alt="Logo twitter" class="twitter-logo" src="@/assets/twitter.svg">
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  props: { participant: Object }
};
</script>

<style lang="scss" scoped>
.twitter-logo {
  height: 20px;

  .v-list__tile--avatar {
    height: 50px;
  }
}
</style>
