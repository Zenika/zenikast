<template>
  <v-list>
    <template v-for="(participant, index) in participants">
      <v-divider :key="index"></v-divider>
      <podcast-participant-item :key="participant.lastname" :participant="participant"></podcast-participant-item>
    </template>
  </v-list>
</template>

<script>
import PodcastParticipantItem from '@/components/podcasts/PodcastParticipantItem';

export default {
  props: { participants: Array },
  components: { PodcastParticipantItem }
};
</script>

<style lang="scss" scoped>
:host /deep/ {
  .v-list {
    padding: 0;
  }
}
</style>
