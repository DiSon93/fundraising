<template>
  <div v-if="authenticate">
    <div class="dashboard_layout">
      <div class="side-bar">
        <div class="side_bar_position">
          <div class="logo">
            <img src="@image/icons/coinpad-co.svg" />
          </div>
          <div class="list">
            <NuxtLink to="/dashboard">
              <div
                class="item"
                @click="activeRoute = 1"
                v-bind:class="{ adjust: activeRoute == 1 }"
              >
                <img src="@image/icons/dashboard_icon.svg" alt="" />
                <div class="text">Dashboard</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/dashboard/token-sale">
              <div
                class="item"
                @click="activeRoute = 2"
                v-bind:class="{ adjust: activeRoute == 2 }"
              >
                <img src="@image/icons/token.svg" alt="" />
                <div class="text">Token Sale</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/dashboard/wallet">
              <div
                class="item"
                @click="activeRoute = 3"
                v-bind:class="{ adjust: activeRoute == 3 }"
              >
                <img src="@image/icons/wallet.svg" alt="" />
                <div class="text">Wallet</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/dashboard/rewarts">
              <div
                class="item"
                @click="activeRoute = 4"
                v-bind:class="{ adjust: activeRoute == 4 }"
              >
                <img src="@image/icons/rewards.svg" alt="" />
                <div class="text">Rewarts</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/dashboard/account">
              <div
                class="item"
                @click="activeRoute = 5"
                v-bind:class="{ adjust: activeRoute == 5 }"
              >
                <img src="@image/icons/account.svg" alt="" />
                <div class="text">Your Account</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="grid header">
        <div class="position">
          <div class="options">
            <vs-button
              shadow
              :active="active == 1"
              @click="redirectHome"
              class="btn_home"
            >
              Home
            </vs-button>
            <vs-button
              shadow
              :active="active == 2"
              @click="redirectBlog"
              class="btn_blog"
            >
              Blog
            </vs-button>
            <a-dropdown>
              <a-menu slot="overlay" @click="handleMenuClick" id="account_dashboard">
                <a-menu-item key="1">
                  <img src="@image/icons/account_dashboard.svg" alt="" /> Account
                </a-menu-item>
                <a-menu-item key="2">
                  <img src="@image/icons/security_dashboard.svg" alt="" /> Security
                </a-menu-item>
                <a-menu-item key="3">
                  <img src="@image/icons/signout.svg" alt="" /> Sign out
                </a-menu-item>
              </a-menu>
              <a-button shape="circle">
                <img src="@image/icons/users.svg" alt="" />
              </a-button>
            </a-dropdown>
          </div>
        </div>
        <div class="main_content">
          <Nuxt />
        </div>
      </div>
    </div>

    <div>
      <Service />
      <Privacy />
    </div>
    <div class="footer">
      <div class="copyright">Copyright © 2021 Coinpad</div>

      <div>
        <img src="@image/icons/appStore.svg" alt="" />
        <img src="@image/icons/googlePlay.svg" alt="" />
      </div>
    </div>
  </div>
  <div v-else class="loading-page">
    <div class="loading"></div>
  </div>
</template>

<script>
import Service from "@component/Service.vue";
import Privacy from "@component/Privacy.vue";
import { mapState, mapActions } from "vuex";
export default {
  middleware: "authenticated",
  components: {
    Privacy,
    Service,
  },
  data: () => ({
    active: 0,
    fixed: false,
    side: "home",
    activeRoute: 1,
    authenticate: false,
  }),
  beforeCreate() {},
  created() {
    if (this.$route.path == "/dashboard") {
      this.activeRoute = 1;
    } else if (this.$route.path == "/dashboard/token-sale") {
      this.activeRoute = 2;
    } else if (this.$route.path == "/dashboard/wallet") {
      this.activeRoute = 3;
    } else if (this.$route.path == "/dashboard/rewarts") {
      this.activeRoute = 4;
    } else if (this.$route.path == "/dashboard/account") {
      this.activeRoute = 5;
    } else {
      this.active = 0;
    }
  },
  mounted() {
    if (process.client && !localStorage.getItem("user")) {
      this.$router.push("/login");
    } else {
      this.authenticate = true;
    }
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
  },
  methods: {
    start() {
      this.authenticate = true;
    },
    finish() {
      this.authenticate = false;
    },
    redirectHome() {
      this.$router.push("/");
      this.active = 1;
    },
    redirectBlog() {
      this.$router.push("/blog");
      this.active = 2;
    },
    getStart() {
      this.$router.push("/register");
      this.active = 3;
    },
    handleMenuClick(e) {
      console.log("click", e);
      if (e.key == 3) {
        // this.isConfirm = true;
        this.showConfirm();
      }
    },
    showConfirm() {
      this.$confirm({
        title: "Confirm",
        content: (h) => <div>Do you want to log out from fundraising?</div>,
        onOk: () => {
          this.handleLogout();
        },
        onCancel() {
          console.log("Cancel");
        },
        class: "confirmPopup",
      });
    },

    handleLogout() {
      window.localStorage.clear();
      window.location.reload(true);
      window.location.replace("/");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@asset/variables.scss";
.dashboard_layout {
  display: flex;
  width: 100%;
  .side-bar {
    overflow: hidden;
    .side_bar_position {
      position: sticky;
      top: 0px;
      z-index: 999;
    }
    width: 234px !important;
    min-height: 600px;
    // background-color: $green-black-01;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    overflow: hidden;
    .logo {
      text-align: center;
      img {
        margin: 20px auto;
      }
    }
    .list {
      .item {
        display: flex;
        padding: 15px 30px;
        align-items: center;
        margin: 5px 0;
        img {
          margin-right: 15px;
        }
        .text {
          margin: auto 0;
          font-weight: 500;
          font-size: 18px !important;
          line-height: 24px;
          color: $green-black-01;
        }
        &:hover {
          background-color: $background-dashboard;
          //   transition: all 0.5s;
          //   transform: translateX(20px);
          img {
            filter: brightness(0) invert(1) hue-rotate(135deg);
          }
          .text {
            color: $white-text-01;
            font-weight: 700;
          }
        }
      }
      .adjust {
        background-color: $background-dashboard;
        transition: all 0.5s;
        img {
          filter: brightness(0) invert(1) hue-rotate(135deg);
        }
        .text {
          color: $white-text-01;
          font-weight: 700;
        }
      }
    }
  }
}
.header {
  padding: 20px 0;
  position: relative;
  z-index: 99;
  width: 100%;
  background-color: $background-grey;
  // margin-bottom: -60px;
  .btn_started {
    background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
    border-radius: 50px;
    margin-left: 40px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    padding: 2px 12px;
  }
  .position {
    position: relative;
    .options {
      display: flex;
      position: absolute;
      right: 10%;
    }
  }
  .ant-btn {
    border: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: 50px;
    margin-top: 5px;
  }
  .btn_home,
  .btn_blog {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    background-color: transparent;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .btn_home.vs-button.vs-button--active,
  .btn_blog.vs-button.vs-button--active {
    border-bottom: 3px solid $green-black-01 !important;
  }
  .btn_blog {
    margin-left: 40px;
  }
  .main_content {
    margin-top: 70px;
  }
}
.footer {
  display: flex;
  padding: 10px 10%;
  justify-content: space-between;
  background-color: $black-text-03;
  margin-top: 60px;
  .copyright {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: $white-text-01;
    margin: auto 0;
  }
}
.loading-page {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 10px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
