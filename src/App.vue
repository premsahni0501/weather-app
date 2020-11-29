<template>
  <div class="container-fluid">
    <home />
    <div class="loader" v-show="getLoaderVisible"></div>
  </div>
</template>
<script>
import Home from './views/Home';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Home,
  },
  computed: {
    ...mapGetters(['getLoaderVisible']),
  },
  methods: {
    showLoader(flag) {
      alert(flag);
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/main.scss';
</style>
