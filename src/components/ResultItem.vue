<template>
  <li
    class="list-group-item d-flex align-items-center justify-content-between"
    @click="setLocationCoords(result.coord)"
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
        <span class="icon">
          <img :src="require(`@/assets/icons/${getIcon}.svg`)" :alt="getIcon" />
        </span>
      </span>
    </span>
  </li>
</template>
<script>
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
            return 'cloudy';
          default:
            return 'sun';
        }
      }
      return 'sun';
    },
  },
  methods: {
    ...mapMutations(['setLocation']),
    ...mapActions(['fetchWeatherData', 'fetchHourlyForecast']),
    async setLocationCoords(coord) {
      this.setLocation(coord);
      await this.fetchWeatherData(coord);
      await this.fetchHourlyForecast(coord);
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
