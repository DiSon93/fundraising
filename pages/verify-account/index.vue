<template>
  <div class="forgotPass">
    <div class="title">Verifying your account</div>
    <div class="quote">
      Please wait a minute. We are verifying your account.....
    </div>

  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {
    data() {
      return {
        loading: false,
        token: ''
      };
    },
    computed: {
      ...mapState("auth", ["error", "errorMessage"]),
    },
    mounted() {
      this.token = this.$route.query.token;
      this.submit();
    },
    methods: {
      async submit() {
        this.loading = true;
        try {
          await this.$store.dispatch("auth/verifyUser", {
            token: this.token
          });
          if (this.errorMessage) {
            this.loading = false;
            this.openNotification("top-right", "danger", "Error");
          } else {
            this.openNotification("top-right", "#0b9985", "Success");
            this.loading = false;
            this.$router.push("/login");
          }
        } catch(e) {
          console.log(e);
          console.log("Error", this.error);
        }
      },
      openNotification(position = null, color, title) {
        const noti = this.$vs.notification({
          flat: true,
          progress: "auto",
          color,
          position,
          title,
          text: this.errorMessage ? this.errorMessage : ''
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@asset/variables.scss";
  .forgotPass {
    width: 50%;
    background: $background-form;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    padding: 0px 140px;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 100px;
    .title {
      font-weight: bold;
      font-size: 36px;
      line-height: 24px;
      color: $green-black-01;
      margin: 30px 0px;
      text-align: center;
    }
    .quote {
      text-align: center;
    }
  }
  .ant-form {
    .ant-form-item {
      // margin-bottom: 22px;
    }
    .ant-input {
      border-radius: 50px !important;
      margin: -16px 0px !important;
      height: 40px !important;
      padding: 4px 20px;
    }
    .ant-form-item-children {
      .ant-input {
        border-radius: 50px !important;
      }
    }
    .form_submit {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
    .btn_started {
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 50px;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      padding: 2px 12px;
    }
  }
</style>
