<template>
  <div class="container px-0">
    <search :data="weatherData" />
    <days-list :data="weatherData" />
    <current-day :data="weatherData" />
  </div>
</template>

<script>
import DaysList from '@/components/days-list';
import Search from '@/components/search';
import CurrentDay from '@/components/current-day';
import { getLocation, getWeatherData } from '@/services';

export default {
  name: 'Home',
  data() {
    return {
      weatherData: null,
    };
  },
  components: {
    DaysList,
    Search,
    CurrentDay,
  },
  async mounted() {
    try {
      const res = await getLocation();
      const { lat, lon } = res.data;
      const wres = await getWeatherData({ lat, lon });
      this.weatherData = wres.data;
      console.log(lat, lon, JSON.stringify(this.weatherData));
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
