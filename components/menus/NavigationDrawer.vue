<template>
  <v-navigation-drawer :value="show" fixed primary temporary @input="$event !== show && toggleShowValue()">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ appTitle }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('navigationDrawer', ['show']),
    ...mapState('config', ['appTitle'])
  },
  methods: mapActions('navigationDrawer', ['toggleShowValue'])
}
</script>

<style lang="scss" scoped>
</style>
