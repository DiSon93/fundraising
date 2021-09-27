<template>
  <div>
    <div class="grid header">
      <a-row>
        <a-col :xs="12" :sm="16">
          <div class="logo">
            <img src="@image/icons/coinpad-co.svg" />
          </div>
        </a-col>
        <a-col :xs="12" :sm="8">
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
            <a-dropdown v-if="currentUser">
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
            <vs-button
              class="btn_started"
              :active="active == 3"
              @click="getStart"
              color="rgb(59,222,200)"
              v-else
            >
              Get Started
            </vs-button>
          </div>
        </a-col>
      </a-row>
    </div>
    <Nuxt />
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
</template>

<script>
import Service from "@component/Service.vue";
import Privacy from "@component/Privacy.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Privacy,
    Service,
  },
  data: () => ({
    active: 1,
    fixed: false,
    isLogin: false,
  }),
  created() {
    if (this.$route.path == "/") {
      this.active = 1;
    } else if (this.$route.path == "/blog" || this.$route.path == "/blog/1") {
      this.active = 2;
    } else if (this.$route.path == "/register") {
      this.active = 3;
    } else {
      this.active = 0;
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.path == "/") {
        this.active = 1;
      } else if (this.$route.path == "/blog" || this.$route.path == "/blog/1") {
        this.active = 2;
      } else if (this.$route.path == "/register") {
        this.active = 3;
      } else {
        this.active = 0;
      }
    },
    currentUser: function () {
      if (this.currentUser) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
  },
  mounted() {
    this.$store.commit("auth/commitUser", window.localStorage.getItem("user"));
  },
  computed: {
    ...mapState("auth", ["currentUser"]),
  },
  methods: {
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
.header {
  padding: 20px 0;
  position: relative;
  // position: sticky;
  // top: 0;
  z-index: 99;
  .logo {
    position: absolute;
    left: 15%;
    img {
      z-index: 99;
      opacity: 1;
    }
  }

  .btn_started {
    background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
    border-radius: 50px;
    margin-left: 40px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    padding: 2px 12px;
  }
  .options {
    display: flex;
    .ant-btn {
      border: none;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      margin-left: 50px;
      margin-top: 5px;
    }
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
}
.footer {
  display: flex;
  padding: 10px 10%;
  justify-content: space-between;
  background-color: $black-text-03;
  .copyright {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: $white-text-01;
    margin: auto 0;
  }
}
</style>
