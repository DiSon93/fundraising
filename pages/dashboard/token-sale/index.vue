<template>
  <div class="token-sale">
    <div class="wallet">
      <div class="curency">
        <div class="name">Your Wallet:</div>
        <div class="money">{{ currentUser.live_balance | displayCurrency }} <span class="unit">USDT</span></div>
      </div>
      <div></div>
      <div class="search">
        <div>
          <a-input-search
            placeholder="Enter your search project here"
            style="width: 33%"
            @search="onSearch"
          />
        </div>
        <a href="javascript:;" v-if="convert == 0"
          ><img src="@image/icons/token_arrow.svg" alt=""
        /></a>
        <a href="javascript:;" v-else @click="convert = 0"
          ><img src="@image/icons/token_arrow_01.svg" alt=""
        /></a>

        <a href="javascript:;" v-if="convert == 1">
          <img src="@image/icons/token_column_01.svg" alt=""
        /></a>

        <a href="javascript:;" v-else @click="convert = 1">
          <img src="@image/icons/token_column.svg" alt=""
        /></a>
      </div>
      <div></div>
    </div>
    <div class="incoming" v-if="convert == 0">
      <div class="title">Incoming Project</div>
      <div class="incoming_info">
        <a-row v-if="projectList.data.length > 0">
          <a-col :xs="24" :sm="8" v-for="item in projectList.data" :key="item.id">
            <div class="card" v-if="item.sale_status == 1">
              <div class="card_img">
                <img src="@image/layouts/incoming_01.svg" alt="" />
              </div>
              <div class="card_content">
                <img src="@image/layouts/inccoming_tag.svg" alt="" id="tag_img" />
                <div class="logo">
                  <img src="@image/layouts/incoming_logo.png" alt="" />
                  <img :src="item.project ? item.project.logo : ''" alt="" id="coin" />
                </div>
                <div class="card_title">
                  {{ item.project ? item.project.title : null }}
                </div>
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
      <div class="title">Token Sale</div>
      <div class="incoming_info">
        <a-row v-if="projectList.data.length > 0">
          <a-col :xs="24" :sm="8" v-for="item in projectList.data" :key="item.id">
            <div class="card" v-if="item.sale_status == 2">
              <div class="card_img">
                <img src="@image/layouts/incoming_01.svg" :alt="item.title" />
              </div>
              <div class="card_content">
                <img src="@image/layouts/inccoming_tag.svg" :alt="item.title" id="tag_img" />
                <div class="logo">
                  <img :src="item.logo" :alt="item.title" />
                </div>
                <div class="card_title">
                  {{ item.title }}
                </div>
                <div class="content">
                  <div class="quote">
                    {{ item.description }}
                  </div>
                  <div class="social_netwwork">
                    <a :href="item.facebook_url" target="_blank" v-if="item.facebook_url != null">
                      <i class="bx bxl-facebook bx-sm"></i>
                    </a>
                    <a :href="item.twitter_url" target="_blank" v-if="item.twitter_url != null">
                      <i class="bx bxl-twitter bx-sm"></i>
                    </a>
                    <a :href="item.telegram_url" target="_blank" v-if="item.telegram_url != null">
                      <i class="bx bxl-telegram bx-sm"></i>
                    </a>
                    <a :href="item.medium_url" target="_blank" v-if="item.medium_url != null">
                      <i class="bx bxl-medium bx-sm"></i>
                    </a>
                    <a :href="item.instagram_url" target="_blank" v-if="item.instagram_url != null">
                      <i class="bx bxl-instagram-alt bx-sm"></i>
                    </a>
                    <a :href="item.whitepaper_url" target="_blank" v-if="item.whitepaper_url != null">
                      <i class="bx bxs-file bx-sm"></i>
                    </a>
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
                    <div class="coin" v-if="item.token != null">{{ item.token.title }}</div>
                  </div>
                  <a-divider />
                  <div class="detail">
                    <div class="field">Distribution</div>
                    <div class="coin">{{ item.supply | displayCurrency(0) }}</div>
                  </div>
                  <vs-button class="btn_join" color="rgb(59,222,200)" @click="$router.push('/' + item.slug)">
                    Invest
                  </vs-button>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="title">Finish Project</div>
      
    </div>
    <div v-else>
      <TokenTable />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import TokenTable from "@component/Dashboard/Wallet/TokenTable";
  
  export default {
    layout: "dashboard",
    components: {
      TokenTable,
    },
    transition: {
      name: "slide-fade",
      mode: "out-in",
    },
    data: () => ({
      active: 0,
      convert: 0
    }),
    computed: {
      ...mapState('auth', ['currentUser']),
      // ...mapState("packages", ["incomingList", "saleList", "finishList"]),
      ...mapState('projects', ['projectList']),
    },
    mounted() {
      this.getProjectList();
      // this.getIncomingProjectList();
      // this.getSaleTokenProjectList();
      // this.getFinishProjectList();
    },
    methods: {
      ...mapActions('projects', ['getProjectList']),
      // ...mapActions("packages", [
      //   "getIncomingProjectList",
      //   "getSaleTokenProjectList",
      //   "getFinishProjectList",
      // ]),
      parseProjectList(pList) {
        pList.data.forEach(project => {
          this.projectList[project.sale_status] = [];

        });
      },
      onSearch(value) {
        console.log(value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@asset/variables.scss";
  .token-sale {
    padding: 10px 50px;
    .wallet {
      background: rgba(251, 251, 251, 0.93);
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .curency {
        display: flex;
        .name {
          font-weight: bold;
          font-size: 18px;
          line-height: 24px;
          color: $green-black-01;
          margin-right: 20px;
        }
        .money {
          font-weight: 500;
          font-size: 36px;
          line-height: 24px;
          color: $grey-black-03;
          .unit {
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
      .search {
        display: flex;
        align-items: center;
        margin: 0 0px 0 auto;
        a {
          margin-left: 15px;
        }
      }
    }
  }

  .incoming {
    margin-top: 40px;
    text-align: center;
    .title {
      font-weight: bold;
      font-size: 36px;
      line-height: 43px;
      margin: 10px 0px;
      color: $green-black-01;
    }

    .incoming_info {
      padding: 0;
      .card {
        width: 340px;
        height: 495px;
        margin-bottom: 30px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        overflow: hidden;
        margin: 30px auto;
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
