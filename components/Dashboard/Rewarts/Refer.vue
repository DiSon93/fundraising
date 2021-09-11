<template>
  <div class="rewarts_refer">
    <div class="title">Refer your friends and earn BTC</div>
    <div class="getBonus">
      Get bonus 0.5% invested... ·
      <span class="read">Read the rules and eligibility info</span>
    </div>
    <a-row :gutter="24">
      <a-col :xs="24" :sm="12">
        <div class="referral">
          <div class="label">Link Referral:</div>
          <div class="hash">https://Coinpad.io/hg4hfh23</div>
          <a href="javascript:;"> <img src="@image/icons/copyright.svg" alt="" /> </a>
        </div>
      </a-col>

      <a-col :xs="24" :sm="12">
        <div class="referral">
          <div class="label">Code Referral:</div>
          <div class="hash code">hg4hfh23</div>
          <a href="javascript:;"> <img src="@image/icons/copyright.svg" alt="" /> </a>
        </div>
      </a-col>
    </a-row>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit.
    </div>
    <div class="memo">
      <div class="total_referral">
        <div class="name">Your Total Referral</div>
        <div class="figure">100</div>
      </div>
      <div class="total_referral">
        <div class="name">Total Earned</div>
        <div class="figure">$1000</div>
      </div>
      <div class="total_referral">
        <div class="name">Available This Month</div>
        <div class="figure">$200</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.rewarts_refer {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 50px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 30px;
  }
  .getBonus {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    .read {
      color: $green-black-01;
    }
  }
  .referral {
    display: flex;
    align-items: center;
    .label {
      color: $green-black-01;
      margin-right: 10px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
    .hash {
      border: 1px solid #828282;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 4px 0;
      width: 250px;
      text-align: center;
      margin-right: 2px;
      text-overflow: ellipsis;
      overflow-x: hidden;
    }
    .code {
      border: 1px solid #6fcf97;
    }
  }
  .content {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 20px 0;
  }
  .memo {
    display: flex;
    justify-content: space-between;
    .total_referral {
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 5px;
      text-align: center;
      padding: 20px 0px 30px;
      width: 30%;
      .name {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $green-black-01;
        margin-bottom: 20px;
      }
      .figure {
        font-weight: normal;
        font-size: 48px;
        line-height: 24px;
      }
    }
  }
}
</style>
