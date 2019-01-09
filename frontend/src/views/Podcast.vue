<template>
  <div class="wrapper" v-if="podcast">
    <!-- Banner -->
    <podcast-banner :podcast="podcast"></podcast-banner>

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
            <podcast-participants-list :participants="podcast.participants"></podcast-participants-list>
          </v-card>
        </v-expansion-panel-content>

        <!-- Description -->
        <v-expansion-panel-content>
          <div slot="header">
            <v-icon class="icon">description</v-icon>
            Description
          </div>
          <v-card>
            <v-card-text>{{podcast.description}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- Track player -->
      <podcast-tracks-item :track="podcast"></podcast-tracks-item>
    </v-card>
  </div>
</template>

<script>
import { isNil } from 'lodash';
import { mapGetters, mapActions, mapState } from 'vuex';
import PodcastBanner from '@/components/podcasts/PodcastBanner';
import PodcastParticipantsList from '@/components/podcasts/PodcastParticipantsList';
import PodcastTracksItem from '@/components/podcasts/PodcastTracksItem';

export default {
  components: { PodcastBanner, PodcastParticipantsList, PodcastTracksItem },
  props: { podcastId: String },
  watch: {
    userInfos: {
      handler(value) {
        if (isNil(value)) return;
        this.addPodcastSeenToUser(this.podcastId);
      },
      immediate: true
    }
  },
  computed: {
    ...mapState('authentication', ['userInfos']),
    ...mapGetters('podcasts', ['podcastById']),
    podcast() {
      return this.podcastById(this.podcastId);
    }
  },
  methods: mapActions('authentication', ['addPodcastSeenToUser'])
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
