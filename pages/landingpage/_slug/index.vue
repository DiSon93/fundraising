<template>
  <div class="landingpage">
    <a-row :gutter="32">
      <a-col :sm="7" v-if="renderPackage != {}">
        <div class="token_info">
          <img src="@image/layouts/incoming_logo.png" alt="" />
          <div class="token_name">
            {{ renderPackage.project ? renderPackage.project.title : null }}
          </div>
          <div class="quote">
            {{ renderPackage.token ? renderPackage.token.title : null }}/USDT
          </div>
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
              <div>Không biết cái này</div>
            </div>
          </a>
          <div class="token_detail">
            <a-row class="time">
              <a-col :span="10">
                <div class="label">Start:</div>
                <div class="label">End:</div>
                <div class="label">FCFS Opens: (What??)</div>
              </a-col>
              <a-col :span="14">
                <div>{{ renderPackage.start_at }}UTC</div>
                <div>{{ renderPackage.end_at }} UTC</div>
                <div>16 Aug, 16:30 pm UTC</div>
              </a-col>
            </a-row>
            <a-row class="detail">
              <a-col :span="16">
                <div class="label">Access Type:</div>
                <div class="label">Soft Cap: (What??)</div>
                <div class="label">Hard Cap: (What??)</div>
                <div class="label">Min - Max. Contribution:</div>
                <div class="label">Address Contract:</div>
              </a-col>
              <a-col :span="8">
                <div>Level</div>
                <div>$1000</div>
                <div>$5000</div>
                <div>
                  ${{ renderPackage.min_distribution }}-{{
                    renderPackage.max_distribution
                  }}
                </div>
                <div>
                  {{ renderPackage.token ? renderPackage.token.address_contract : null }}
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :sm="17" v-if="packageDetail != {}">
        <div
          class="infomation"
          v-bind:class="{ incoming: tag == 'incoming', finish: tag == 'finish' }"
        >
          <div class="heading">
            <div class="coin">
              <img src="@image/layouts/incoming_logo.png" alt="" />
              {{ packageDetail.project ? packageDetail.project.title : null }}
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
          <div class="content">Vui lòng cho biết content ở đây là gì?</div>
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
                      <div>
                        {{ packageDetail.token ? packageDetail.token.title : null }}
                      </div>
                      <div>
                        {{ packageDetail.platform ? packageDetail.platform.title : null }}
                      </div>
                      <div>
                        {{
                          packageDetail.token ? packageDetail.token.total_supply : null
                        }}
                        {{ packageDetail.token ? packageDetail.token.title : null }}
                      </div>
                      <div>
                        {{ packageDetail.token ? packageDetail.token.init_supply : null }}
                        {{ packageDetail.token ? packageDetail.token.title : null }}
                      </div>
                      <div>17 Aug {không biết}</div>
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
                      <div>{{ packageDetail.distribution }}</div>
                      <div>{{ packageDetail.vesting }}</div>
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
                {{ date }}
                <div class="times">Day</div>
              </div>
              <div>:</div>
              <div class="number">
                {{ hours }}
                <div class="times">Hours</div>
              </div>
              <div>:</div>
              <div class="number">
                {{ minutes }}
                <div class="times">Minutes</div>
              </div>
              <div>:</div>
              <div class="number">
                {{ seconds }}
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
import { mapState, mapActions } from "vuex";
import moment from "moment";
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
    renderPackage: {},
    showTime: null,
    date: null,
    hours: null,
    minutes: null,
    seconds: null,
  }),
  computed: {
    ...mapState("packages", ["packageDetail"]),
  },
  mounted() {
    this.tag =
      this.$route.params.slug.split("-")[0] == "1"
        ? "incoming"
        : this.$route.params.slug.split("-")[0] == "2"
        ? "sale"
        : "finish";
    this.getPackageDetail();
  },
  methods: {
    async getPackageDetail() {
      try {
        await this.$store.dispatch(
          "packages/getDetailPackage",
          this.$route.params.slug.split("-")[1]
        );
        console.log("package", this.packageDetail);
        this.renderPackage = {
          ...this.packageDetail,
          start_at: moment(this.packageDetail.start_at).format("DD MMM h:mm a"),
          end_at: moment(this.packageDetail.end_at).format("DD MMM h:mm a"),
        };
        this.showTime = this.packageDetail.expired_time;
        setInterval(() => this.countTime(), 1000);
      } catch {}
    },
    countTime() {
      this.showTime = this.showTime - 1;
      this.date = Math.floor(this.showTime / 3600 / 24);
      this.hours = Math.floor(this.showTime / 3600) % 24;
      this.minutes = Math.floor(this.showTime / 60) % 60;
      this.seconds = Math.floor(this.showTime % 60);
      console.log(this.date, this.hours, this.minutes, this.seconds);
    },
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
      display: flex;
      align-items: center;
      img {
        width: 56px;
        height: 56px;
        margin-right: 5px;
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
