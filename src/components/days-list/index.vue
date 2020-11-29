<template>
  <div
    class="days-wrapper mb-2"
    v-if="getForecast && getForecast.daily && getForecast.daily.length"
  >
    <day
      v-for="(forecast, ind) in getForecast.daily"
      :key="'day_' + ind"
      :data="forecast"
    />
  </div>
  <div class="days-wrapper mb-2" v-else>
    <div class="day-body" v-for="d in 5" :key="'skel' + d">
      <div class="d-box"></div>
      <div class="d-box"></div>
      <div class="d-circle"></div>
      <div class="d-box"></div>
    </div>
  </div>
</template>
<script>
import Day from './day';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'DaysList',
  components: {
    Day,
  },
  data() {
    return {
      forecast: null,
    };
  },
  computed: {
    ...mapGetters(['getForecast', 'getLocation']),
  },
  watch: {
    getLocation(d) {
      if (d) {
        const { lat, lon } = d;
        this.fetchForecast({
          lat,
          lon,
        });
      }
    },
  },
  methods: {
    ...mapActions(['fetchForecast']),
  },
  mounted() {
    if (this.getLocation) {
      const { lat, lon } = this.getLocation;
      this.fetchForecast({
        lat,
        lon,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.days-wrapper {
  overflow-x: auto;
  display: flex;
  margin: 0 -15px;
  padding: 0 1rem 0.5rem 1rem;
}
.days-wrapper {
  .d-box {
    display: block;
    width: 90px;
    height: 1.5rem;
    background-color: #eee;
    margin-bottom: 0.25rem;
    border-radius: 0.15rem;
  }
  .d-circle {
    display: block;
    margin: 0 auto;
    width: 2rem;
    height: 2rem;
    background-color: #eee;
    margin-bottom: 0.25rem;
    border-radius: 1rem;
  }
}
</style>
