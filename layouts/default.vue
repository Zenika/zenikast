<template>
  <v-app id="app">
    <!-- Menus -->
    <navigation-drawer />
    <nav-bar-top />

    <!-- Main content -->
    <v-content class="main-content">
      <v-container class="container" fluid>
        <nuxt class="pt-3" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBarTop from '@/components/menus/NavBarTop'
import NavigationDrawer from '@/components/menus/NavigationDrawer'
import Podcast from '@/components/podcasts/Podcast'
import PodcastList from '@/components/podcasts/PodcastList'

export default {
  components: { NavBarTop, NavigationDrawer, Podcast, PodcastList }
}
</script>

<style lang="scss">
#app {
  .main-content {
    position: absolute;
    top: $bar-height;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    padding: 0 !important;

    .container {
      padding: 0;
      height: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    .main-content {
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    .main-content {
      width: 900px;
    }
  }
}
</style>
