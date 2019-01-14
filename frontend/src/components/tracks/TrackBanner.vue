<template>
  <div class="header" :style="{ 'background-image': 'url(' + banner + ')' }">
    <h1 class="track-name">{{track.name}}</h1>
    <h3 class="track-create-date">Émission du {{formatedDate}}</h3>
  </div>
</template>

<script>
import { format } from 'date-fns';
import banner from '@/assets/banner.jpeg';

export default {
  props: { track: Object },
  data: () => ({ banner }),
  computed: {
    formatedDate() {
      return format(this.track.createTimestamp, 'DD/MM/YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  width: 100%;
  color: white;
  box-shadow: -1px -20px 5px 4px rgba(0, 0, 0, 0.2),
    0px -20px 5px 0 rgba(0, 0, 0, 0.14), 0px 1px 10px 0 rgba(0, 0, 0, 0.12);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 140px;

  .track-name {
    font-size: 40px;
    text-shadow: 0 0 0.3em #333, 0 0 0.3em #333, 0 0 0.3em #333;

    @media screen and (max-width: 900px) {
      font-size: 25px;
    }
  }

  .track-create-date {
    text-shadow: 0 0 0.3em #333, 0 0 0.3em #333, 0 0 0.3em #333;
    font-size: 20px;
    margin-top: 10px;

    @media screen and (max-width: 900px) {
      font-size: 14px;
      margin-top: 5px;
    }
  }

  .track-description {
    margin-top: 20px;
    font-size: 15px;
    max-width: 800px;
  }

  .track-participants-title {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 700px) {
    padding: 50px;
    height: 250px;
  }

  @media screen and (min-width: 900px) {
    padding: 100px;
    height: 300px;
  }

  @media screen and (min-width: 1000px) {
    height: 360px;
  }

  @media screen and (min-width: 1100px) {
    height: 400px;
  }

  @media screen and (min-width: 1200px) {
    height: 420px;
  }

  @media screen and (min-width: 1400px) {
    height: 480px;
  }
}
</style>
