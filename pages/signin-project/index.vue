<template>
  <div>
    <Step1 v-on:continue="active = 2" v-if="active == 1" />
    <Step2 v-if="active == 2" v-on:backToStep="active = 1" />
    <Step3 />
    <Step4 />
    <Step5 />
    <Step6 />
    <Step7 />
    <Step8 />
    <Step9 />
    <Step10 />
    <Step11 />
  </div>
</template>

<script>
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
  data: () => ({
    active: 1,
  }),
  methods: {
    nextStep() {
      console.log("next Step");
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
