import { Doughnut, mixins } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["data", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px",
        legend: { //hides the legend
          display: false,
          position: 'right',
          labels: {
            padding: 20,
            fontSize: 16,
            fontFamily: 'SF Pro Display'
          },
       },
       cutoutPercentage: 80,
    });
  }
};
