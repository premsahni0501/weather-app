<template>
  <div class="container-fluid p-0">
    <div class="d-flex align-items-center justify-content-between p-2">
      <div>
        <p class="m-0 small">
          <strong>Sunrise</strong>
        </p>
        <p class="m-0 small">
          7:22am
        </p>
      </div>
      <div>
        <p class="m-0 small">
          <strong>Sunset</strong>
        </p>
        <p class="m-0 small">
          6:22pm
        </p>
      </div>
    </div>
    <div class="chartWrapper">
      <div class="canvasContainer">
        <canvas ref="sunCanvas" height="150"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import { Chart } from 'chart.js';
import { addHours, addMinutes, format, startOfDay, sub } from 'date-fns';
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
  methods: {
    getTimeline() {
      let boundary = '';
      const sunrise = '7:22';
      // const sunset = '6:22';
      // const noon = '12:20';
      const data = [];
      const labels = [];
      const startTime = startOfDay(new Date());
      const srSplit = sunrise.split(':');

      const hh = srSplit[0];
      const mm = srSplit[1];
      const start = addHours(startTime, 5);
      const middle = addMinutes(
        addHours(startTime, parseInt(hh)),
        parseInt(mm)
      );
      data.push(startTime.getTime() - start.getTime());
      data.push(sub(start, middle).getTime());
      data.push(startTime.getTime() - start.getTime());

      boundary = 'start';
      labels.push(format(addHours(startTime, 5), 'hh a'));
      labels.push(format(addHours(startTime, 13), 'hh a'));
      labels.push(format(addHours(startTime, 20), 'hh a'));
      return { data, labels, boundary };
    },
    initChart() {
      if (this.$refs['sunCanvas']) {
        const ctx = this.$refs['sunCanvas'].getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, 'rgba(245, 195, 46, 1)');
        gradient.addColorStop(0.5, 'rgba(245, 195, 46, 0.5)');
        gradient.addColorStop(0.51, 'rgba(0,0,0, 0.5)');
        gradient.addColorStop(1, 'rgba(0,0,0, 1)');

        this.data.datasets.forEach((d) => {
          d.backgroundColor = gradient;
          const { data, labels, boundary } = this.getTimeline();
          this.data.labels = labels;
          d.fill = boundary;
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
