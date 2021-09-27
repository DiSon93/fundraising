<template>
  <div class="signin_project step9">
    <div class="title">
      Info Your Froject
      <a-divider />
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="When do you want to launch your token sale?">
        <a-date-picker
          v-decorator="['date_start', config]"
          placeholder="06 - Nov - 2021"
          format="YYYY-MM-DD"
          @change="onChange"
        />
      </a-form-item>
      <a-form-item>
        <div class="form_submit">
          <vs-button shadow class="btn_back" @click="back = true"> Back </vs-button>
          <vs-button class="btn_started" color="rgb(59,222,200)"> Continue </vs-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({
    config: {
      rules: [{ type: "object", required: true, message: "Please select time!" }],
    },
    back: false,
    time: undefined,
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "Step9" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (!this.back) {
        this.form.validateFieldsAndScroll((err, values) => {
          console.log("time", this.time);
          if (!err) {
            this.$store.commit("projects/registerProject", { date_start: this.time });
            this.$emit("continue");
          }
        });
      } else {
        this.back = false;
        this.$emit("backToStep");
      }
    },
    onChange(date, dateString) {
      console.log(date, dateString);
      this.time = moment(dateString).unix();
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
}
</style>
