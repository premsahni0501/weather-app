<template>
  <div class="container px-0">
    <search />
    <days-list />
    <current-day />
  </div>
</template>

<script>
import DaysList from '@/components/days-list';
import Search from '@/components/search';
import CurrentDay from '@/components/current-day';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getLocation', 'getWeatherData']),
  },
  components: {
    DaysList,
    Search,
    CurrentDay,
  },
  methods: {
    ...mapActions(['fetchLocation', 'fetchWeatherData']),
  },
  async mounted() {
    try {
      await this.fetchLocation();
      this.$nextTick(async () => {
        const { lat, lon } = this.getLocation;
        console.log(this.getLocation);
        await this.fetchWeatherData({ lat, lon });
      });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
