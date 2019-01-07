<template>
  <v-list v-if="userInfos" class="wrapper" two-line>
    <v-list-tile avatar>
      <v-list-tile-action>
        <v-avatar slot="activator" size="36px">
          <img :src="userInfos.photoURL" alt="Avatar">
        </v-avatar>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{userInfos.displayName}}
        </v-list-tile-title>
        <v-list-tile-sub-title>
          {{userInfos.email}}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
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
