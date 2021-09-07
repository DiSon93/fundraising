<template>
  <div class="allocation">
    <div class="pie">
      <div class="pie_title">Asset Allocation:</div>
      <div class="pie_position">
        <div id="pie_chart">
          <pie-chart
            :data="chartData"
            :options="chartData.options"
            :height="100"
            :width="100"
          ></pie-chart>
        </div>
        <div class="note">
          <div class="position">
            <div class="token">
              <div class="money">
                <div class="color" style="background-color: #41b883"></div>
                <div class="name">USDT</div>
              </div>
              <div class="percent">20%</div>
            </div>
            <div class="token">
              <div class="money">
                <div class="color" style="background-color: #c0c0c0"></div>
                <div class="name">NEAR</div>
              </div>
              <div class="percent">14%</div>
            </div>

            <div class="token">
              <div class="money">
                <div class="color" style="background-color: #00d8ff"></div>
                <div class="name">UNI</div>
              </div>
              <div class="percent">33%</div>
            </div>
            <div class="token">
              <div class="money">
                <div class="color" style="background-color: #dfff00"></div>
                <div class="name">DOGE</div>
              </div>
              <div class="percent">12%</div>
            </div>
            <div class="token">
              <div class="money">
                <div class="color" style="background-color: #ff7f50"></div>
                <div class="name">DOT</div>
              </div>
              <div class="percent">15%</div>
            </div>
            <div class="token">
              <div class="money">
                <div class="color" style="background-color: #ff00ff"></div>
                <div class="name">Other</div>
              </div>
              <div class="percent">5%</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="info">
      <div class="income">
        <div class="title">Total Income:</div>
        <div class="amount">$100.000</div>
        <div class="currency">USDT</div>
      </div>
      <div class="invest">
        <div class="title">Total Invest::</div>
        <div class="amount">$100.000</div>
        <div class="currency">USDT</div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "@lib/PieChart.js";
export default {
  components: {
    PieChart,
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        hoverBorderWidth: 20,
        cutout: 80,
        // plugins: {

        // },
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["USDT", "NEAR", "UNI", "DOGE", "DOT", "Other"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: [
              "#41B883",
              "#C0C0C0",
              "#00D8FF",
              "#DFFF00",
              "#FF7F50",
              "#FF00FF",
            ],
            data: [20, 14, 33, 12, 15, 5],
          },
        ],
        options: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              padding: 30,
            },
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.allocation {
  display: flex;
  padding: 0px 50px;
  .pie {
    width: 60%;
    height: 370px;
    // display: flex;
    padding: 20px 50px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: $white-text-01;
    .pie_title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      text-align: center;
    }
    .pie_position {
      display: flex;
      #pie_chart {
        width: 300px;
      }
      .note {
        // width: 50%;
        margin-left: 10%;
        display: flex;
        align-items: center;
        .position {
        }

        .token {
          display: flex;
          justify-content: space-between;
          width: 140px;
          margin: 10px 0;
          .money {
            display: flex;
            align-items: center;
            .color {
              width: 20px;
              height: 20px;
              background-color: #41b883;
              border-radius: 50%;
              margin-right: 6px;
            }
          }
          .name,
          .percent {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
          }
          .percent {
          }
        }
      }
    }
  }
  .info {
    margin-left: 40px;
    text-align: center;
    width: 40%;

    .income {
      padding: 30px 40px;
      margin-bottom: 40px;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: $white-text-01;
    }
    .invest {
      padding: 30px 100px;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 20px;
      background-color: $white-text-01;
    }
    .title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
    }
    .amount {
      font-weight: 500;
      font-size: 36px;
      line-height: 24px;
      color: $black-text-04;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .currency {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: $black-text-04;
    }
  }
}
#pie_chart {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  #doughnut-chart {
    margin-top: -50px;
  }
}
</style>
