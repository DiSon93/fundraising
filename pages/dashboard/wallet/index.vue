<template>
  <div class="wallet">
    <div class="myWallet_selected">
      <vs-button success flat :active="active == 1" @click="active = 1" color="#6FCF97">
        My Wallet
      </vs-button>
      <vs-button success flat :active="active == 2" @click="active = 2" color="#6FCF97">
        Report
      </vs-button>
      <!-- <vs-button success flat :active="active == 3" @click="active = 3" color="#6FCF97">
        History
      </vs-button> -->
    </div>
    <div v-if="active == 1">
      <WalletPieChart />
      <div class="token_chart">
        <div class="title">Chart Token Invested</div>
        <div class="money_token">
          <div class="token token_active">
            <img src="@image/icons/token_01.svg" alt="" />
            <div class="detail">
              <div class="figure">10.9678 <span class="curency">UNI</span></div>
              <div class="info">
                <img src="@image/icons/increase.svg" alt="" />
                <div class="number">+12,5%</div>
              </div>
            </div>
            <div class="overlay active">-</div>
          </div>
          <div class="token">
            <img src="@image/icons/token_02.svg" alt="" />
            <div class="detail">
              <div class="figure">23.234 <span class="curency">DOT</span></div>
              <div class="info">
                <img src="@image/icons/descrease.svg" alt="" />
                <div class="number decrease">-5.23%</div>
              </div>
            </div>
            <div class="overlay">-</div>
          </div>
          <div class="token">
            <img src="@image/icons/token_03.svg" alt="" />
            <div class="detail">
              <div class="figure">308.234 <span class="curency">VEGA</span></div>
              <div class="info">
                <img src="@image/icons/increase.svg" alt="" />
                <div class="number">+39.69%</div>
              </div>
            </div>
            <div class="overlay">-</div>
          </div>
          <div class="add_currency">
            <img src="@image/icons/addCurrent.svg" alt="" />
            <div class="add">Add Currency</div>
          </div>
        </div>
        <div class="chart_token">
          <PorfolioChart />
        </div>
      </div>
      <div>
        <WithdrawDeposit />
      </div>
    </div>
    <div v-else>
      <DistributionHistory />
      <WalletHistory />
    </div>
  </div>
</template>

<script>
import WalletPieChart from "@component/Dashboard/Wallet/WalletPieChart.vue";
import PorfolioChart from "@component/Dashboard/Wallet/PorfolioChart";
import WithdrawDeposit from "@component/Dashboard/Wallet/WithdrawDeposit";
import DistributionHistory from "@component/Dashboard/Wallet/DistributionHistory";
import WalletHistory from "@component/Dashboard/Wallet/WalletHistory";
export default {
  layout: "dashboard",
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  components: {
    WalletPieChart,
    PorfolioChart,
    WithdrawDeposit,
    DistributionHistory,
    WalletHistory,
  },
  data: () => ({
    active: 1,
  }),
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.wallet {
  .myWallet_selected {
    display: flex;
    margin: 0 10px;
    justify-content: center;
    margin-bottom: 40px;
    .vs-button {
      width: 150px;
      height: 32px;
      //   .vs-button__content {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      //   }
    }
    .vs-button--active {
      color: $white-text-01;
    }
  }
  .token_chart {
    padding: 30px 10px;
    background: rgba(255, 255, 255, 0.93);
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    margin: 40px 50px;
    .title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      margin-bottom: 30px;
      margin-left: 20px;
    }
    .money_token {
      margin-left: 20px;
      display: flex;
      .token {
        position: relative;
        border: 0.975833px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 9.75833px;
        padding: 10px 10px;
        display: flex;
        margin-right: 20px;
        .overlay {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: $background-grey-03;
          top: -8px;
          right: -8px;
          color: $grey-black-03;
          font-weight: 700;
          text-align: center;
          line-height: 20px;
        }
        .active {
          background-color: $background-dashboard;
          color: $white-text-01;
        }
        img {
          margin-right: 10px;
        }
        .detail {
          .figure {
            font-weight: normal;
            font-size: 17px;
            line-height: 20px;
            .curency {
              font-weight: normal;
              font-size: 12px;
              line-height: 14px;
              vertical-align: top;
            }
          }
          .info {
            display: flex;
            .number {
              font-weight: bold;
              font-size: 18px;
              line-height: 21px;
              color: $green-text-02;
            }
            .decrease {
              color: $red-text-01;
            }
          }
        }
      }
      .token_active {
        border: 0.975833px solid #6fcf97;
      }
      .add_currency {
        border: 0.975833px dashed #e0e0e0;
        box-sizing: border-box;
        border-radius: 9.75833px;
        display: flex;
        width: 145px;
        height: 63px;
        padding-left: 10px;
        align-items: center;
        .add {
          word-break: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
        }
        img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
      }
    }
    .chart_token {
      margin-top: 40px;
    }
  }
}
</style>
