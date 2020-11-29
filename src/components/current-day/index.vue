<template>
  <div class="card my-3">
    <div class="card-body px-3">
      <h1 class="temp">
        <strong>28<sup>°</sup></strong>
        <span class="icon">
          <img src="@/assets/icons/sun.svg" alt="sun" />
        </span>
      </h1>
      <days-timeline />
    </div>
  </div>
</template>
<script>
import DaysTimeline from './days-timeline';
export default {
  name: 'CurrentDay',
  components: {
    DaysTimeline,
  },
};
</script>
<style lang="scss" scoped>
.temp {
  font-size: 4rem;
  align-items: flex-end;
  display: inline-flex;
  margin: 0;
  line-height: 1;
  position: relative;

  .icon {
    position: absolute;
    left: 100%;
    top: -25%;
    img {
      height: 4rem;
    }
  }
}
</style>
