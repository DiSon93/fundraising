<template>
  <div class="landingpage">
    <a-row :gutter="32" v-if="projectDetail.id != undefined && projectDetail.token != null">
      <a-col :sm="7">
        <div class="token_info">
          <img :src="projectDetail.logo" :alt="projectDetail.title" />
          <div class="token_name">
            {{ projectDetail.title }}
          </div>
          <div class="quote">
            {{ projectDetail.token.symbol }}/USDT
          </div>
          <div class="social_netwwork">
            <a :href="projectDetail.facebook_url" target="_blank" v-if="projectDetail.facebook_url != null">
              <i class="bx bxl-facebook bx-sm"></i>
            </a>
            <a :href="projectDetail.twitter_url" target="_blank" v-if="projectDetail.twitter_url != null">
              <i class="bx bxl-twitter bx-sm"></i>
            </a>
            <a :href="projectDetail.telegram_url" target="_blank" v-if="projectDetail.telegram_url != null">
              <i class="bx bxl-telegram bx-sm"></i>
            </a>
            <a :href="projectDetail.medium_url" target="_blank" v-if="projectDetail.medium_url != null">
              <i class="bx bxl-medium bx-sm"></i>
            </a>
            <a :href="projectDetail.instagram_url" target="_blank" v-if="projectDetail.instagram_url != null">
              <i class="bx bxl-instagram-alt bx-sm"></i>
            </a>
            <a :href="projectDetail.whitepaper_url" target="_blank" v-if="projectDetail.whitepaper_url != null">
              <i class="bx bxs-file bx-sm"></i>
            </a>
          </div>
          <a href="javascript:;">
            <div class="transfer">
              <div>1 USDT = 25 {{ projectDetail.token.symbol }}</div>
              <div>1 {{ projectDetail.token.symbol }} = 0.04 USDT</div>
              <div>Vì chưa có giá nên để mặc định con số trên</div>
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
                <div>{{ projectDetail.package.start_at }} UTC</div>
                <div>{{ projectDetail.package.end_at }} UTC</div>
                <div>Đây là gì?</div>
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
                <div>Levels -> Đây là gì?</div>
                <div>$1000</div>
                <div>$5000</div>
                <div>
                  ${{ projectDetail.package.min_distribution }}-{{
                    projectDetail.package.max_distribution
                  }}
                </div>
                <div>
                  {{ projectDetail.token.address_contract }}
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-col>
      <a-col :sm="17">
        <DetailProject :projectDetail="projectDetail" @changePage="page = $event" v-if="page == ''" />
        <BuyToken :projectDetail="projectDetail" @changePage="page = $event" v-else-if="page == 'buy'" />
      </a-col>
    </a-row>
    <FeatureProject />
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import moment from "moment";
  import FeatureProject from "@component/FeatureProject.vue";
  import DetailProject from "@component/LandingPage/detailProject.vue";
  import BuyToken from "@component/LandingPage/buyToken.vue";

  
  export default {
    components: {
      FeatureProject,
      DetailProject,
      BuyToken
    },
    transition: {
      name: "home",
      mode: "out-in",
    },
    data() {
      return {
        page: ''
      }
    },
    computed: {
      ...mapState("packages", ["packageDetail"]),
      ...mapState("projects", ["projectDetail"])
    },
    mounted() {
        // this.$route.params.slug.split("-")[0] == "1"
        //   ? "incoming"
        //   : this.$route.params.slug.split("-")[0] == "2"
        //   ? "sale"
        //   : "finish";
      // this.getPackageDetail();
      this.getProjectDetail(this.$route.params.slug);
    },
    methods: {
      ...mapActions('projects', ['getProjectDetail']),
      // async getPackageDetail() {
      //   try {
      //     await this.$store.dispatch(
      //       "packages/getDetailPackage",
      //       // this.$route.params.slug.split("-")[1]
      //       1265
      //     );
      //     console.log("package", this.packageDetail);
      //     this.renderPackage = {
      //       ...this.packageDetail,
      //       start_at: moment(this.packageDetail.start_at).format("DD MMM h:mm a"),
      //       end_at: moment(this.packageDetail.end_at).format("DD MMM h:mm a"),
      //     };
      //     this.showTime = this.packageDetail.expired_time;
      //     setInterval(() => this.countTime(), 1000);
      //   } catch {}
      // },
      // countTime() {
      //   this.showTime = this.showTime - 1;
      //   this.date = Math.floor(this.showTime / 3600 / 24);
      //   this.hours = Math.floor(this.showTime / 3600) % 24;
      //   this.minutes = Math.floor(this.showTime / 60) % 60;
      //   this.seconds = Math.floor(this.showTime % 60);
      //   console.log(this.date, this.hours, this.minutes, this.seconds);
      // }
    }
  }
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