<template>
  <aplayer :autoplay="autoplay" :music="trackData" />
</template>

<script>
import Aplayer from 'vue-aplayer';
import LogoUrl from '@/assets/logo.png';

export default {
  components: { Aplayer },
  props: {
    autoplay: Boolean,
    track: Object
  },
  data() {
    return {
      trackData: {
        theme: '#0A497E',
        title: this.track.name,
        artist: 'Voyage au centre de la tech',
        src: `https://docs.google.com/uc?id=${
          this.track.hash
        }&export=download`,
        pic: LogoUrl
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
