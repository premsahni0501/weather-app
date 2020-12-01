<template>
  <div class="container-fluid p-0">
    <div class="chartWrapper">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 300"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"
      >
        <path
          id="day"
          d="M123.077,197c62.259,-84.864 162.703,-125 275.923,-125c113.22,0 213.664,40.136 275.923,125l-551.846,0Z"
          style="fill:url(#_Linear1);"
        />
        <path
          id="night"
          d="M123.077,197c-44.072,50.507 -118.077,67 -118.077,67l0,-67l118.077,0ZM674.923,197l118.077,0l0,67c0,0 -73.915,-16.372 -118.077,-67Z"
          style="fill:#888;"
        />
        <g id="lines">
          <path
            d="M5,197l0,103"
            style="fill:none;stroke-width:1px;stroke:#686868;"
          />
          <path
            d="M399,197l0,103"
            style="fill:none;stroke-width:1px;stroke:#686868;"
          />
          <path
            d="M793,197l0,103"
            style="fill:none;stroke-width:1px;stroke:#686868;"
          />
        </g>
        <path
          id="path"
          d="M5,264c0,0 75.083,-19.503 118.077,-67c42.993,-47.497 118.575,-141.053 275.923,-140c157.348,1.053 240.016,95.97 275.923,140c35.907,44.03 110.308,67.039 118.077,67"
          style="fill:none;stroke-width:1px;stroke:#fff;"
        />
        <g id="sun">
          <circle
            cx="123.165"
            cy="197.037"
            r="16.75"
            style="fill:#F3D262;stroke-width:2px;stroke:#e76060;"
          />
          <g>
            <path
              d="M123.165,217.787l0,11.25"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
            <path
              d="M102.29,197.037l-11.25,0"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
            <path
              d="M123.165,164.787l0,11.25"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
            <path
              d="M155.29,197.037l-11.25,0"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
          </g>
          <g>
            <path
              d="M108.404,211.672l-5.378,5.379"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
            <path
              d="M108.316,182.239l-5.29,-5.29"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
            <path
              d="M143.128,176.949l-5.202,5.202"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
            <path
              d="M143.128,217.051l-5.202,-5.202"
              style="fill:none;stroke-width:2px;stroke:#e76060;"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="_Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(7.65404e-15,-125,125,7.65404e-15,399,197)"
          >
            <stop offset="0%" style="stop-color:#f8e5a4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#efc128;stop-opacity:1" />
          </linearGradient>
          <linearGradient
            id="_Linear2"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(4.64641e-16,-29.9107,7.58817,1.8315e-15,123.165,213.787)"
          >
            <stop offset="0%" style="stop-color:#f8e5a4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#efc128;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div
      class="d-flex align-items-center justify-content-between p-2"
      v-if="getCurrentDateData"
    >
      <div>
        <p class="m-0 small">
          <strong>Sunrise</strong>
        </p>
        <p class="m-0 small">
          {{ getTime(getCurrentDateData.sunrise) }}
        </p>
      </div>
      <div>
        <p class="m-0 small">
          <strong>Sunset</strong>
        </p>
        <p class="m-0 small">
          {{ getTime(getCurrentDateData.sunset) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// import { Chart } from 'chart.js';
import { addHours, format, startOfToday, sub } from 'date-fns';
import { mapGetters } from 'vuex';
export default {
  name: 'SunSetRise',
  data() {
    return {
      // chart: null,
      path: null,
      sun: null,
      tZero: Date.now(),
      duration: 5000,
      data: {
        labels: [],
        datasets: [
          {
            label: 'before sunrise',
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgb(3, 169, 244)',
            pointBorderWidth: 3,
            borderColor: 'rgb(3, 169, 244)',
            data: [],
          },
        ],
      },
    };
  },
  watch: {
    getCurrentDateData(d) {
      d && this.initChart();
    },
  },
  computed: {
    ...mapGetters(['getCurrentDateData']),
  },
  methods: {
    getTime(time) {
      return format(time * 1000, 'h:mm a');
    },
    run() {
      let u = Math.min((Date.now() - this.tZero) / this.duration, 1);
      if (u < 1) {
        requestAnimationFrame(() => this.run());
      } else {
        this.onFinish();
      }

      this.move(u);
    },
    onFinish() {
      // this.start(this.duration);
    },
    move(u) {
      const p = this.path.getPointAtLength(u * this.path.getTotalLength());
      this.sun.setAttribute(
        'transform',
        `translate(${p.x - 140}, ${p.y - 190})`
      );
    },
    start(duration) {
      this.duration = duration;
      this.tZero = Date.now();

      requestAnimationFrame(() => this.run());
    },
    initChart() {
      this.path = document.querySelector('#path');
      this.sun = document.querySelector('#sun');
      const sunriseOffset = this.getCurrentDateData.sunrise
        .toString()
        .split(':')
        .pop();
      const point =
        sub(addHours(startOfToday(), sunriseOffset)).getTime() -
        (this.getCurrentDateData.dt + sunriseOffset * 60 * 60) * 1000;
      console.log(point);
      this.move((point / 24) * 60 * 60 * 1000);
      this.checkDayNight();
    },
    checkDayNight() {
      const currentTime = this.getCurrentDateData.dt * 1000;
      const sunrise = this.getCurrentDateData.sunrise * 1000;
      const sunset = this.getCurrentDateData.sunset * 1000;
      if (currentTime < sunrise || currentTime > sunset) {
        this.sun
          .querySelectorAll('g')
          .forEach((g) => (g.style.display = 'none'));
        this.sun.querySelector('circle').style.fill = '#aaa';
        this.sun.querySelector('circle').style.stroke = '#aaa';
      } else {
        this.sun
          .querySelectorAll('g')
          .forEach((g) => (g.style.display = 'inline'));
        this.sun.querySelector('circle').style.fill = '#F3D262';
      }
    },
  },
  mounted() {
    if (this.getCurrentDateData) {
      this.initChart();
    }
  },
};
</script>
<style lang="scss" scoped>
.container-fluid {
  margin-top: 2rem;
  .canvasContainer {
    width: 100%;
    display: block;
  }
  .chartWrapper {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}
</style>
