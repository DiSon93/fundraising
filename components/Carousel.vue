<template>
  <div class="carousel">
    <div class="title_carousel">
      <div class="content">Buying Bitcoin is cool.</div>
      <div class="content">You know what's cooler?</div>
      <div class="content">Buying the next Bitcoin.</div>
      <div class="btn_select">
        <vs-button
          class="btn_started"
          color="rgb(59,222,200)"
          @click="$router.push('/register')"
        >
          Get Started
        </vs-button>
        <vs-button shadow class="btn_learnMore" @click="$router.push('/dashboard')">
          Learn More
        </vs-button>
      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0,
  }),
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";

.carousel {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.93), rgba(255, 255, 255, 0.93)),
    linear-gradient(90.12deg, #124f4f 1.75%, #22a70d 102.73%);
  height: 900px;
  position: relative;
  .overlay {
    top: 0px;
    left: 0px;
    position: absolute;
    background-image: url("@image/layouts/Coin_background.svg");
    mix-blend-mode: color-burn;
    opacity: 1;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: right;
    width: 100%;
    height: 100%;
  }
  .title_carousel {
    margin-left: 7%;
    width: 50%;
    padding-top: 16%;
    .content {
      font-weight: 500;
      font-size: 48px;
      line-height: 57px;
      color: $green-black-01;
      opacity: 1;
    }
    .btn_select {
      display: flex;
      margin-top: 30px;
      .btn_started {
        background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
        border-radius: 50px;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        width: 231.96px;
        height: 60.62px;
      }
      .btn_learnMore {
        border-radius: 50px;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        width: 231.96px;
        height: 60.62px;
        color: $green-black-01;
      }
    }
  }
}
</style>
