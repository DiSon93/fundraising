<template>
  <div class="identity_verify">
    <div class="title">Verify Your Identity</div>
    <div class="content">
      <div class="proccess">
        <a-steps :current="2">
          <a-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
            <template slot="content">
              <span>Step {{ index }} Status: {{ status }}</span>
            </template>
            <span :class="`${prefixCls}-icon-dot`" />
          </a-popover>
          <a-step title="Start" />
          <a-step title="Resident" />
          <a-step title="Identity" />
          <a-step title="Photo" />
          <a-step title="Security " />
          <a-step title="Status" />
        </a-steps>
      </div>
      <div class="verifying">About ahig</div>
      <div class="quote">
        This information is required to comply with International and US laws and
        financial regulations · <a href="javascript:;"> Learn more »</a>
      </div>
      <div class="form">
        <a-form :form="form" @submit="handleSubmit">
          <a-row :gutter="24">
            <a-col :xs="24" :sm="12">
              <a-form-item>
                <a-input
                  placeholder="First Name"
                  v-decorator="[
                    'first_name',
                    {
                      rules: [
                        { required: true, message: 'Please input your first name!' },
                      ],
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
                      rules: [
                        { required: true, message: 'Please input your last name!' },
                      ],
                    },
                  ]"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item has-feedback>
            <a-input
              size="large"
              placeholder="Full Addres"
              v-decorator="[
                'full_adress',
                {
                  rules: [{ required: true, message: 'Please input your full addres!' }],
                },
              ]"
            />
          </a-form-item>
          <a-row :gutter="24">
            <a-col :xs="24" :sm="8">
              <a-form-item has-feedback>
                <a-select
                  size="large"
                  v-decorator="[
                    'month',
                    {
                      rules: [
                        { required: true, message: 'Please select your month of birth!' },
                      ],
                    },
                  ]"
                  placeholder="Month of Birth"
                >
                  <a-select-option
                    :value="month"
                    class="select_birth"
                    v-for="month in 12"
                    :key="month"
                  >
                    {{ month }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="8">
              <a-form-item has-feedback>
                <a-select
                  size="large"
                  v-decorator="[
                    'date',
                    {
                      rules: [
                        { required: true, message: 'Please select your date of birth!' },
                      ],
                    },
                  ]"
                  placeholder="Day of Birth"
                >
                  <a-select-option
                    :value="date"
                    class="select_birth"
                    v-for="date in 30"
                    :key="date"
                  >
                    {{ date }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="8">
              <a-form-item has-feedback>
                <a-select
                  size="large"
                  v-decorator="[
                    'year',
                    {
                      rules: [
                        { required: true, message: 'Please select your year of birth!' },
                      ],
                    },
                  ]"
                  placeholder="Year of Birth"
                >
                  <a-select-option value="2000" class="select_birth">
                    2000
                  </a-select-option>
                  <a-select-option value="1999" class="select_birth">
                    1999
                  </a-select-option>
                  <a-select-option value="1998" class="select_birth">
                    1998
                  </a-select-option>
                  <a-select-option value="1997" class="select_birth">
                    1997
                  </a-select-option>

                  <a-select-option value="1996" class="select_birth">
                    1996
                  </a-select-option>
                  <a-select-option value="1995" class="select_birth">
                    1995
                  </a-select-option>

                  <a-select-option value="1994" class="select_birth">
                    1994
                  </a-select-option>
                  <a-select-option value="1993" class="select_birth">
                    1993
                  </a-select-option>
                  <a-select-option value="1992" class="select_birth">
                    1992
                  </a-select-option>
                  <a-select-option value="1991" class="select_birth">
                    1991
                  </a-select-option>
                  <a-select-option value="1990" class="select_birth">
                    1990
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="24">
            <a-col :xs="24" :sm="12">
              <a-form-item has-feedback>
                <a-input
                  size="large"
                  placeholder="Your Phone"
                  v-decorator="[
                    'phone_number',
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
                        {
                          min: 7,
                          message: 'The phone must be at least 7 characters!',
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
            </a-col>
            <a-col :xs="24" :sm="12">
              <a-form-item has-feedback>
                <a-input-password
                  size="large"
                  placeholder="Your Passport Number"
                  v-decorator="[
                    'passport_number',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                        {
                          pattern: '^[0-9]+$',
                          message: 'Please input your correct phone number!',
                        },
                        {
                          max: 12,
                          message: 'Indentity Card must be not longer than 12',
                        },
                      ],
                    },
                  ]"
                  type="password"
                />
              </a-form-item>
            </a-col>
          </a-row>

          <div class="checkbox">
            <a-radio-group name="radioGroup" v-model="gender">
              <a-radio :value="0"> Male </a-radio>
              <a-radio :value="1"> Female </a-radio>
            </a-radio-group>
          </div>
          <a-form-item class="form_submit">
            <vs-button class="btn_started" color="rgb(59,222,200)" :loading="loading">
              Continue
            </vs-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      gender: 0,
      loading: false,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "verifyIdentity" });
  },
  computed: {
    ...mapState("account", ["identity", "error"]),
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.changeIdentity(values);
        }
      });
    },
    async changeIdentity(values) {
      this.loading = true;
      try {
        await this.$store.dispatch("account/changeIdentity", {
          ...values,
          birthday: `${values.year}-${values.month}-${values.date}`,
          gender: this.gender,
          // phone_number: `+${values.prefix} ${values.phone_number}`,
        });
        this.loading = false;
        this.continueFunc();
      } catch {
        this.openNotification("top-right", "danger", "Error");
        this.loading = false;
      }
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    continueFunc() {
      this.$emit("continue");
    },
    openNotification(position = null, color, title) {
      const noti = this.$vs.notification({
        flat: true,
        progress: "auto",
        color,
        position,
        title,
        text: this.error ? this.error : `Login success`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.identity_verify {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 30px;
  margin: 0 50px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 25px;
  }
  .content {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 50px;
    .proccess {
      margin-bottom: 20px;
    }
    .verifying {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .quote {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: justify;
      a {
        color: $green-black-01;
      }
    }
    .entity {
      margin-top: 80px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .list {
      margin-left: 30px;
    }
    .btn_started {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 20px;
      padding: 0 12px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
}
.ant-form {
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  .checkbox {
    text-align: center;
    margin-top: 10px;
  }

  .ant-input {
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
