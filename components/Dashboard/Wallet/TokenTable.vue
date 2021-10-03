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
          <vs-th> </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in projectList.data" @click="tr.open = !tr.open">
          <vs-td>
            <img :src="tr.logo" :alt="tr.title" />
            {{ tr.title }}
          </vs-td>
          <vs-td>
            <div v-bind:class="{ icoming: tr.sale_status == 1 }" v-if="tr.sale_status == 1">
              Incoming
            </div>
            <div v-bind:class="{ tokensale: tr.sale_status == 2 }" v-if="tr.sale_status == 2">
              Token Sale
            </div>
            <div v-bind:class="{ finish: tr.sale_status == 3 }" v-if="tr.sale_status == 3">
              Finish
            </div>
          </vs-td>
          <vs-td>
            {{ tr.start_at }}
          </vs-td>
          <vs-td>
            {{ tr.end_at }}
          </vs-td>
          <vs-td>
            <span v-if="tr.token != null">
              {{ tr.token.symbol }}
            </span>
          </vs-td>
          <vs-td>
            {{ tr.supply | displayCurrency(0) }}
          </vs-td>
          <vs-td>
            <div class="open_row">
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
                  <a :href="tr.facebook_url" target="_blank" v-if="tr.facebook_url != null">
                    <i class="bx bxl-facebook bx-sm"></i>
                  </a>
                  <a :href="tr.twitter_url" target="_blank" v-if="tr.twitter_url != null">
                    <i class="bx bxl-twitter bx-sm"></i>
                  </a>
                  <a :href="tr.telegram_url" target="_blank" v-if="tr.telegram_url != null">
                    <i class="bx bxl-telegram bx-sm"></i>
                  </a>
                  <a :href="tr.medium_url" target="_blank" v-if="tr.medium_url != null">
                    <i class="bx bxl-medium bx-sm"></i>
                  </a>
                  <a :href="tr.instagram_url" target="_blank" v-if="tr.instagram_url != null">
                    <i class="bx bxl-instagram-alt bx-sm"></i>
                  </a>
                  <a :href="tr.whitepaper_url" target="_blank" v-if="tr.whitepaper_url != null">
                    <i class="bx bxs-file bx-sm"></i>
                  </a>
                </div>
                <div class="quote">
                  {{ tr.description }}
                </div>
              </div>
              <div class="btn_accept">
                <vs-button
                  class="btn_started"
                  color="rgb(59,222,200)"
                  @click="$router.push('/' + tr.slug)"
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
  import { mapState, mapActions } from "vuex";

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
      selected: []
    }),
    computed: {
      // ...mapState("packages", ["packageList"]),
      ...mapState('projects', ['projectList'])
    },
    mounted() {
      this.getProjects();
    },
    methods: {
      ...mapActions('projects', ['getProjectList']),
      async getProjects() {
        try {
          let results = await this.getProjectList();
          if (results.status == 200) {

          }
        } catch (e) {

        }
      },
      // async getPackageList() {
      //   try {
      //     await this.$store.dispatch("packages/getPackageList");
      //     console.log("packageList", this.packageList);
      //     this.tokens = this.packageList.map((u) => {
      //       return {
      //         id: u.id,
      //         project: u.project?.title,
      //         status: u.status,
      //         start: u.start_at,
      //         end: u.end_at,
      //         accept: u.token?.title,
      //         distribution: u.distribution,
      //         image: u.project?.logo,
      //         content: u.platform?.content
      //           ? u.platform?.content
      //           : "Chỗ này là nội dung gì?",
      //         open: false,
      //       };
      //     });
      //     console.log("tokens", this.tokens);
      //   } catch {}
      // },
      changePage(currentPage) {
        console.log('currentPage', currentPage);
      },
      handleChange(value) {
        console.log(`selected ${value}`);
      },
      // redirectLink(val) {
      //   if (val == "Incoming") {
      //     this.$router.push("landingpage/incoming");
      //   } else if (val == "Token Sale") {
      //     this.$router.push("landingpage/sale");
      //   } else {
      //     this.$router.push("landingpage/finish");
      //   }
      // },
    }
  }
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
