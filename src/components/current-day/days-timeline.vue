<template>
  <div class="container-fluid p-0" v-if="getForecast">
    <div class="chartWrapper">
      <div class="canvasContainer">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
    <div class="row">
      <div
        class="col stat"
        v-if="getCurrentDateData && getCurrentDateData.pressure"
      >
        <div class="data">
          <h6>
            <strong>Pressure</strong>
          </h6>
          <h6 class="m-0">{{ getCurrentDateData.pressure }} hpa</h6>
        </div>
      </div>
      <div
        class="col stat"
        v-if="getCurrentDateData && getCurrentDateData.humidity"
      >
        <div class="data">
          <h6>
            <strong>Humidity</strong>
          </h6>
          <h6 class="m-0">{{ getCurrentDateData.humidity }}%</h6>
        </div>
      </div>
    </div>
    <sun-set-rise />
  </div>
  <div v-else class="container-fluid text-center">
    fetching weather data...
  </div>
</template>
<script>
import { Chart } from 'chart.js';
import { format, isSameDay } from 'date-fns';
import SunSetRise from './sun-set-rise';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'DaysTimelineChart',
  components: { SunSetRise },
  data() {
    return {
      chart: null,
      data: {
        labels: [],
        datasets: [
          {
            label: 'Days Timeline',
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
    getForecast() {
      this.getHourlyData();
    },
    getSelectedDate() {
      this.getHourlyData();
    },
  },
  computed: {
    ...mapGetters(['getSelectedDate', 'getForecast', 'getCurrentDateData']),
  },
  methods: {
    ...mapActions(['fetchHourlyForecast']),
    async getHourlyData() {
      if (this.getForecast.hourly?.length) {
        const data = this.getForecast.hourly;
        const temps = [];
        data.forEach((d) => {
          if (isSameDay(d.dt * 1000 - 1, this.getSelectedDate * 1000))
            temps.push({ temp: d.temp, date: d.dt });
        });
        this.data.datasets[0].data = temps.map((d) => d.temp);
        this.data.labels = temps.map((d) =>
          format(new Date(d.date * 1000), 'hh a')
        );
        this.$nextTick(() => {
          if (this.chart) {
            this.chart.update();
          } else {
            this.initChart();
          }
        });
      }
    },
    initChart() {
      if (this.$refs['canvas']) {
        const ctx = this.$refs['canvas'].getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, 'rgba(3, 169, 244, 1)');
        gradient.addColorStop(0.25, 'rgba(3, 169, 244, 0)');

        this.data.datasets.forEach((d) => {
          d.backgroundColor = gradient;
        });

        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.data,
          options: {
            maintainAspectRatio: false,
            events: [],
            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  display: false,
                },
              ],
            },
          },
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.chartWrapper {
  position: relative;
  overflow-x: auto;
  margin: 2rem -1rem;
  .canvasContainer {
    width: 100%;
    display: block;
    padding: 0.25rem;
    position: relative;
  }
}
.stat {
  flex-basis: auto;
  max-width: max-content;
  .data {
    background: #e4eef5;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
  }
}
@media screen and (max-width: 820px) {
  .canvasContainer {
    width: 1200px !important;
  }
  .stat {
    flex-basis: 0;
    max-width: 100%;
  }
}
</style>
