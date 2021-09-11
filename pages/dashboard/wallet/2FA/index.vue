<template>
  <div class="wallet_verify">
    <div class="myWallet_selected">
      <vs-button success flat :active="active == 1" @click="active = 1" color="#6FCF97">
        My Wallet
      </vs-button>
      <vs-button success flat :active="active == 2" @click="active = 2" color="#6FCF97">
        My Token
      </vs-button>
      <vs-button success flat :active="active == 3" @click="active = 3" color="#6FCF97">
        History
      </vs-button>
    </div>
    <div class="form">
      <img src="@image/icons/block.svg" alt="" />
      <div class="quote">
        Please complete the account verification process to unlock your wallet
      </div>
      <vs-button class="btn_verify" color="#0b9985" type="submit">
        Enable 2FA Now
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  data: () => ({
    active: 1,
  }),
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.wallet_verify {
  .myWallet_selected {
    display: flex;
    margin: 0 10px;
    justify-content: center;
    margin-bottom: 50px;
    .vs-button {
      width: 150px;
      height: 32px;
      //   .vs-button__content {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      //   }
    }
    .vs-button--active {
      color: $white-text-01;
    }
  }
  .form {
    background: rgba(255, 255, 255, 0.93);
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    padding: 50px 200px;
    text-align: center;
    width: 830px;
    margin: 0 auto;
    .quote {
      margin: 30px 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    }
    .btn_verify {
      margin: 0 auto;
      border-radius: 50px;
      margin-top: 10px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      padding: 4px 20px;
    }
  }
}
</style>
