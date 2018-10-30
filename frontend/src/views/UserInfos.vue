<template>
  <v-list class="wrapper" two-line>
    <v-list-tile avatar>
      <v-list-tile-action>
        <v-avatar slot="activator" size="36px">
          <img v-if="providerData" :src="providerData.photoURL" alt="Avatar">
        </v-avatar>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{providerData.displayName}}</v-list-tile-title>
        <v-list-tile-sub-title>
          {{providerData.email}}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', ['providerData']),
    ...mapState('authentication', ['user', 'userInfos'])
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: auto;

  @media screen and (min-width: 900px) {
    max-width: 60%;
  }
}
</style>
