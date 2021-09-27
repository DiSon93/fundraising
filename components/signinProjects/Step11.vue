<template>
  <div class="signin_project step4">
    <div class="title">
      Info Your Froject
      <a-divider />
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-textarea
          placeholder="How did you hear about Coinpad?"
          allow-clear
          v-decorator="[
            'feedback_coinpad',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input description of your project',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <div class="confirm">
        <a-radio val="1" v-model="picked"> I'm sure what I'm saying is true </a-radio>
      </div>
      <a-form-item>
        <div class="form_submit">
          <vs-button shadow class="btn_back" @click="back = true" :disabled="isSubmit">
            Back
          </vs-button>
          <vs-button
            class="btn_started"
            color="rgb(59,222,200)"
            :disabled="!picked || isSubmit"
          >
            Continue
          </vs-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props: ["isSubmit"],
  data() {
    return {
      back: false,
      picked: false,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "Step11" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (!this.back) {
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            this.$store.commit("projects/registerProject", values);
            this.$emit("continue");
          }
        });
      } else {
        this.back = false;
        this.$emit("backToStep");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.signin_project {
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
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin: 30px -100px;
  }
}
.ant-form {
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
  .btn_back {
    border-radius: 50px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    padding: 2px 12px;
    color: $white-text-01;
    background: $black-text-05;
  }
  .confirm {
    margin-top: -20px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
