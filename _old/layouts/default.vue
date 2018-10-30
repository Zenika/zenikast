<template>
  <div id="app">
    <!-- Menus -->
    <nav-bar-top />
    <div class="main-content">
      <nuxt />
    </div>

  </div>
</template>

<script>
import NavBarTop from '@/components/menus/NavBarTop'
import Podcast from '@/components/podcasts/Podcast'
import PodcastList from '@/components/podcasts/PodcastList'

export default {
  components: { NavBarTop, Podcast, PodcastList }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

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
