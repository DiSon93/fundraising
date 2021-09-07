<template>
  <div>
    <div class="small">
      <line-chart
        :chart-data="datacollection"
        :height="50"
        :options="datacollection.options"
      ></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "@lib/LineChart.js";

export default {
  components: {
    LineChart,
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
        labels: [
          1975,
          1980,
          1985,
          1990,
          1995,
          2000,
          2005,
          2010,
          2015,
          2020,
          1975,
          1980,
          1985,
          1990,
          1995,
          2000,
          2005,
          2010,
          2015,
          2020,
        ],
        datasets: [
          {
            label: "Cây công nghiệp",
            borderColor: "#2DB7F5",
            radius: 1,
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
            tension: 0.1,
            fill: false,
          },
        ],
        options: {
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                display: false,
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                display: false,
              },
            ],
          },
          // tooltips: {
          //   callbacks: {
          //     labelColor: function (context) {
          //       return {
          //         borderColor: "rgb(0, 0, 255)",
          //         backgroundColor: "rgb(255, 0, 0)",
          //         borderWidth: 2,
          //         borderDash: [2, 2],
          //         borderRadius: 2,
          //       };
          //     },
          //     labelTextColor: function (context) {
          //       return "#fffff";
          //     },
          //   },
          // },
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
