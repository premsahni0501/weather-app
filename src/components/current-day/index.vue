<template>
  <div class="card my-3">
    <div class="card-body px-3">
      <h1 class="temp" v-if="getCurrentDateData">
        <strong>
          {{ getTemp }}
          <sup>°</sup>
        </strong>
        <span class="icon" v-if="getIcon">
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
      console.log(
        JSON.stringify(this.getCurrentDateData),
        this.getCurrentDateData?.temp.night
      );
      if (
        this.getCurrentDateData.dt > this.getCurrentDateData.sunrise ||
        this.getCurrentDateData.dt < this.getCurrentDateData.sunset
      ) {
        return this.getCurrentDateData.temp.day;
      }
      return this.getCurrentDateData.temp.night;
    },
    getIcon() {
      if (this.getCurrentDateData?.weather?.length) {
        const weatherType = this.getCurrentDateData.weather[0].main;
        switch (weatherType) {
          case 'Mist':
            return 'mist';
          case 'Clear':
            return 'sun';
          case 'Clouds':
          case 'Rain':
            return 'cloudy';
          default:
            return 'sun';
        }
      }
      return '';
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
