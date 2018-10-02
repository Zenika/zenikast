<template>
  <v-navigation-drawer :value="show" fixed primary temporary @input="$event !== show && toggleShowValue()">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ appName }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider />

    <v-list>
      <v-list-tile v-for="item in items" :key="item.name" @click="goToPage(item.route)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      items: [{ name: 'Podcasts', icon: 'settings_voice', route: '/podcasts' }]
    }
  },
  computed: {
    ...mapState('navigationDrawer', ['show']),
    ...mapState('config', ['appName'])
  },
  methods: {
    ...mapActions('navigationDrawer', ['toggleShowValue']),
    goToPage(page) {
      this.$router.push(page)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
