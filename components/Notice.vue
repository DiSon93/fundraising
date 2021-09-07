<template>
  <div class="notice">
    <div class="btn_select">
      <vs-button
        class="btn_started"
        :active="active == 1"
        @click="active = 1"
        color="rgb(59,222,200)"
      >
        Get Started
      </vs-button>
      <vs-button shadow :active="active == 2" @click="active = 2" class="btn_learnMore">
        Learn More
      </vs-button>
    </div>
    <div class="notes">
      <div class="title">NOTES</div>
      <ul class="contents">
        <li>
          "On Coinpad": Month when first made available through a public sale, semi-public
          sale, or airdrop on CoinList, whether or not restricted to US persons or
          residents of other jurisdictions
        </li>
        <li>
          "Change Since Coinpad": This calculation is approximate, based on limited data
          and subject to change · Past performance may not be indicative of future results
        </li>
        <li>
          ICP price change based on private sale price subsequent to the Coinpad airdrop:
          $4.17. Filecoin price change based on the average of 2 distributions: 1 at
          $0.50, 1 at $5.00. Blockstack price change based on the average of 2
          distributions: 1 at $0.12 (2018), 1 at $0.30 (2019). NEAR price change based on
          the average of 2 distributions: 1 at $0.29, 1 at $0.40. FLOW price change based
          on the average of 2 distributions: 1 at $0.10, 1 at $0.38. Casper price change
          based on the average of 3 distributions: 1 at $0.015, 1 at $0.02, 1 at $0.03.
        </li>
      </ul>
    </div>
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
.notice {
  margin-top: 20px;
  padding: 0 10%;

  .btn_select {
    display: flex;
    margin-top: 30px;
    justify-content: center;
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
      background-color: $grey-white;
    }
  }
  .notes {
    margin-top: 20px;
    color: $black-text-04;
    .title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
    }
    .contents {
      margin-top: 20px;
      li {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}
</style>
