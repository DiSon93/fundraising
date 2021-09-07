<template>
  <div class="forgotPass">
    <div class="title">Forgot your password?</div>
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
      <a-form-item class="form_submit">
        <vs-button class="btn_started" color="rgb(59,222,200)">
          Send recovery email
        </vs-button>
      </a-form-item>
      <a-form-item class="more_option">
        <div class="confirm">
          <a href="javascript:;" @click="$router.push('/confirm-email')"
            >Need to confirm your email?</a
          >
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "forgotPass" });
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
  .more_option {
    margin-bottom: 30px;
    .confirm {
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
