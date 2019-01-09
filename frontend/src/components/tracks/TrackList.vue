<template>
  <div class="tracks-list">
    <div v-for="(track, index) in tracks" :key="track.name" class="player-wrapper">
      <track-list-item :track="track" :autoplay="index === 0"></track-list-item>
    </div>
  </div>
</template>

<script>
import PodcastTracksItem from '@/components/tracks/TrackItem';

export default {
  components: { PodcastTracksItem },
  props: { tracks: Array }
};
</script>

<style lang="scss" scoped>
.tracks-list /deep/ {
  .player-wrapper {
    padding: 20px;

    @media screen and (max-width: 900px) {
      padding: 0px;
      padding-bottom: 20px;
    }
  }

  .aplayer-icon-mode {
    display: none;
  }

  @media screen and (max-width: 900px) {
    padding: 0px;
    padding-top: 20px;
  }
}
</style>
