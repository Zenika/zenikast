<template>
  <h2 class="navbar">{{ appName }}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('config', ['appName'])
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/variables.scss';

.navbar {
  color: $title-color;
  margin: 0;
  height: $bar-height;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px -20px 5px 4px rgba(0, 0, 0, 0.2),
    0 -20px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
