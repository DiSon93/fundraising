<template>
  <div class="service">
    <div class="logo">
      <img src="@image/icons/coinpad-co.svg" />
    </div>
    <div class="privacy">
      <a href="javascript:;" @click="$router.push('/privacy-policy')">Privacy</a>
      <a href="javascript:;" @click="$router.push('/terms')">Terms</a>
      <a href="javascript:;" @click="$router.push('/legal')">Legal</a>
      <a href="javascript:;" @click="$router.push('/help')">Help</a>
      <a href="javascript:;" @click="$router.push('/signin-project')"
        >Project Registration</a
      >
    </div>
    <div class="social">
      <img src="@image/icons/facebook.svg" alt="" />
      <img src="@image/icons/twi.svg" alt="" />
      <img src="@image/icons/telegram.svg" alt="" />
      <img src="@image/icons/frog.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.service {
  margin-top: 60px;
  padding: 20px 10%;
  background: $background;
  display: flex;
  justify-content: space-between;
  .privacy {
    display: flex;
    align-items: center;
    a {
      margin: 0 20px;
      font-weight: 700;
      font-size: 18px;
      color: $green-black-01;
    }
  }
  .social {
    display: flex;
    align-items: center;
    margin-right: -15px;
    img {
      margin-right: 15px;
    }
  }
}
</style>
