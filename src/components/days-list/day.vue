<template>
  <div class="day-body" :class="{ active: data === 1 }">
    <h6>Fri</h6>
    <h6 class="m-0">
      <span>
        <strong>28<sup>°</sup></strong>
      </span>
      <span>19<sup>°</sup></span>
    </h6>
    <div class="icon">
      <img src="@/assets/icons/sun.svg" alt="sun" />
    </div>
    <p class="m-0"><small>Sunny</small></p>
  </div>
</template>
<script>
export default {
  name: 'Day',
  props: {
    data: Object,
  },
};
</script>
<style lang="scss" scoped>
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
