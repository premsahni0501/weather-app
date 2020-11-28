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

export default {
  name: 'Home',
  components: {
    DaysList,
    Search,
    CurrentDay,
  },
};
</script>
