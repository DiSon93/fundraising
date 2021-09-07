<template>
  <div class="homepage">
    <Carousel />
    <Banner />
    <Intro />
    <Incoming />
    <Notice />
    <CoinpadPlatform />
    <Market />
  </div>
</template>

<script>
import Carousel from "@component/Carousel.vue";
import Banner from "@component/Banner.vue";
import Intro from "@component/Intro.vue";
import Incoming from "@component/Incoming.vue";
import Notice from "@component/Notice.vue";
import CoinpadPlatform from "@component/CoinpadPlatform.vue";
import Market from "@component/Market.vue";

export default {
  components: {
    Carousel,
    Banner,
    Intro,
    Incoming,
    Notice,
    CoinpadPlatform,
    Market,
  },
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>
<style lang="scss" scoped>
@import "@asset/variables.scss";
.homepage {
  margin-top: -100px;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.1s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
