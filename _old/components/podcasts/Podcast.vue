<template>
  <div>
    OK
  </div>
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
