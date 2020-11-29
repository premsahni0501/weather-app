<template>
  <div class="day-body" :class="{ active: data === 1 }">
    <h6>{{ getDay(data.dt) }}</h6>
    <h6 class="m-0">
      <span>
        <strong>{{ Math.ceil(data.temp.max) }}<sup>°</sup></strong>
      </span>
      <span>{{ Math.ceil(data.temp.min) }}<sup>°</sup></span>
    </h6>
    <div class="icon">
      <img
        :src="
          require(`@/assets/icons/${
            data.weather[0].id === 800
              ? 'sun'
              : data.weather[0].id === 800
              ? 'rain'
              : 'cloudy'
          }.svg`)
        "
        alt="sun"
      />
    </div>
    <p class="m-0">
      <small>{{
        data.weather && data.weather.length && data.weather[0].main
      }}</small>
    </p>
  </div>
</template>
<script>
import { format } from 'date-fns';
export default {
  name: 'Day',
  props: {
    data: Object,
  },
  methods: {
    getDay(unixTime) {
      return format(new Date(unixTime * 1000), 'eee dd');
    },
  },
};
</script>
<style lang="scss">
.day-body {
  display: inline-flex;
  flex-direction: column;
  min-width: min-content;
  padding: 0.5rem 1rem;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  &.active {
    border-color: rgb(0, 132, 255);
  }
}
</style>
