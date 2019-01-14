<template>
  <div class="wrapper">
    <template v-if="trackList">
      <!-- Header -->
      <v-subheader class="header">
        <span>
          {{ trackList.length }} pistes disponibles
          <span v-if="isUserLoggedIn">- {{ newTracks.length }} nouveaux</span>
        </span>
      </v-subheader>
      <!-- Track List -->
      <v-list class="list" two-line>
        <template v-for="(track, index) in tracksOrderedBy('createTimestamp', 'desc')">
          <v-divider :key="index" v-if="index !== 0"></v-divider>
          <track-list-item
            @click.native="trackClicked(track)"
            :isNew="isTrackNew(track.id)"
            :track="track"
            :key="track.id">
          </track-list-item>
        </template>
      </v-list>
    </template>
    <div v-else class="spinner">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
  </div>
</template>

<script>
import TrackListItem from '@/components/tracks/TrackListItem';
import { mapState, mapGetters } from 'vuex';

export default {
  components: { TrackListItem },
  computed: {
    ...mapState('tracks', ['trackList']),
    ...mapGetters('tracks', ['tracksOrderedBy', 'isTrackNew', 'newTracks']),
    ...mapState('authentication', ['userInfos']),
    ...mapGetters('authentication', ['isUserLoggedIn'])
  },
  methods: {
    trackClicked(track) {
      this.$router.push({
        name: 'track',
        params: { trackId: track.id }
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
