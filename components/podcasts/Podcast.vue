<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-img class="header-image" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ podcast.title }}</div>
            <span class="grey--text">{{ podcast.author }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="green">Play</v-btn>
          <v-spacer/>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            {{ podcast.description }}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  props: {
    podcast: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({ show: true }),
  methods: {}
}
</script>

<style lang="scss" scoped>
.header-image {
  height: 200px;
}
</style>
