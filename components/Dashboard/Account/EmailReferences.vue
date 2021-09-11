<template>
  <div class="emailReferences">
    <div class="title">Email Preferences</div>
    <div class="getNews">
      <div class="content">
        <div class="name">Get news notification</div>
        <div class="quote">
          This will not affect emails related to investments you make on CoinList.
        </div>
      </div>
      <div class="btn_enable">
        <vs-switch v-model="active1" color="#0b9985">
          <template #off> Disable </template>
          <template #on> Enable </template>
        </vs-switch>
      </div>
    </div>
    <div class="getNews">
      <div class="content">
        <div class="name">Update token sale</div>
        <div class="quote">
          Get reminders when you haven't completed a token sale registration or investment
        </div>
      </div>
      <div class="btn_enable">
        <vs-switch v-model="active2" color="#0b9985">
          <template #off> Disable </template>
          <template #on> Enable </template>
        </vs-switch>
      </div>
    </div>
    <div class="getNews">
      <div class="content">
        <div class="name">Get notifi relate account coinpad</div>
        <div class="quote">
          This will not affect emails related to investments you make on CoinList.
        </div>
      </div>
      <div class="btn_enable">
        <vs-switch v-model="active3" color="#0b9985">
          <template #off> Disable </template>
          <template #on> Enable </template>
        </vs-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  data: () => ({
    active1: true,
    active2: false,
    active3: true,
  }),
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.emailReferences {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 30px;
  margin: 0 10%;
  margin-bottom: 20px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 20px;
  }
  .getNews {
    display: flex;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 20px 40px;
    margin-bottom: 20px;
    .name {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 10px;
    }
    .quote {
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      padding-left: 10%;
    }
  }
  .btn_enable {
    width: 100px;
  }
}
</style>
