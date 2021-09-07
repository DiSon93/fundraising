<template>
  <div class="help">
    <div class="title">Hi! How Can We Help</div>
    <div class="search">
      <a-input-search
        placeholder="Enter your search term here"
        style="width: 33%"
        @search="onSearch"
      />
    </div>
    <div class="btn_help">
      <vs-button
        class="btn_support"
        color="#27AE60"
        @click="$router.push('/help/submit-ticket')"
      >
        New Support Ticket
      </vs-button>
      <vs-button
        class="btn_check"
        color="#0b9985"
        @click="$router.push('/help/check-ticket')"
      >
        Check Ticket Status</vs-button
      >
    </div>
    <div class="help_items">
      <a-row :gutter="32">
        <a-col :xs="12" :sm="8">
          <div class="item">
            <NuxtLink to="/help/affiliate-program">
              <div class="title">Affiliate Program</div>
              <ul>
                <li>CoinList Affiliate Program</li>
                <li>General Information About Creating an</li>
                <li>Transferring your AngelList Login to Coin</li>
              </ul>
            </NuxtLink>
          </div>
        </a-col>
        <a-col :xs="12" :sm="8">
          <div class="item">
            <NuxtLink to="/help/affiliate-program">
              <div class="title">Affiliate Program</div>
              <ul>
                <li>CoinList Affiliate Program</li>
                <li>General Information About Creating an</li>
                <li>Transferring your AngelList Login to Coin</li>
              </ul>
            </NuxtLink>
          </div>
        </a-col>
        <a-col :xs="12" :sm="8">
          <div class="item">
            <NuxtLink to="/help/affiliate-program">
              <div class="title">Affiliate Program</div>
              <ul>
                <li>CoinList Affiliate Program</li>
                <li>General Information About Creating an</li>
                <li>Transferring your AngelList Login to Coin</li>
              </ul>
            </NuxtLink>
          </div>
        </a-col>
        <a-col :xs="12" :sm="8">
          <div class="item">
            <NuxtLink to="/help/affiliate-program">
              <div class="title">Affiliate Program</div>
              <ul>
                <li>CoinList Affiliate Program</li>
                <li>General Information About Creating an</li>
                <li>Transferring your AngelList Login to Coin</li>
              </ul>
            </NuxtLink>
          </div>
        </a-col>
        <a-col :xs="12" :sm="8">
          <div class="item">
            <NuxtLink to="/help/affiliate-program">
              <div class="title">Affiliate Program</div>
              <ul>
                <li>CoinList Affiliate Program</li>
                <li>General Information About Creating an</li>
                <li>Transferring your AngelList Login to Coin</li>
              </ul>
            </NuxtLink>
          </div>
        </a-col>
        <a-col :xs="12" :sm="8">
          <div class="item">
            <NuxtLink to="/help/affiliate-program">
              <div class="title">Affiliate Program</div>
              <ul>
                <li>CoinList Affiliate Program</li>
                <li>General Information About Creating an</li>
                <li>Transferring your AngelList Login to Coin</li>
              </ul>
            </NuxtLink>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  data: () => ({
    input: "",
  }),
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.help {
  .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
    color: $green-black-01;
    text-align: center;
    margin: 20px 0 30px;
  }
  .search {
    padding: 0 auto;
    display: flex;
    justify-content: center;
  }
  .btn_help {
    display: flex;
    justify-content: center;
    .btn_check,
    .btn_support {
      border-radius: 50px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      padding: 4px 12px;
      margin-top: 30px;
    }
    .btn_check {
      margin-left: 10px;
    }
  }
  .help_items {
    padding: 0 10%;
    margin-top: 30px;
    .item {
      padding: 15px;
      padding-left: 40px;
      background: rgba(251, 251, 251, 0.93);
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      margin-bottom: 30px;
      .title {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: $black-text-03;
        text-align: left;
        margin-bottom: 10px;
      }
      ul li {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: $green-black-01;
        margin: 4px 0;
      }
      &:hover {
        .title {
          color: $green-black-01;
          transition: all 0.5s;
        }
        ul li {
          color: $green-text-01;
          transition: all 0.5s;
        }
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
