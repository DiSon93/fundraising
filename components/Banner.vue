<template>
  <div class="banner">
    <a-row>
      <a-col :xs="24" :sm="12">
        <div class="banner_options">
          <div class="item_01">
            <div class="banner_options_item">
              <img src="@image/icons/banner_update.svg" alt="" />
              <div class="note">Investment trends Updates</div>
            </div>
          </div>
          <div class="item_02">
            <div class="banner_options_item">
              <img src="@image/icons/banner_diversify.svg" alt="" />
              <div class="note">Diversified investment opportunities</div>
            </div>
            <div class="banner_options_item bottom_options">
              <img src="@image/icons/banner_trend.svg" alt="" />
              <div class="note">Updates on investment trends</div>
            </div>
          </div>
          <div class="item_03">
            <div class="banner_options_item">
              <img src="@image/icons/banner_risk.svg" alt="" />
              <div class="note">Lower risks of investment</div>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :xs="24" :sm="12">
        <div class="quote">
          <div class="title">Smart investing with Coinpad</div>
          <div class="content">
            You can make more money than ever by investing in a potential project early
            on. Furthermore, you can invest in future societal innovation.
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col :xs="24" :sm="12">
        <div class="quote quote_02">
          <div class="title">Coinpad</div>
          <div class="content">The leading investing platforms for angel investors</div>
        </div>
        <div class="more_money">
          <img src="@image/layouts/moremoney.svg" />
        </div>
      </a-col>
      <a-col :xs="24" :sm="12">
        <div class="money_item">
          <div class="money_item_01">
            <div class="money_content">
              <img src="@image/icons/banner_fasst.svg" alt="" />
              <div class="money_title">Fast and convenient</div>
              <div class="content">
                Invest in a single tap to access both the mobile and desktop versions. We
                have an easy-to-use interface for every investor.
              </div>
            </div>
          </div>
          <div class="money_item_02">
            <div class="money_content">
              <img src="@image/icons/banner_security.svg" alt="" />
              <div class="money_title">Secured personal information</div>
              <div class="content">
                Coinpad guarantees the security of your personal information by using two
                technological methods, KYC and 2FA
              </div>
            </div>
            <div class="money_content">
              <img src="@image/icons/banner_ranking.svg" alt="" />
              <div class="money_title">Top Ranking Reward</div>
              <div class="content">
                In every campaign, we give bonuses to investors who successfully refer us
                to new angle investors.
              </div>
            </div>
          </div>
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
.banner {
  margin-top: 40px;
  padding: 0 10%;
  .banner_options {
    display: flex;
    justify-content: left;
    .items {
      padding: 0 5px;
    }
    .banner_options_item {
      width: 160px;
      height: 178px;
      background: rgba(255, 255, 255, 0.93);
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      text-align: center;
      border-radius: 20px;
      padding: 20px 20px;
      img {
        width: 50%;
      }
      .note {
        margin-top: 15px;
        font-weight: bold;
        font-size: 15.9136px;
        line-height: 19px;
        text-align: justify;
        color: $grey-black;
        text-align: center;
        color: $black-text-04;
      }
      &:hover {
        img {
          opacity: 1;
          color: white;
          filter: brightness(0) invert(1) hue-rotate(135deg);
          transition: 1s;
        }
        background-color: $green-black-01;
        transition: 1s;
        .note {
          color: $white-text-01;
          transition: 1s;
        }
      }
    }
    .item_01 {
      padding-top: 89px;
      margin-right: 10px;
      .banner_options_item {
        padding-top: 30px;
      }
    }

    .item_03 {
      padding-top: 89px;
      margin-left: 10px;
      .banner_options_item {
        padding-top: 30px;
      }
    }
    .bottom_options {
      margin-top: 10px;
    }
  }
  .quote {
    margin-left: 100px;
    padding-top: 90px;
    .title {
      font-weight: bold;
      font-size: 36px;
      line-height: 43px;
      color: $green-black-01;
    }
    .content {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: $black-text-01;
    }
  }
  .quote_02 {
    margin-left: 0px;
    margin-right: 100px;
    .content {
      font-weight: bold;
      font-size: 36px;
      line-height: 43px;
      color: $green-black-01;
    }
  }
  .more_money {
    margin-top: 100px;
    text-align: right;
    margin-right: 100px;
  }
  .money_item {
    padding-top: 20px;
    display: flex;
    .money_item_01 {
      padding-top: 170px;
      margin-right: 15px;
    }
    .money_content {
      background: rgba(255, 255, 255, 0.93);
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      width: 267.77px;
      text-align: center;
      margin-bottom: 15px;
      .money_title {
        font-weight: bold;
        font-size: 18px;
        line-height: 19px;
        text-align: center;
        text-transform: uppercase;
        color: $green-text-01;
        margin-top: 30px;
        text-transform: uppercase;
      }
      .content {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: $grey-black;
        margin-top: 10px;
      }
      padding: 25px 15px;
      &:hover {
        animation: upDown 0.5s linear 0s;
      }
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
