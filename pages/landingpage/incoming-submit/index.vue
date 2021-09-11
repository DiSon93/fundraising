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
            <div class="coin">Human Option 2 Sale</div>
            <div class="quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div class="progress">
            <a-progress
              :percent="99"
              status="active"
              :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
              }"
              strokeWidth="20"
            />
          </div>
          <div class="intro">
            <div class="number_name">Number of user in line ahead of you</div>
            <div class="number">1232123</div>
            <div class="time">Your estimates wait time is: More than an hour</div>
            <div class="time">Status last update: 11:02:54 PM UTC</div>
          </div>
          <div class="submit_form">
            <div class="allocation">
              Allocation Left: <span class="dolla">$12.121.221</span>
            </div>
            <div class="purchase">How much do you want to purchase?</div>
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
              <div class="btn_action">
                <vs-button
                  class="btn_deposit"
                  color="#0b9985"
                  @click="$router.push('/register')"
                >
                  Submit
                </vs-button>
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
        font-size: 18px;
        line-height: 24px;
        margin: 20px 0 20px;
        color: $grey-black-03;
      }
    }
    .progress {
      margin: 20px 0;
    }
    .submit_form {
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 20px;
      margin-top: 30px;
      .allocation {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        color: $green-black-01;
        .dolla {
          color: $grey-black-03;
        }
      }
      .purchase {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: $green-black-01;
        margin-bottom: 20px;
        margin-top: 20px;
      }
    }
    .intro {
      background: rgba(251, 251, 251, 0.93);
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      padding: 25px 0;
      .number_name,
      .number,
      .time {
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        font-weight: 500;
      }
      .number {
        color: $green-black-01;
        font-weight: 700;
        font-size: 36px;
        margin: 15px 0;
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
