<template>
  <v-toolbar class="toolbar" dark color="primary" app>
    <v-toolbar-side-icon @click.stop="toggleShowValue()" />
    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState('config', ['appTitle']),
  methods: mapActions('navigationDrawer', ['toggleShowValue'])
}
</script>

<style lang="scss" scoped>
.toolbar /deep/ {
  .v-toolbar__content {
    height: $bar-height !important;
  }
}
</style>
