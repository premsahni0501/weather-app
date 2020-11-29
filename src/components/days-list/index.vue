<template>
  <div class="days-wrapper mb-2" v-if="forecast && forecast && forecast.length">
    <day v-for="d in forecast" :key="'day_' + d.dt" :data="d" />
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
import { mapActions } from 'vuex';
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
  props: {
    data: Object,
  },
  watch: {
    data(d) {
      if (d?.coord) {
        this.getForecast(d.coord);
      }
    },
  },
  methods: {
    ...mapActions(['getForecast']),
  },
  mounted() {
    this.data?.coord && this.getForecast(this.data?.coord);
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
    width: 100px;
    height: 2rem;
    background-color: #ddd;
    margin-bottom: 0.25rem;
    border-radius: 0.15rem;
  }
  .d-circle {
    display: block;
    margin: 0 auto;
    width: 2rem;
    height: 2rem;
    background-color: #ddd;
    margin-bottom: 0.25rem;
    border-radius: 1rem;
  }
}
</style>
