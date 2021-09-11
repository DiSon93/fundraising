<template>
  <div class="close_account">
    <div class="title">Close Account</div>
    <div class="content">
      You participated in token sales. Please
      <a href="javascript:;">contact our support team</a> to help you manage these
      participations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit.
    </div>
    <vs-button class="btn_started" color="rgb(59,222,200)"> Close Account </vs-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.close_account {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  margin: 20px 10%;
  padding: 30px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 20px;
  }
  .content {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    a {
      color: $green-black-01;
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
