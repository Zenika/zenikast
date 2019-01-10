<template>
  <div class="track-list">
    <div v-for="(track, index) in tracks" :key="track.name" class="player-wrapper">
      <track-list-item :track="track" :autoplay="index === 0"></track-list-item>
    </div>
  </div>
</template>

<script>
import TrackListItem from '@/components/tracks/TrackListItem';

export default {
  components: { TrackListItem },
  props: { tracks: Array }
};
</script>

<style lang="scss" scoped>
.track-list /deep/ {
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
