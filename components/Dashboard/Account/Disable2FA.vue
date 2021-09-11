<template>
  <div class="disable2FA">
    <div class="title">Two-Factor Authentication</div>
    <div class="content">
      <div class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </div>
      <vs-button class="btn_started" color="rgb(59,222,200)"> Disable 2FA </vs-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.disable2FA {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  margin: 30px 10%;
  padding: 30px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 20px;
  }
  .content {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 50px;
    .quote {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .text {
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      width: 80%;
      margin: 0 auto;
    }
  }
  .btn_started {
    background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
    border-radius: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    padding: 2px 20px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>
