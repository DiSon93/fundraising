<template>
  <div class="login" :class="{ hasOpenLoading }">
    <div class="login_title">Log in to Coinpad</div>
    <div class="content">
      Where early adopters invest in and trade the best digital assets
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          placeholder="Your Email Address"
          validateTrigger="blur"
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
              validateTrigger: 'blur',
            },
          ]"
        />
      </a-form-item>

      <a-form-item has-feedback>
        <a-input-password
          placeholder="Password (10 character minimum)"
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>

      <div class="remember_me">
        <a-radio :value="1"> Remember me </a-radio>
      </div>
      <div class="form_submit">
        <div
          class="g-recaptcha"
          data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        ></div>
      </div>
      <a-form-item class="form_submit">
        <vs-button
          class="btn_started"
          :active="active == 3"
          @click="redirectLink"
          color="rgb(59,222,200)"
        >
          Log in
        </vs-button>
      </a-form-item>
      <a-form-item class="more_option">
        <div class="forgot">
          <a href="javascript:;" @click="$router.push('/forgotPass')"
            >Forgot your password?</a
          >
        </div>
        <div class="confirm">
          <a href="javascript:;" @click="$router.push('/confirm-email')"
            >Need to confirm your email?</a
          >
        </div>
      </a-form-item>
    </a-form>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      value: 0,
      hasOpenLoading: false,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "login" });
  },
  mounted() {
    this.handleClickLoading("points");
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleClickLoading(type) {
      const loading = this.$vs.loading({
        type,
        color: "#0b9985",
      });
      this.hasOpenLoading = true;
      setTimeout(() => {
        loading.close();
        this.hasOpenLoading = false;
      }, 1000);
    },
    redirectLink() {
      this.active = 3;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.login {
  width: 50%;
  background: $background-form;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 0px 140px;
  margin: 0 auto;
  margin-top: 20px;
  .login_title {
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
    color: $green-black-01;
    margin-top: 30px;
    text-align: center;
  }
  .content {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 30px;
    text-align: center;
  }
}
.ant-form {
  input {
    border-radius: 50px !important;
  }
  .ant-form-item {
    margin-bottom: 12px;
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
  .remember_me {
    margin-top: 0px;
    font-size: 16px;
    font-weight: 500;
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
  .more_option {
    margin-bottom: 30px;
    .confirm,
    .forgot {
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      a {
        color: $green-black-01;
      }
    }
  }
}
</style>
