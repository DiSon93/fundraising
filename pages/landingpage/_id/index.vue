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
        <div
          class="infomation"
          v-bind:class="{ incoming: tag == 'incoming', finish: tag == 'finish' }"
        >
          <div class="heading">
            <div class="coin">
              <img src="@image/layouts/incoming_logo.png" alt="" />
              CloudZ
            </div>
            <div class="tag" v-if="tag == 'incoming'">
              <img src="@image/layouts/inccoming_tag.svg" alt="" id="tag_img" />
            </div>
            <div class="tag" v-if="tag == 'sale'">
              <img src="@image/icons/incoming_tag_sale.svg" alt="" id="tag_img" />
            </div>
            <div class="tag" v-if="tag == 'finish'">
              <img src="@image/icons/incoming_tag_finish.svg" alt="" id="tag_img" />
            </div>
          </div>
          <div class="content">
            Babylons is a next generation NFT marketplace with low-cost minting, weekly
            rewards, physical art gallery connections and and a DAO governance that puts
            the power in the hands of the community. Babylons is a next generation NFT
            marketplace with low-cost minting, weekly rewards, physical art gallery
            connections and and a DAO governance that puts the power in the hands of the
            community.
          </div>
          <div class="detail">
            <div class="token">
              <div class="title">Token</div>
              <div>
                <div class="items">
                  <a-row>
                    <a-col :span="12">
                      <div class="label">Token:</div>
                      <div class="label">Type:</div>
                      <div class="label">Total Supply:</div>
                      <div class="label">Initial Supply:</div>
                      <div class="label">Token Listing:</div>
                    </a-col>
                    <a-col :span="12">
                      <div>CloudZ</div>
                      <div>TRC20</div>
                      <div>3,685,500 Cloudz</div>
                      <div>4554.1545 Cloudz</div>
                      <div>17 Aug</div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
            <div class="distribution">
              <div class="title">Distributon</div>
              <div>
                <div class="items">
                  <a-row>
                    <a-col :span="8">
                      <div class="label">Distribution:</div>
                      <div class="label">Vesting</div>
                    </a-col>
                    <a-col :span="16">
                      <div>Claimed on Coinpad</div>
                      <div>20% at TGE, and 20% each 2 weeks</div>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
          </div>
          <div class="time_remaining" v-if="tag != 'finish'">
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
          <div v-if="tag == 'incoming'">
            <vs-button
              class="btn_started"
              color="rgb(59,222,200)"
              @click="$router.push('/landingpage/form')"
            >
              Register
            </vs-button>
          </div>
          <div v-if="tag == 'sale'">
            <vs-button
              class="btn_started"
              color="rgb(59,222,200)"
              @click="$router.push('/landingpage/buyToken')"
            >
              Invest Now
            </vs-button>
          </div>
          <div class="finish_overlay" v-if="tag == 'finish'"></div>
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
  data: () => ({
    tag: "",
  }),
  mounted() {
    this.tag =
      this.$route.params.id == "incoming"
        ? "incoming"
        : this.$route.params.id == "sale"
        ? "sale"
        : "finish";
  },
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
    padding: 30px 10px;
    background: linear-gradient(0deg, rgba(49, 180, 130, 0.05), rgba(49, 180, 130, 0.05)),
      rgba(251, 251, 251, 0.93);
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    border: 1px solid $green-black-02;
    height: 100% !important;
    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
      }
      .coin {
        font-weight: bold;
        font-size: 36px;
        line-height: 24px;
      }
      .tag {
        img {
          width: 100px;
          height: 23px;
        }
      }
    }
    .content {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
      margin: 15px 0;
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
        width: 80%;
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
  .incoming {
    background: linear-gradient(
        0deg,
        rgba(233, 180, 102, 0.05),
        rgba(233, 180, 102, 0.05)
      ),
      rgba(251, 251, 251, 0.93);
    /* Yellow */

    border: 1px solid #f2c94c;
  }
  .finish {
    background: linear-gradient(0deg, rgba(235, 87, 87, 0.05), rgba(235, 87, 87, 0.05)),
      rgba(251, 251, 251, 0.93);
    border: 1px solid #eb5757;
  }
  .finish_overlay {
    height: 150px;
  }
}
</style>
