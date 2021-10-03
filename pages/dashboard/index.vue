<template>
  <div class="dashboard">
    <div class="heading">
      <div class="crypto">
        <div class="balance">
          <div class="title">Total Balance</div>
          <div class="money">{{ currentUser.live_balance | displayCurrency }} <span class="curency">USDT</span></div>
        </div>
        <div class="balance invest">
          <div class="title">Total Invested</div>
          <div class="money">{{ currentUser.invest_balance | displayCurrency }} <span class="curency">USDT</span></div>
        </div>
        <div class="balance porfolio">
          <div class="title">Total Porfolio</div>
          <div class="money">???? <span class="curency">USDT</span></div>
        </div>
      </div>
      <!-- <div>
        <multiselect
          v-model="value"
          placeholder=""
          label="title"
          track-by="title"
          :options="options"
          :option-height="10"
          :custom-label="customLabel"
          :show-labels="false"
        >
          <template slot="singleLabel" slot-scope="props"
            ><img class="option__image" :src="props.option.img" alt="No Man’s Sky" /><span
              class="option__desc"
              ><span class="option__title">{{ props.option.title }}</span></span
            ></template
          >
          <template slot="option" slot-scope="props"
            ><img class="option__image" :src="props.option.img" alt="No Man’s Sky" />
            <div class="option__desc">
              <span class="option__title">{{ props.option.title }}</span>
            </div>
          </template>
        </multiselect>
      </div> -->
    </div>
    <div class="token_chart">
      <div class="title">Total Porforlio</div>
      <!-- <div class="money_token">
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
        <div class="token">
          <img src="@image/icons/token_04.svg" alt="" />
          <div class="detail">
            <div class="figure">23.234 <span class="curency">OKH</span></div>
            <div class="info">
              <img src="@image/icons/descrease.svg" alt="" />
              <div class="number decrease">-5.23%</div>
            </div>
          </div>
          <div class="overlay">-</div>
        </div>
        <div class="add_currency">
          <img src="@image/icons/addCurrent.svg" alt="" />
          <div class="add">Add Currency</div>
        </div>
      </div> -->
      <div class="chart_token token_token">
        <ChartToken />
      </div>
    </div>
    <div>
      <TokenTable />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import Multiselect from "vue-multiselect";
  import ChartToken from "@component/Dashboard/ChartToken";
  import TokenTable from "@component/Dashboard/Wallet/TokenTable";

  export default {
    components: { Multiselect, ChartToken, TokenTable },
    transition: {
      name: "slide-fade",
      mode: "out-in",
    },
    layout: "dashboard",
    data() {
      return {
        value: {
          title: "AXAX",
          desc: "AXAX",
          img: require("@image/icons/axax.svg"),
        },
        options: [
          {
            title: "AXAX",
            desc: "AXAX",
            img: require("@image/icons/axax.svg"),
          },
          {
            title: "BXBX",
            desc: "BXBX",
            img: require("@image/icons/axax.svg"),
          },
          { title: "CXCX", desc: "CXCX", img: require("@image/icons/axax.svg") },
          {
            title: "DXDX",
            desc: "DXDX",
            img: require("@image/icons/axax.svg"),
          },
          {
            title: "MXMX",
            desc: "MXMX",
            img: require("@image/icons/axax.svg"),
          },
        ],
      };
    },
    computed: {
      ...mapState("auth", ["currentUser"]),
    },
    methods: {
      customLabel({ title, desc }) {
        return `${title} – ${desc}`;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@asset/variables.scss";
  .dashboard {
    padding: 20px 50px;
    .heading {
      display: flex;
      justify-content: space-between;
      .crypto {
        display: flex;
        justify-content: center;
        width: 100%;
        .balance {
          border: 0.975833px solid #27ae60;
          box-sizing: border-box;
          border-radius: 9.75833px;
          padding: 10px 30px;
          text-align: center;
          margin-right: 20px;
          .title {
            font-weight: bold;
            font-size: 18px;
            line-height: 24px;
            color: $green-black-01;
          }
          .money {
            font-weight: normal;
            font-size: 16.5892px;
            line-height: 20px;
            margin-top: 5px;
            .curency {
              font-weight: normal;
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0.428571px;
              vertical-align: top;
              margin-top: 5px;
            }
          }
        }
        .invest {
          border: 0.975833px solid #e0e0e0;
          .title {
            color: $blue-text-01;
          }
        }
        .porfolio {
          border: 0.975833px solid #e0e0e0;
          .title {
            color: $purpose-text-01;
          }
        }
      }
    }
    .token_chart {
      padding: 30px 10px;
      background: rgba(255, 255, 255, 0.93);
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      margin-top: 30px;
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
