<template>
  <div class="identity_verify">
    <div class="title">Verify Your Identity</div>
    <div class="content">
      <div class="proccess">
        <a-steps :current="1">
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
      <div class="verifying">Who are we verifying?</div>
      <div class="quote">
        Due to local regulations, some tokens may not be available in all locations. We
        may ask you to provide proof of residence.
      </div>
      <div class="form">
        <a-form :form="form" @submit="handleSubmit">
          <a-row :gutter="24">
            <a-col :xs="24" :sm="12">
              <a-form-item has-feedback>
                <a-select
                  size="large"
                  v-decorator="[
                    'country',
                    {
                      rules: [{ required: true, message: 'Please select your country!' }],
                    },
                  ]"
                  placeholder="Country"
                >
                  <a-select-option value="china" id="select_country">
                    China
                  </a-select-option>
                  <a-select-option value="usa" id="select_country">
                    U.S.A
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xs="24" :sm="12">
              <a-form-item has-feedback>
                <a-select
                  size="large"
                  v-decorator="[
                    'region',
                    {
                      rules: [
                        { required: true, message: 'Please select your State/Region!' },
                      ],
                    },
                  ]"
                  placeholder="State/Region"
                >
                  <a-select-option value="china" id="select_country">
                    China
                  </a-select-option>
                  <a-select-option value="usa" id="select_country">
                    U.S.A
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <div class="checkbox">
            <a-checkbox @change="onChange">
              I confirm that the residence information provided is true and accurate.
            </a-checkbox>
          </div>
          <a-form-item class="form_submit">
            <vs-button class="btn_started" color="rgb(59,222,200)"> Continue </vs-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "VerifyResident" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.setCountry(values);
        }
      });
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    async setCountry(values) {
      try {
        await this.$store.dispatch("account/changeResident", values);
        // await this.$store.dispatch("packages/getPackageList");
        this.continueFunc();
      } catch {}
    },
    continueFunc() {
      this.$emit("continue");
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
