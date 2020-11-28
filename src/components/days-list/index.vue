<template>
  <div class="days-wrapper mb-2">
    <day v-for="d in 10" :key="'day_' + d" :data="d" />
  </div>
</template>
<script>
import Day from './day';

export default {
  name: 'DaysList',
  components: {
    Day,
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
</style>
