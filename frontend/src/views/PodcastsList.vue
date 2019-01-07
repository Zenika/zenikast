<template>
  <div class="wrapper">
    <template v-if="podcastsList">
      <!-- Header -->
      <v-subheader class="header">
        <span>
          {{ podcastsList.length }} podcasts disponibles
          <span v-if="isLoggedIn">- {{ newPodcasts.length }} nouveaux</span>
        </span>
      </v-subheader>
      <!-- Podcasts List -->
      <v-list class="list" two-line>
        <template v-for="(podcast, index) in podcastsOrderedBy('createTimestamp', 'desc')">
          <v-divider :key="index" v-if="index !== 0"></v-divider>
          <podcasts-list-item
            @click.native="podcastClicked(podcast)"
            :isNew="isPodcastNew(podcast.id)"
            :podcast="podcast"
            :key="podcast.id">
          </podcasts-list-item>
        </template>
      </v-list>
    </template>
    <div v-else class="spinner">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
  </div>
</template>

<script>
import PodcastsListItem from '@/components/podcasts/PodcastsListItem';
import { mapState, mapGetters } from 'vuex';

export default {
  components: { PodcastsListItem },
  computed: {
    ...mapState('podcasts', ['podcastsList']),
    ...mapGetters('podcasts', [
      'podcastsOrderedBy',
      'isPodcastNew',
      'newPodcasts'
    ]),
    ...mapState('authentication', ['userInfos']),
    ...mapGetters('authentication', ['isLoggedIn'])
  },
  methods: {
    podcastClicked(podcast) {
      this.$router.push({
        name: 'podcast',
        params: { podcastId: podcast.id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.wrapper {
  overflow: scroll;
  height: 100%;
  width: 100%;

  .spinner {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    left: 0;
    z-index: 1;
    width: 100%;
    position: fixed;
    width: 100%;
    background: white;
    height: $bar-height;
    box-shadow: -1px -20px 5px 4px rgba(0, 0, 0, 0.2),
      0px -20px 5px 0 rgba(0, 0, 0, 0.14), 0px 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .list {
    margin: auto;
    position: absolute;
    top: $bar-height;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: scroll;
    padding-top: 0;

    @media screen and (min-width: 900px) {
      max-width: 60%;
    }
  }
}
</style>
