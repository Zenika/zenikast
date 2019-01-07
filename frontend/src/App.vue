<template>
  <v-app id="app">
    <!-- Showing when new content is available (service worker) -->
    <v-snackbar :value="newContentAvailable" :timeout="null" :bottom="true">
      Nouvelle version disponible
      <v-btn color="pink" flat @click="reloadApp">
        Rafraîchir
      </v-btn>
    </v-snackbar>

    <!-- Menus -->
    <nav-bar-top></nav-bar-top>

    <!-- Main content -->
    <v-content class="main-content">
      <v-container class="container" fluid>
        <router-view />
      </v-container>
    </v-content>

    <!-- Msg alert -->
    <v-alert v-if="currentMsg" class="alert" transition="scale-transition" @click="removeCurrentMsg()" :value="currentMsg !== null" :type="currentMsg.type">
      {{currentMsg.text}}
    </v-alert>
  </v-app>
</template>

<script>
import NavBarTop from '@/components/menus/NavBarTop';
import { mapState, mapActions } from 'vuex';

export default {
  components: { NavBarTop },
  computed: {
    ...mapState('config', ['newContentAvailable']),
    ...mapState('authentication', ['userInfos']),
    ...mapState('misc', ['currentMsg'])
  },
  methods: {
    ...mapActions('config', ['reloadApp']),
    ...mapActions('misc', ['removeCurrentMsg'])
  }
};
</script>

<style lang="scss">
@import '@/style/variables.scss';

#app {
  footer {
    height: auto !important;
  }

  .alert {
    position: absolute;
    z-index: 500;
    top: $bar-height;
    margin: auto;
    right: 0;
    left: 0;
    max-width: 500px;
    cursor: pointer;
  }

  .main-content {
    position: absolute;
    top: $bar-height;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    padding: 0 !important;

    &.no-margin-top {
      top: $bar-height;
    }

    .container {
      padding: 0;
      height: 100%;
    }

    &.marge-bottom {
      bottom: $bar-height;
    }
  }
}
</style>
