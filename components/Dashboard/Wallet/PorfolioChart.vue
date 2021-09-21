<template>
  <div>
    <div class="small">
      <line-chart
        :chart-data="datacollection"
        :height="160"
        :options="datacollection.options"
      ></line-chart>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
let parentEventHandler = Chart.Controller.prototype.eventHandler;
Chart.Controller.prototype.eventHandler = function () {
  let ret = parentEventHandler.apply(this, arguments);

  // let x = arguments[0].x;
  // let y = arguments[0].y;
  this.clear();
  this.draw();
  if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
    var activePoint = this.chart.tooltip._active[0];
    var x = activePoint.tooltipPosition().x;
    var topY = this.chart.scales["y-axis-0"].top;
    var bottomY = this.chart.scales["y-axis-0"].bottom;
    let yScale = this.scales["y-axis-0"];
    this.chart.ctx.beginPath();
    this.chart.ctx.moveTo(x, topY);
    this.chart.ctx.strokeStyle = "#9C9C9C";
    this.chart.ctx.lineTo(x, bottomY);
    this.chart.ctx.stroke();
    this.chart.ctx.restore();
    this.chart.ctx.lineWidth = 0.2;
  }

  return ret;
};
import LineChart from "@lib/LineChart.js";
// import ApexCharts from "apexcharts";
export default {
  components: {
    LineChart,
    // apexchart: VueApexCharts,
  },
  data: () => ({
    datacollection: {},
  }),
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        // lineAtIndex: 2,
        labels: [
          "11/06",
          "12/06",
          "13/06",
          "14/06",
          "15/06",
          "16/06",
          "17/06",
          "18/06",
          "19/06",
          "20/06",
          "21/06",
          "22/06",
          "23/06",
          "24/06",
          "25/06",
          "26/06",
          "27/06",
          "28/06",
          "29/06",
          "30/06",
        ],
        datasets: [
          {
            label: "AXAX",
            borderColor: "#9B51E0",
            borderWidth: 1,
            radius: 0,
            data: [
              70,
              95,
              100,
              120,
              257,
              271,
              300,
              321,
              383,
              450,
              210,
              600,
              500,
              680,
              700,
              800,
              810,
              840,
              880,
              920,
            ],
            tension: 0.3,
            fill: false,
          },
          {
            label: "BXBX",
            borderColor: "#EB5757",
            borderWidth: 1,
            radius: 0,
            data: [
              120,
              345,
              130,
              120,
              57,
              291,
              390,
              121,
              583,
              650,
              280,
              700,
              510,
              480,
              500,
              810,
              890,
              540,
              780,
              820,
            ],
            tension: 0.3,
            fill: false,
          },
          {
            label: "CXCX",
            borderColor: "#219653",
            borderWidth: 1,
            radius: 0,
            data: [
              270,
              395,
              560,
              520,
              657,
              631,
              770,
              551,
              693,
              790,
              810,
              820,
              800,
              900,
              550,
              730,
              780,
              690,
              850,
              820,
            ],
            tension: 0.3,
            fill: false,
          },
          {
            label: "DXDX",
            borderColor: "rgba(255, 166, 0, 0.973)",
            borderWidth: 1,
            radius: 0,
            data: [
              270,
              390,
              460,
              345,
              563,
              223,
              432,
              123,
              432,
              332,
              510,
              442,
              235,
              432,
              432,
              430,
              234,
              341,
              543,
              642,
            ],
            tension: 0.3,
            fill: false,
          },
        ],
        options: {
          responsive: true,
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 30,
              boxWidth: 30,
              fontSize: 14,
            },
          },

          interaction: {
            mode: "index",
            intersect: false,
          },
          tooltips: {
            mode: "index",
            intersect: false,
            xPadding: 15,
            yPadding: 15,
            backgroundColor: "#FFF",
            titleFontSize: 16,
            titleFontColor: "#0066ff",
            bodyFontColor: "#9C9C9C",
            bodyFontSize: 14,
            bodySpacing: 10,
            titleMarginBottom: 10,
            borderWidth: 0.5,
            borderColor: "#9C9C9C",
            // position: "top",
            callbacks: {
              //   labelColor: function (context) {
              //     return {
              //       padding: 7,
              //     };
              //   },
              //   labelTextColor: function (context) {
              //     return {
              //       padding: 6,
              //     };
              //   },
            },
          },
          hover: {
            mode: "index",
            intersect: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  borderDash: [8, 4],
                  zeroLineColor: "#fff",
                  zeroLineWidth: 0,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  borderDash: [8, 4],
                  zeroLineWidth: 0,
                },
              },
            ],
            // yAxes: [
            //   {
            //     display: false,
            //   },
            // ],
            // y: {
            //   display: false,
            // },
          },
          //   tooltips: {
          //     interaction: {
          //       mode: "y",
          //     },
          //     callbacks: {
          //       labelColor: function (context) {
          //         return {
          //           borderColor: "rgb(0, 0, 255)",
          //           backgroundColor: "#fff",
          //           borderWidth: 2,
          //           borderDash: [2, 2],
          //           borderRadius: 2,
          //         };
          //       },
          //       labelTextColor: function (context) {
          //         return "#fffff";
          //       },
          //     },
          //   },
          annotation: {
            annotations: [
              {
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: "MAR",
                borderColor: "red",
                label: {
                  content: "TODAY",
                  enabled: true,
                  position: "top",
                },
              },
            ],
          },
        },
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style lang="scss" scoped></style>
