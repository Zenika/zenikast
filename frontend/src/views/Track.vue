<template>
  <div class="wrapper" v-if="track">
    <!-- Banner -->
    <track-banner :track="track"></track-banner>

    <!-- Main content -->
    <v-card class="content">
      <v-expansion-panel>

        <!-- Participant List -->
        <v-expansion-panel-content>
          <div slot="header">
            <v-icon class="icon">people</v-icon>
            Participants
          </div>
          <v-card>
            <track-participants-list :participants="track.participants"></track-participants-list>
          </v-card>
        </v-expansion-panel-content>

        <!-- Description -->
        <v-expansion-panel-content>
          <div slot="header">
            <v-icon class="icon">description</v-icon>
            Description
          </div>
          <v-card>
            <v-card-text>{{track.description}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- Track player -->
      <track-item :track="track"></track-item>
    </v-card>
  </div>
</template>

<script>
import { isNil } from 'lodash';
import { mapGetters, mapActions, mapState } from 'vuex';
import TrackBanner from '@/components/tracks/TrackBanner';
import TrackParticipantsList from '@/components/tracks/TrackParticipantsList';
import TrackItem from '@/components/tracks/TrackItem';

export default {
  components: { TrackBanner, TrackParticipantsList, TrackItem },
  props: { trackId: String },
  watch: {
    userInfos: {
      handler(value) {
        if (isNil(value)) return;
        this.addTrackSeenToUser(this.trackId);
      },
      immediate: true
    }
  },
  computed: {
    ...mapState('authentication', ['userInfos']),
    ...mapGetters('tracks', ['trackById']),
    track() {
      return this.trackById(this.trackId);
    }
  },
  methods: mapActions('authentication', ['addTrackSeenToUser'])
};
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.wrapper {
  overflow: scroll;
  height: 100%;
  width: 100%;

  .content {
    margin: auto;

    @media screen and (min-width: 900px) {
      max-width: 60%;
    }

    .icon {
      margin-right: 10px;
    }
  }
}
</style>
