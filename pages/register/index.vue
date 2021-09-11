<template>
  <div class="register" :class="{ hasOpenLoading }">
    <div class="title">Create A Coinpad Account</div>
    <div class="quote">
      Where early adopters invest in and trade the best digital assets
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-row :gutter="16">
        <a-col :xs="24" :sm="12">
          <a-form-item>
            <a-input
              placeholder="First Name"
              v-decorator="[
                'first_name',
                {
                  rules: [{ required: true, message: 'Please input your first name!' }],
                },
              ]"
            />
          </a-form-item>
        </a-col>
        <a-col :xs="24" :sm="12">
          <a-form-item>
            <a-input
              placeholder="Last Name"
              v-decorator="[
                'last_name',
                {
                  rules: [{ required: true, message: 'Please input your last name!' }],
                },
              ]"
            />
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item>
        <a-input
          placeholder="Your Email Address"
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

      <a-form-item>
        <a-input
          placeholder="Your Phone"
          v-decorator="[
            'phone',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
                {
                  pattern: '^[0-9]+$',
                  message: 'Please input your correct phone number!',
                },
              ],
            },
          ]"
          style="width: 100%"
        >
          <a-select
            slot="addonBefore"
            v-decorator="['prefix', { initialValue: '86' }]"
            style="width: 70px"
          >
            <a-select-option value="86"> +86 </a-select-option>
            <a-select-option value="87"> +87 </a-select-option>
          </a-select>
        </a-input>
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
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item has-feedback>
        <a-input-password
          placeholder="Repeat password"
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
              validateTrigger: 'blur',
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'referral',
            { rules: [{ required: true, message: 'Please input referral!' }] },
          ]"
          placeholder="Referral (optional)"
        />
      </a-form-item>
      <div class="privacy">
        By creating an account, I agree to the
        <span class="highlight">Terms of Service</span> and
        <span class="highlight">Privacy Policy</span> .
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
          @click="active = 3"
          color="rgb(59,222,200)"
        >
          Create Account
        </vs-button>
      </a-form-item>
      <a-form-item class="login">
        Already have an account?
        <a class="highlight" href="javascript:;" @click="$router.push('/login')"
          >Log in</a
        >
      </a-form-item>
    </a-form>

    <!-- <vs-button @click="handleClickLoading('points')">Open Loading</vs-button> -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmDirty: false,
      active: 0,
      hasOpenLoading: false,
      types: ["points"],
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
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
        setTimeout(() => this.$router.push("/dashboard"), 1500);
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
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
  },

  // openLoading(type, ref) {
  //   this.$vs.loading({
  //     target: this.$refs[ref][0],
  //     text: type,
  //     type
  //   })
  // }
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.register {
  width: 50%;
  background: $background-form;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 0px 60px;
  margin: 0 auto;
  margin-top: 20px;
  .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
    color: $green-black-01;
    text-align: center;
    margin-top: 30px;
  }
  .quote {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
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
  .privacy {
    margin-top: 0px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    .highlight {
      color: $green-text-01;
      font-weight: 700;
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
  .login {
    margin-top: -10px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    .highlight {
      color: $green-text-01;
      font-weight: 700;
    }
  }
}
</style>
