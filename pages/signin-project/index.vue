<template>
  <div>
    <Step1 v-on:continue="active = 2" v-show="active == 1" />
    <Step2 v-show="active == 2" v-on:backToStep="active = 1" v-on:continue="active = 3" />
    <Step3 v-show="active == 3" v-on:backToStep="active = 2" v-on:continue="active = 4" />
    <Step4 v-show="active == 4" v-on:backToStep="active = 3" v-on:continue="active = 5" />
    <Step5 v-show="active == 5" v-on:backToStep="active = 4" v-on:continue="active = 6" />
    <Step6 v-show="active == 6" v-on:backToStep="active = 5" v-on:continue="active = 7" />
    <Step7 v-show="active == 7" v-on:backToStep="active = 6" v-on:continue="active = 8" />
    <Step8 v-show="active == 8" v-on:backToStep="active = 7" v-on:continue="active = 9" />
    <Step9
      v-show="active == 9"
      v-on:backToStep="active = 8"
      v-on:continue="active = 10"
    />
    <Step10
      v-show="active == 10"
      v-on:backToStep="active = 9"
      v-on:continue="active = 11"
    />
    <Step11
      v-show="active == 11"
      v-on:backToStep="active = 10"
      v-on:continue="registerProjectIntoServer"
      :isSubmit="loadingChild"
      :key="keyChild"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Step1 from "@component/signinProjects/Step1";
import Step2 from "@component/signinProjects/Step2";
import Step3 from "@component/signinProjects/Step3";
import Step4 from "@component/signinProjects/Step4";
import Step5 from "@component/signinProjects/Step5";
import Step6 from "@component/signinProjects/Step6";
import Step7 from "@component/signinProjects/Step7";
import Step8 from "@component/signinProjects/Step8";
import Step9 from "@component/signinProjects/Step9";
import Step10 from "@component/signinProjects/Step10";
import Step11 from "@component/signinProjects/Step11";
const key = "updatable";
export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
    Step11,
  },
  transition: {
    name: "home",
    mode: "out-in",
  },
  computed: {
    ...mapState("projects", ["registerForm", "errorMessage"]),
  },
  data: () => ({
    active: 1,
    loading: false,
    loadingChild: false,
    keyChild: 0,
  }),
  methods: {
    nextStep() {
      console.log("next Step");
    },
    async registerProjectIntoServer() {
      this.loading = true;
      this.loadingChild = true;

      this.openMessage("load");
      let form = this.registerForm;
      try {
        await this.$store.dispatch("projects/registerProjectIntoServer", form);
        this.openNotification("top-right", "#0b9985", "Success");
        this.loading = false;
        this.loadingChild = false;
        if (this.errorMessage) {
          this.openMessage("erorr");
        } else {
          this.openMessage("success");
          this.$router.push("/");
        }
      } catch {
        this.openNotification("top-right", "danger", "Error");
        console.log("Error");
      }
    },
    openNotification(position = null, color, title) {
      const noti = this.$vs.notification({
        flat: true,
        progress: "auto",
        color,
        position,
        title,
        text: this.errorMessage
          ? this.errorMessage
          : `Congratulation! Register project successfull!!!`,
      });
    },
    openMessage(val) {
      if (this.loading) {
        this.$message.loading({ content: "Loading...", key });
      } else if (val == "success") {
        this.$message.success({ content: "Loaded!", key, duration: 2 });
      } else {
        this.$message.error({ content: "Fail!", key, duration: 2 });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
