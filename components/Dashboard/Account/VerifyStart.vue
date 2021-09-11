<template>
  <div class="identity_verify">
    <div class="title">Verify Your Identity</div>
    <div class="content">
      <div class="proccess">
        <a-steps :current="0">
          <a-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
            <template slot="content">
              <span>Step {{ index }} Status: {{ status }}</span>
            </template>
            <span :class="`${prefixCls}-icon-dot`" />
          </a-popover>
          <a-step title="Start" />
          <a-step title="Resident" />
          <a-step title="Identity" />
          <a-step title="Photo" />
          <a-step title="Security " />
          <a-step title="Status" />
        </a-steps>
      </div>
      <div class="verifying">Where do you reside?</div>
      <div class="quote">
        To enable trading and wallets for your CoinList account, we need to collect
        additional info from you, including name, address, selfie, and government-issued
        ID image. This process usually takes less than 5 minutes for most individuals but
        can take longer for companies or trusts.
      </div>
      <div class="entity">By registering this entity</div>
      <div class="list">
        <ul>
          <li>
            Acknowledge that I have read and agree to the Terms of Service and Privacy
            Policy
          </li>
          <li>
            I agree that this entity is not a foreign financial institution or foreign
            shell bank
          </li>
          <li>I agree not to fund this account from a private banking account</li>
          <li>
            I agree that I am not a politically exposed person (PEP) or immediate family
            or close associate of a politically exposed person
          </li>
          <li>
            agree that I am not—nor is anyone in my immediate household—associated with
            FINRA, a FINRA-member broker-dealer, or the SEC
          </li>
          <li>
            I understand that CoinList and its affiliates do not provide duplicate account
            trade confirms and statements to FINRA
          </li>
        </ul>
      </div>
      <vs-button class="btn_started" color="rgb(59,222,200)" @click="continueFunc">
        Continue
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    continueFunc() {
      this.$emit("continue");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.identity_verify {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 30px;
  margin: 0 50px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 25px;
  }
  .content {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 50px;
    .proccess {
      margin-bottom: 20px;
    }
    .verifying {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .quote {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: justify;
    }
    .entity {
      margin-top: 80px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .list {
      margin-left: 30px;
    }
    .btn_started {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 20px;
      padding: 0 12px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
}
</style>
