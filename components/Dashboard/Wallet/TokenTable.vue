<template>
  <div class="token_table">
    <div class="heading">
      <div></div>
      <div class="overview">
        <div class="btn_token">
          <div class="status">
            <img src="@image/icons/vector_01.svg" alt="" />
            <span>Incoming</span>
          </div>
          <div class="figure">500</div>
        </div>
        <div class="btn_token token_sale">
          <div class="status">
            <img src="@image/icons/vector_01.svg" alt="" />
            <span>Token Sale</span>
          </div>
          <div class="figure">500</div>
        </div>
        <div class="btn_token finish">
          <div class="status">
            <img src="@image/icons/vector_01.svg" alt="" />
            <span>Finish</span>
          </div>
          <div class="figure">500</div>
        </div>
      </div>
    </div>
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Project </vs-th>
          <vs-th> Status </vs-th>
          <vs-th> Start </vs-th>
          <vs-th> End </vs-th>
          <vs-th> Token Accept </vs-th>
          <vs-th> Distribution </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in tokens" @click="tr.open = !tr.open">
          <vs-td>
            <img :src="tr.image" alt="" />
            {{ tr.project }}
          </vs-td>
          <vs-td>
            <div
              v-bind:class="{ icoming: tr.status == 'Incoming' }"
              v-if="tr.status == 'Incoming'"
            >
              {{ tr.status }}
            </div>
            <div
              v-bind:class="{ tokensale: tr.status == 'Token Sale' }"
              v-if="tr.status == 'Token Sale'"
            >
              {{ tr.status }}
            </div>
            <div
              v-bind:class="{ finish: tr.status == 'Finish' }"
              v-if="tr.status == 'Finish'"
            >
              {{ tr.status }}
            </div>
          </vs-td>
          <vs-td>
            {{ tr.start }}
          </vs-td>
          <vs-td>
            {{ tr.end }}
          </vs-td>
          <vs-td>
            {{ tr.accept }}
          </vs-td>
          <vs-td>
            <div class="open_row">
              {{ tr.distribution }}

              <a href="javascript:;" v-if="tr.open"
                ><img src="@image/icons/up_icon.svg" alt="" />
              </a>

              <a href="javascript:;" v-else
                ><img src="@image/icons/down.svg" alt="" />
              </a>
            </div>
          </vs-td>

          <template #expand>
            <div class="con-content">
              <div class="content_more">
                <div class="social_netwwork">
                  <i class="bx bxl-facebook bx-sm"></i>
                  <i class="bx bxl-twitter bx-sm"></i>
                  <i class="bx bxl-telegram bx-sm"></i>
                  <i class="bx bxl-medium bx-sm"></i>
                  <i class="bx bxl-instagram-alt bx-sm"></i>
                  <i class="bx bxs-file bx-sm"></i>
                </div>
                <div class="quote">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </div>
              </div>
              <div class="btn_accept">
                <vs-button
                  class="btn_started"
                  color="rgb(59,222,200)"
                  @click="redirectLink(tr.status)"
                >
                  Approve
                </vs-button>
              </div>
            </div>
          </template>
        </vs-tr>
      </template>
      <template #footer>
        <div class="paginator">
          <div class="pageAmount">1-42 of 100</div>
          <div>
            <vs-pagination v-model="page" :length="max" color="#0b9985" />
          </div>
          <div class="numberPage">
            Rows Per page:
            <span>
              <a-select default-value="10" style="width: 120px" @change="handleChange">
                <a-select-option value="10"> 10 </a-select-option>
                <a-select-option value="20"> 20 </a-select-option>
                <a-select-option value="50"> 50 </a-select-option>
                <a-select-option value="100"> 100 </a-select-option>
              </a-select>
            </span>
          </div>
        </div>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  data: () => ({
    editActive: false,
    edit: null,
    editProp: "",
    search: "",
    allCheck: false,
    page: 1,
    max: 3,
    active: 0,
    selected: [],
    tokens: [
      {
        id: 1,
        project: "CloudZ",
        status: "Incoming",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_01.svg"),
        open: false,
      },
      {
        id: 2,
        project: "CloudY",
        status: "Incoming",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_02.svg"),
        open: false,
      },
      {
        id: 3,
        project: "CloudX",
        status: "Incoming",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_03.svg"),
        open: false,
      },
      {
        id: 4,
        project: "CloudZ",
        status: "Token Sale",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_01.svg"),
        open: false,
      },
      {
        id: 5,
        project: "CloudY",
        status: "Token Sale",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_02.svg"),
        open: false,
      },
      {
        id: 6,
        project: "CloudX",
        status: "Token Sale",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_03.svg"),
        open: false,
      },
      {
        id: 7,
        project: "CloudZ",
        status: "Finish",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_01.svg"),
        open: false,
      },
      {
        id: 8,
        project: "CloudY",
        status: "Finish",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_02.svg"),
        open: false,
      },
      {
        id: 9,
        project: "CloudX",
        status: "Finish",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_03.svg"),
        open: false,
      },
      {
        id: 10,
        project: "CloudZ",
        status: "Finish",
        start: " 9 Aug, 12:00 ",
        end: " 29 Aug, 12:00 ",
        accept: "USDT",
        distribution: "10.000",
        image: require("@/assets/images/icons/token_table_01.svg"),
        open: false,
      },
    ],
  }),
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    redirectLink(val) {
      if (val == "Incoming") {
        this.$router.push("landingpage/incoming");
      } else if (val == "Token Sale") {
        this.$router.push("landingpage/sale");
      } else {
        this.$router.push("landingpage/finish");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.token_table {
  padding: 25px 20px;
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  margin-top: 40px;
  .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    .overview {
      display: flex;
      .btn_token {
        background: #ffffff;
        border: 1px solid $orange-text-01;
        box-sizing: border-box;
        border-radius: 32px;
        display: flex;
        margin-left: 15px;
        justify-content: right;
        .figure {
          font-weight: bold;
          font-size: 14px !important;
          line-height: 20px;
          letter-spacing: 0.25px;
          color: $orange-text-01;
          padding: 8px 16px;
        }
        .status {
          width: 130px;
          display: flex;
          color: $white-text-01;
          font-weight: bold;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.25px;
          background: $orange-text-01;
          border-radius: 32px 0px 0px 32px;
          justify-content: center;
          padding: 8px 16px;
          span {
            margin-left: 10px;
          }
          img {
            width: 13.87px;
            height: 13.87px;
          }
        }
      }
      .token_sale {
        border: 1px solid $green-black-01;
        .status {
          background: $green-black-01;
        }
        .figure {
          color: $green-black-01;
        }
      }
      .finish {
        border: 1px solid $red-text-01;
        .status {
          background: $red-text-01;
        }
        .figure {
          color: $red-text-01;
        }
      }
    }
  }
}
</style>
