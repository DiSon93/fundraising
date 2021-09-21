<template>
  <div class="service">
    <div class="logo">
      <img src="@image/icons/coinpad-co.svg" />
      <div class="social">
        <img src="@image/icons/facebook.svg" alt="" />
        <img src="@image/icons/twi.svg" alt="" />
        <img src="@image/icons/telegram.svg" alt="" />
        <img src="@image/icons/frog.svg" alt="" />
      </div>
    </div>
    <div class="privacy">
      <div class="title">For Investors</div>
      <ul>
        <li><a href="javascript:;">Why invest</a></li>
        <li><a href="javascript:;">How it works</a></li>
        <li><a href="javascript:;">Risks</a></li>
        <li><a href="javascript:;">FAQ</a></li>
      </ul>
    </div>
    <div class="privacy">
      <div class="title">For Projects</div>
      <ul>
        <li><a href="javascript:;">Why raise</a></li>
        <li><a href="javascript:;">How it works</a></li>
        <li><a href="javascript:;">FAQ</a></li>
        <li><a href="javascript:;">Disclaimer</a></li>
        <li>
          <a href="javascript:;" @click="$router.push('/signin-project')"
            >Project Registration
          </a>
        </li>
      </ul>
    </div>
    <div class="privacy">
      <div class="title">About</div>
      <ul>
        <li><a href="javascript:;">Abous us</a></li>
        <li><a href="javascript:;">Career</a></li>
        <li><a href="javascript:;">License</a></li>
        <li><a href="javascript:;">Contact </a></li>
      </ul>
    </div>
    <div class="privacy">
      <div class="title">Help</div>
      <ul>
        <li>
          <a href="javascript:;" @click="$router.push('/privacy-policy')">Privacy</a>
        </li>
        <li>
          <a href="javascript:;" @click="$router.push('/terms')">Terms & Conditions</a>
        </li>
        <li><a href="javascript:;" @click="$router.push('/legal')">Legal</a></li>
        <li><a href="javascript:;" @click="$router.push('/help')">Learn more</a></li>
      </ul>
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
  padding: 20px 10% 10px;
  background: $background;
  display: flex;
  justify-content: space-between;
  .privacy {
    .title {
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      font-weight: 700;
      margin-bottom: 15px;
      margin-left: -25px;
    }
    ul li {
      color: $green-black-01;
    }
    a {
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      color: $green-black-01;
    }
  }
  .social {
    display: flex;
    align-items: center;
    margin-top: 15px;
    img {
      margin-right: 15px;
    }
  }
}
</style>
