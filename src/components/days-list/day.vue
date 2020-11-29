<template>
  <div
    class="day-body"
    :class="{ active: isCurrentSelect }"
    @click="onDayClick"
  >
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
import { format, isSameDay } from 'date-fns';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Day',
  props: {
    data: Object,
  },
  computed: {
    ...mapGetters(['getSelectedDate']),
    isCurrentSelect() {
      return isSameDay(this.getSelectedDate * 1000, this.data.dt * 1000);
    },
  },
  methods: {
    ...mapMutations(['setSelectedDate']),
    getDay(unixTime) {
      return format(new Date(unixTime * 1000), 'eee dd');
    },
    onDayClick() {
      this.setSelectedDate(this.data.dt);
    },
  },
};
</script>
<style lang="scss">
.day-body {
  display: inline-flex;
  flex-direction: column;
  min-width: max-content;
  padding: 0.5rem 1rem;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  &.active {
    border-color: rgb(0, 132, 255);
  }
}
</style>
