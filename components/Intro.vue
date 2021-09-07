<template>
  <div class="intro">
    <div class="method">How it works</div>
    <a-row>
      <a-col :xs="24" :sm="8">
        <div class="intro_content">
          <img src="@image/icons/intro_01.svg" alt="" />
          <div class="title">Create an account</div>
          <div class="content">Lorem ipsum dolor sit amet, consecteteu.</div>
        </div>
      </a-col>
      <a-col :xs="24" :sm="8">
        <div class="intro_content">
          <img src="@image/icons/intro_02.svg" alt="" />
          <div class="title">Get authorization</div>
          <div class="content">Lorem ipsum dolor sit amet, consecteteu.</div>
        </div>
      </a-col>
      <a-col :xs="24" :sm="8">
        <div class="intro_content">
          <img src="@image/icons/intro_03.svg" alt="" />
          <div class="title">Enjoy the app</div>
          <div class="content">Lorem ipsum dolor sit amet, consecteteu.</div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.intro {
  text-align: center;
  height: 420px;
  background: $background;
  padding: 0 10%;
  .method {
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
    color: $green-black-01;
    text-align: center;
    margin-top: 60px;
    padding: 80px 0 40px;
  }
  .intro_content {
    width: 226px;
    margin: 0 auto;
    .title {
      font-weight: bold;
      font-size: 15.9136px;
      line-height: 19px;
      text-transform: uppercase;
      color: $black-text-03;
      margin: 20px 0 10px;
    }
    .content {
      font-weight: normal;
      font-size: 15.9136px;
      line-height: 19px;
      color: $black-text-02;
    }
    &:hover {
      animation: upDown 0.5s linear 0s;
    }
  }
}
@keyframes upDown {
  /* 1 chu kì/ 1 lần chuyển động */
  /* 100s */
  0% {
  }
  25% {
    transform: translateY(-5px) scale(1);
  }
  50% {
    transform: translateY(0);
    scale: 1;
  }
  75% {
    transform: translateY(5px);
    scale: 1;
  }
  100% {
    transform: translateY(0);
    scale: 1;
  }
}
</style>
