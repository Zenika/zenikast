<template>
  <div class="item">
    <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&amp;color=0066cc" /><!-- Main content -->
  </div>
</template>

<script>
export default {
  props: {
    podcast: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
}
</style>
