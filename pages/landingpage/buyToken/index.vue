<template>
  <div class="landingpage">
    <a-row :gutter="32">
      <a-col :sm="7">
        <div class="token_info">
          <img src="@image/layouts/incoming_logo.png" alt="" />
          <div class="token_name">CloudZ</div>
          <div class="quote">CloudZ/USDT</div>
          <div class="social_netwwork">
            <i class="bx bxl-facebook bx-sm"></i>
            <i class="bx bxl-twitter bx-sm"></i>
            <i class="bx bxl-telegram bx-sm"></i>
            <i class="bx bxl-medium bx-sm"></i>
            <i class="bx bxl-instagram-alt bx-sm"></i>
            <i class="bx bxs-file bx-sm"></i>
          </div>
          <a href="javascript:;">
            <div class="transfer">
              <div>1 BUSD = 25 ROY</div>
              <div>1 ROY= 0.04 BUSD</div>
            </div>
          </a>
          <div class="token_detail">
            <a-row class="time">
              <a-col :span="10">
                <div class="label">Start:</div>
                <div class="label">End:</div>
                <div class="label">FCFS Opens:</div>
              </a-col>
              <a-col :span="14">
                <div>16 Aug, 09:00 am UTC</div>
                <div>16 Aug, 17:00 pm UTC</div>
                <div>16 Aug, 16:30 pm UTC</div>
              </a-col>
            </a-row>
            <a-row class="detail">
              <a-col :span="16">
                <div class="label">Access Type:</div>
                <div class="label">Soft Cap:</div>
                <div class="label">Hard Cap:</div>
                <div class="label">Min - Max. Contribution:</div>
                <div class="label">Address Contract:</div>
              </a-col>
              <a-col :span="8">
                <div>Level</div>
                <div>$1000</div>
                <div>$5000</div>
                <div>$50-100</div>
                <div>0xc25af3123d24 54c8fcd144c211 853f39</div>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :sm="17">
        <div class="infomation">
          <div class="heading">
            <div class="coin">Buy Token</div>
            <div class="quote">Import USDT From Your Wallet:</div>
          </div>
          <div class="content">
            <div class="input">
              <a-input placeholder="0.0" size="large" />
              <div class="currency">
                <div class="max">MAX</div>
                <div class="tokens">
                  <img src="@image/icons/USDT.svg" alt="" />
                  <span>USDT</span>
                </div>
              </div>
            </div>
            <div class="limit">Available limit:12,710 USDT</div>
            <div class="transactions">
              <div class="fee">
                <div class="name">Transaction fee:</div>
                <div class="figure">0.01 USDT</div>
              </div>
              <div class="total">
                <div class="name">Total:</div>
                <div class="figure">10.610 USDT</div>
              </div>
            </div>
            <div class="btn_action">
              <vs-button
                class="btn_approve"
                color="#6FCF97"
                @click="$router.push('/register')"
              >
                Approve
              </vs-button>
              <vs-button
                class="btn_deposit"
                color="#0b9985"
                @click="$router.push('/dashboard/wallet/deposit')"
              >
                Deposit
              </vs-button>
            </div>
          </div>
          <div class="detail_title">Details</div>
          <div class="detail">
            <div class="token">
              <div>
                <div class="items">
                  <a-row>
                    <a-col :span="12">
                      <div class="label">Total Rewards:</div>
                      <div class="label">Deposit Token:</div>
                      <div class="label">Deposit Period:</div>
                    </a-col>
                    <a-col :span="12">
                      <div>866667 Cloudz Token</div>
                      <div>USDT</div>
                      <div>1 hour(s)</div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
            <div class="distribution">
              <div>
                <div class="items">
                  <a-row>
                    <a-col :span="16">
                      <div class="label">Total USDT Deposited:</div>
                      <div class="label">Max. Deposit Available</div>
                      <div class="label">Your Share:</div>
                    </a-col>
                    <a-col :span="8">
                      <div>78000</div>
                      <div>1000</div>
                      <div>90%</div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </div>
          <div class="time_remaining">
            <div class="title">Time Remaining</div>
            <div class="schedule">
              <div class="number">
                10
                <div class="times">Day</div>
              </div>
              <div>:</div>
              <div class="number">
                10
                <div class="times">Hours</div>
              </div>
              <div>:</div>
              <div class="number">
                10
                <div class="times">Minutes</div>
              </div>
              <div>:</div>
              <div class="number">
                10
                <div class="times">Seconds</div>
              </div>
            </div>
          </div>
        </div>
        
      </a-col>
    </a-row>
    <FeatureProject />
  </div>
</template>

<script>
import FeatureProject from "@component/FeatureProject.vue";
export default {
  components: {
    FeatureProject,
  },
  transition: {
    name: "home",
    mode: "out-in",
  },
  data: () => ({}),
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.landingpage {
  padding: 0 6%;
  .token_info {
    background: rgba(251, 251, 251, 0.93);
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    padding: 30px 10px;
    text-align: center;
    margin-right: 15px;
    .token_name {
      font-weight: bold;
      font-size: 36px;
      line-height: 24px;
      margin: 10px 0;
    }
    .social_netwwork {
      color: $green-black-01;
      margin: 10px 0;
      i {
        margin: 0 5px;
      }
    }
    a .transfer {
      color: $green-black-01;
      border-radius: 5px;
      padding-top: 8px;
      padding-bottom: 8px;
      border: 1px solid $green-black-01;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
    }
    .token_detail {
      text-align: left;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 15px 10px;
      margin-top: 15px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      .time {
        margin-bottom: 20px;
      }
      .label {
        color: $green-black-01;
        font-weight: 700;
      }
      margin-bottom: 100px;
    }
  }
  .infomation {
    padding: 50px 10%;
    background: linear-gradient(0deg, rgba(49, 180, 130, 0.05), rgba(49, 180, 130, 0.05)),
      rgba(251, 251, 251, 0.93);
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    border: 1px solid $green-black-02;
    height: 100% !important;
    .heading {
      color: $green-black-01;
      .coin {
        font-weight: bold;
        font-size: 36px;
        line-height: 24px;
      }
      .quote {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        margin: 20px 0 20px;
      }
    }
    .content {
      .input {
        position: relative;
        .currency {
          position: absolute;
          right: 10px;
          top: 8px;
          display: flex;
          align-items: center;
          .max {
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            color: $green-black-01;
          }
          .tokens {
            display: flex;
            align-items: center;
            img {
              margin: 0 4px;
              width: 24px;
              height: 24px;
            }
          }
        }
        .ant-input {
          box-sizing: border-box;
          border-radius: 50px;
          padding-left: 20px;
          padding-right: 120px;
        }
      }
      .limit {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: $grey-black-03;
        text-align: right;
      }
      .transactions {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        .fee {
          border: 1px solid #e0e0e0;
          box-sizing: border-box;
          border-radius: 5px;
          padding: 20px;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          display: flex;
          margin: 0 20px;
          .name {
            color: $grey-black-03;
          }
          .figure {
            margin-left: 10px;
          }
        }
        .total {
          border: 1px solid #6fcf97;
          box-sizing: border-box;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          display: flex;
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          margin: 0 20px;
          width: 237px;
          .name {
            color: $green-black-01;
          }
          .figure {
            margin-left: 10px;
            color: $green-black-01;
          }
        }
      }
      .btn_action {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        .btn_approve {
          background: #219653;
          border-radius: 50px;
          margin: 0 20px;
          font-weight: bold;
          font-size: 24px;
          line-height: 24px;
          padding: 2px 20px;
        }
        .btn_deposit {
          margin: 0 20px;
          border-radius: 50px;
          margin: 0 20px;
          font-weight: bold;
          font-size: 24px;
          line-height: 24px;
          padding: 2px 20px;
        }
      }
    }
    .detail_title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      margin: 20px 0;
    }
    .detail {
      display: flex;
      .title {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: $green-black-01;
        margin-bottom: 20px;
      }
      .token {
        width: 50%;
      }
      .distribution {
        width: 50%;
      }
      .items {
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 15px;
        width: 90%;
        font-size: 16px;
        line-height: 24px;

        .label {
          font-weight: bold;
        }
      }
    }
    .time_remaining {
      margin-top: 30px;
      .title {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: $green-black-01;
        margin-bottom: 20px;
      }
      .schedule {
        background: linear-gradient(0deg, rgba(7, 160, 121, 0.1), rgba(7, 160, 121, 0.1)),
          #f2f2f2;
        font-weight: normal;
        font-size: 64px;
        line-height: 24px;
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        padding: 30px 0 10px;
        .times {
          color: $grey-black-02;
          font-weight: 500;
          font-size: 14px;
          margin-top: 12px;
          text-align: center;
        }
        .number {
          margin: 0 15px;
        }
      }
    }
    .btn_started {
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 50px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      padding: 0 20px;
      margin: 30px auto 80px;
    }
  }
}
</style>
