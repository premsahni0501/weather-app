<template>
  <div class="card my-3">
    <div class="card-body px-3">
      <h1 class="temp" v-if="getCurrentDateData && getCurrentDateData.temp">
        <strong>
          {{ getTemp }}
          <sup>°</sup>
        </strong>
        <span class="icon">
          <img :src="require(`@/assets/icons/${getIcon}.svg`)" :alt="getIcon" />
        </span>
      </h1>
      <days-timeline />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import DaysTimeline from './days-timeline';
export default {
  name: 'CurrentDay',
  components: {
    DaysTimeline,
  },
  computed: {
    ...mapGetters(['getWeatherData', 'getSelectedDate', 'getCurrentDateData']),
    getTemp() {
      return this.getCurrentDateData?.temp;
    },
    getIcon() {
      console.log(this.getCurrentDateData);
      if (this.getCurrentDateData?.weather?.length) {
        const weatherType = this.getCurrentDateData.weather[0].main;
        switch (weatherType) {
          case 'Mist':
            return 'mist';
          case 'Clear':
            return 'sun';
          case 'Cloudy':
            return 'cloudy';
          default:
            return 'sun';
        }
      }
      return 'sun';
    },
  },
};
</script>
<style lang="scss" scoped>
.temp {
  font-size: 4rem;
  align-items: flex-end;
  display: inline-flex;
  margin: 0;
  line-height: 1;
  position: relative;

  .icon {
    position: absolute;
    left: 100%;
    top: -25%;
    img {
      height: 4rem;
    }
  }
}
</style>
