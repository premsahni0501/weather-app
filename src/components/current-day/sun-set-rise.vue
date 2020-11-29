<template>
  <div class="container-fluid p-0">
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
    <div class="chartWrapper">
      <div class="canvasContainer" style="height: 200px">
        <canvas ref="sunCanvas" height="150px"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import { Chart } from 'chart.js';
import { format, startOfDay, addHours } from 'date-fns';
import { mapGetters } from 'vuex';
export default {
  name: 'SunSetRise',
  data() {
    return {
      chart: null,
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
    initChart() {
      if (this.$refs['sunCanvas']) {
        const ctx = this.$refs['sunCanvas'].getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, 'rgba(245, 195, 46, 1)');
        gradient.addColorStop(1, 'rgba(245, 195, 46, 0)');

        this.data.datasets.forEach((d) => {
          d.backgroundColor = gradient;
          d.fill = 'start';
          const sunrise = new Date(
            this.getCurrentDateData.sunrise * 1000
          ).getTime();
          const noon = addHours(startOfDay(sunrise), 12);
          const sunset =
            noon.getTime() -
            new Date(this.getCurrentDateData.sunset * 1000).getTime();
          d.data = [sunrise - noon.getTime(), noon, sunset];
          console.log(d.data);
          this.data.labels = [
            format(sunrise, 'h:mm a'),
            format(noon, 'h:mm a'),
            format(new Date(this.getCurrentDateData.sunset * 1000), 'h:mm a'),
          ];
        });

        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.data,
          options: {
            maintainAspectRatio: false,
            events: [],
            tooltips: {
              enabled: false,
            },
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
