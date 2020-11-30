<template>
  <li
    class="list-group-item d-flex align-items-center justify-content-between"
    @click="setLocationCoords(result)"
  >
    <strong>{{ result.name }} </strong>
    <span v-if="result.weatherData" class="d-inline-flex align-items-center">
      <span class="d-inline-flex align-items-center weather-info">
        <h6 class="m-0">
          <strong>
            {{ result.weatherData.main.temp }}
          </strong>
          <sup>°</sup>
        </h6>
        <p class="m-0">
          <small>{{
            result.weatherData.weather &&
              result.weatherData.weather.length &&
              result.weatherData.weather[0].main
          }}</small>
        </p>
      </span>
      <span>
        <span class="icon" v-if="getIcon">
          <img :src="require(`@/assets/icons/${getIcon}.svg`)" :alt="getIcon" />
        </span>
      </span>
    </span>
  </li>
</template>
<script>
import { getUnixTime } from 'date-fns';
import { mapActions, mapMutations } from 'vuex';
export default {
  name: 'ResultItem',
  props: {
    result: Object,
    search: String,
  },
  computed: {
    getIcon() {
      if (this.result?.weatherData?.weather?.length) {
        const weatherType = this.result.weatherData.weather[0].main;

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
  methods: {
    ...mapMutations(['setLocation', 'setSelectedDate']),
    ...mapActions(['fetchWeatherData', 'fetchHourlyForecast']),
    async setLocationCoords(result) {
      document.querySelector('.chartWrapper')?.scrollTo(0, 0);
      this.setSelectedDate(getUnixTime(new Date()));
      this.setLocation(result.coord);
      await this.fetchWeatherData(result.coord);
      await this.fetchHourlyForecast(result.coord);
    },
  },
};
</script>
<style lang="scss" scoped>
.list-group-item {
  cursor: pointer;
  .weather-info {
    flex-direction: column;
  }
}
</style>
