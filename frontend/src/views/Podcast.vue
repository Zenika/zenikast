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

      <!-- Tracks list -->
      <div class="tracks-list">
        <iframe v-for="track in podcast.tracks" :key="track" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" :src="track"></iframe>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PodcastBanner from '@/components/podcasts/PodcastBanner';
import PodcastParticipantsList from '@/components/podcasts/PodcastParticipantsList';

export default {
  components: { PodcastBanner, PodcastParticipantsList },
  props: { podcastId: String },
  computed: {
    ...mapGetters('podcasts', ['podcastById']),
    podcast() {
      return this.podcastById(this.podcastId);
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

  .content {
    margin: auto;

    @media screen and (min-width: 900px) {
      max-width: 60%;
    }

    .icon {
      margin-right: 10px;
    }

    .tracks-list {
      padding: 40px;

      @media screen and (max-width: 900px) {
        padding: 0px;
        padding-top: 20px;
      }
    }
  }
}
</style>
