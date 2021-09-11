<template>
  <div class="changeEmail">
    <div class="title">Change Email Address</div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          size="large"
          placeholder="Current Email"
          validateTrigger="blur"
          v-decorator="[
            'currentEmail',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your current E-mail!',
                },
              ],
              validateTrigger: 'blur',
            },
          ]"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          size="large"
          placeholder="New Email"
          validateTrigger="blur"
          v-decorator="[
            'newEmail',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your new E-mail!',
                },
              ],
              validateTrigger: 'blur',
            },
          ]"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          size="large"
          placeholder="New Email Confirmation"
          validateTrigger="blur"
          v-decorator="[
            'confirmEmail',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your confirm E-mail!',
                },
              ],
              validateTrigger: 'blur',
            },
          ]"
        />
      </a-form-item>
      <a-form-item class="form_submit">
        <vs-button class="btn_started" color="rgb(59,222,200)"> Change Email </vs-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "changeEmail" });
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
.changeEmail {
  padding: 30px 35px;
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 30px;
  }
}
.ant-form {
  .ant-form-item {
    margin-bottom: 12px;
  }
  .ant-input {
    border-radius: 50px !important;
    margin: -16px 0px !important;
    // height: 40px !important;
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
    margin-top: 30px;
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
