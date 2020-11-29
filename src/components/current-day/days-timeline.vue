<template>
  <div class="container-fluid p-0">
    <div class="chartWrapper">
      <div class="canvasContainer">
        <canvas ref="canvas" width="1200" height="180"></canvas>
      </div>
    </div>
    <div class="row">
      <div class="col stat">
        <div class="data">
          <h6>
            <strong>Pressure</strong>
          </h6>
          <h6 class="m-0">
            1013hpa
          </h6>
        </div>
      </div>
      <div class="col stat">
        <div class="data">
          <h6>
            <strong>Humidity</strong>
          </h6>
          <h6 class="m-0">
            93%
          </h6>
        </div>
      </div>
    </div>
    <sun-set-rise />
  </div>
</template>
<script>
import { Chart } from 'chart.js';
import { addHours, format, startOfDay } from 'date-fns';
import SunSetRise from './sun-set-rise';

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
  methods: {
    getTimeline() {
      const data = [];
      const labels = [];
      const startTime = startOfDay(new Date());
      for (let i = 0; i <= 24; i++) {
        data.push(Math.random() * 50);
        labels.push(format(addHours(startTime, i), 'hh a'));
      }
      return { data, labels };
    },
    initChart() {
      if (this.$refs['canvas']) {
        const ctx = this.$refs['canvas'].getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, 'rgba(3, 169, 244, 1)');
        gradient.addColorStop(0.25, 'rgba(3, 169, 244, 0)');

        const { data, labels } = this.getTimeline();
        this.data.labels = labels;
        this.data.datasets.forEach((d) => {
          d.backgroundColor = gradient;
          d.data = data;
        });

        this.chart = new Chart(ctx, {
          type: 'line',
          data: this.data,
          options: {
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
    this.initChart();
  },
};
</script>
<style lang="scss" scoped>
.chartWrapper {
  position: relative;
  overflow-x: auto;
  margin: 2rem -1rem;
  .canvasContainer {
    width: 1200px;
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
  .stat {
    flex-basis: 0;
    max-width: 100%;
  }
}
</style>
