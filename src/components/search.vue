<template>
  <div class="py-3">
    <autocomplete
      :data="getAllCities"
      :search="searchText"
      placeholder="Search for a city"
      aria-label="Search for a city"
    />
  </div>
</template>
<script>
import Autocomplete from './Autocomplete';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchText: '',
    };
  },
  watch: {
    getWeatherData(d) {
      if (d) {
        this.searchText = d.name + ', ' + d.sys.country;
      }
    },
  },
  computed: {
    ...mapGetters(['getWeatherData', 'getAllCities']),
  },
  components: {
    Autocomplete,
  },
  methods: {
    ...mapActions(['fetchAllCity']),
  },
  mounted() {
    this.fetchAllCity();
  },
};
</script>
