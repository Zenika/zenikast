<template>
  <v-list>
    <template v-for="(participant, index) in participants">
      <v-divider :key="index"></v-divider>
      <track-participant-item :key="participant.lastname" :participant="participant"></track-participant-item>
    </template>
  </v-list>
</template>

<script>
import TrackParticipantItem from '@/components/tracks/TrackParticipantItem';

export default {
  props: { participants: Array },
  components: { TrackParticipantItem }
};
</script>

<style lang="scss" scoped>
:host /deep/ {
  .v-list {
    padding: 0;
  }
}
</style>
