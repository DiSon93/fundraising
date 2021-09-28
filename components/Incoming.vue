<template>
  <!-- <Lazy> -->
  <div class="incoming">
    <div class="title">Incoming Project</div>
    <div class="token">
      $2M+ invested by 10,000+ investors in over 250 completed transactions.
    </div>
    <div class="incoming_info" v-if="incomingList.length != 0">
      <a-row>
        <a-col :xs="24" :sm="8" v-for="item in incomingList" :key="item.id">
          <div class="card">
            <div class="card_img">
              <img src="@image/layouts/incoming_01.svg" alt="" />
            </div>
            <div class="card_content">
              <img src="@image/layouts/inccoming_tag.svg" alt="" id="tag_img" />
              <div class="logo">
                <img src="@image/layouts/incoming_logo.png" alt="" />
                <img :src="item.project ? item.project.logo : ''" alt="" id="coin" />
              </div>
              <div class="card_title">{{ item.project ? item.project.title : null }}</div>
              <div class="content">
                <div class="quote">
                  {{
                    item.platform
                      ? item.platform.content
                      : "Vui lòng cho nội dung giúp! Thanks"
                  }}
                </div>
                <div class="social_netwwork">
                  <i class="bx bxl-facebook bx-sm"></i>
                  <i class="bx bxl-twitter bx-sm"></i>
                  <i class="bx bxl-telegram bx-sm"></i>
                  <i class="bx bxl-medium bx-sm"></i>
                  <i class="bx bxl-instagram-alt bx-sm"></i>
                  <i class="bx bxs-file bx-sm"></i>
                </div>
                <div class="detail">
                  <div class="field">Start</div>
                  <div class="time">{{ item.start_at }}</div>
                </div>
                <a-divider />
                <div class="detail">
                  <div class="field">End</div>
                  <div class="time">{{ item.end_at }}</div>
                </div>
                <a-divider />
                <div class="detail">
                  <div class="field">Token Accept</div>
                  <div class="coin">{{ item.token ? item.token.title : null }}</div>
                </div>
                <a-divider />
                <div class="detail">
                  <div class="field">Distribution</div>
                  <div class="coin">{{ item.distribution }}</div>
                </div>
                <vs-button
                  class="btn_join"
                  @click="
                    $router.push(
                      `/landingpage/${item.status}-${item.id}-${item.project.title}`
                    )
                  "
                  color="rgb(59,222,200)"
                >
                  Join Now
                </vs-button>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
  <!-- </Lazy> -->
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
export default {
  data: () => ({
    active: 0,
  }),
  mounted() {
    this.getIncomingProjectList();
  },
  computed: {
    ...mapState("packages", ["incomingList"]),
  },
  methods: {
    // ...mapActions("packages", ["getIncomingProjectList"]),
    async getIncomingProjectList() {
      try {
        await this.$store.dispatch("packages/getIncomingProjectList");
        console.log("packages", this.incomingList);
      } catch {}
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.incoming {
  margin-top: 60px;
  text-align: center;
  .title {
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
    margin: 10px 0px;
    color: $green-black-01;
  }
  .token {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  .incoming_info {
    padding: 0 10%;
    .card {
      width: 340px;
      height: 495px;
      margin: 0 auto;
      margin-bottom: 30px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      overflow: hidden;
      .card_img {
        height: 330px;
        overflow: hidden;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
      .card_content {
        text-align: left;
        padding: 0 20px;
        position: relative;
        padding-bottom: 50px;
        transition: 0.5s;
        #tag_img {
          margin-top: 15px;
        }
        .logo {
          position: absolute;
          top: -56px;
          left: 31%;
          overflow: hidden;
          border-radius: 50%;

          #coin {
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            top: 0px;
            transition: 1s;
          }
        }
        .card_title {
          margin-top: 20px;
          font-weight: bold;
          font-size: 24px;
          line-height: 24px;
          text-align: center;
          align-items: center;
          color: $black-text-03;
        }
        .content {
          .quote {
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: $black-text-04 !important;
            margin-top: 5px;
            display: flex;
            align-items: center;
            text-align: justify;
          }
          .social_netwwork {
            margin: 20px 30px;
            display: flex;
            justify-content: space-between;
            i {
              color: $green-black-01 !important;
            }
          }
          .btn_join {
            background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
            border-radius: 50px;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            width: 180px;
            height: 40px;
            margin: 0 auto;
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .detail {
            display: flex;
            justify-content: space-between;
            .time {
              color: $green-black-01;
              font-weight: 700;
            }
            .field {
              color: $black-text-04 !important;
            }
            .coin {
              font-weight: 700;
            }
          }
        }
      }
      &:hover {
        .card_content {
          transform: translateY(-250px);
          z-index: 9;
          background-color: $white-text-01;
          transition: 0.5s;
        }
        #coin {
          transform: translateX(-100.5px);
          transition: 1s;
        }
      }
    }
  }
}
.logo:hover {
  #coin {
    transform: scale(1.2);
    transition: all 0.5s;
  }
}
.ant-divider.ant-divider-horizontal {
  margin: 7px 0;
}
</style>
