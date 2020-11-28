<template>
  <div class="card">
    <div class="card-body">
      <h1 class="temp">
        <strong>28<sup>°</sup></strong>
        <span class="icon">
          <img src="@/assets/icons/sun.svg" alt="sun" />
        </span>
      </h1>
    </div>
  </div>
</template>
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
