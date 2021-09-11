<template>
  <div class="accountStatus">
    <div class="title">
      <div class="status">Account Status</div>
      <div class="right">
        <div class="level">Security Level</div>
        <div class="point" v-for="i in 2" :key="i"></div>
        <div class="point unactive" v-for="i in 2" :key="i"></div>
      </div>
    </div>
    <div class="quote">Please complete for up level your account</div>
    <div class="content">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
        amet,
      </div>
      <vs-button
        class="btn_started"
        color="rgb(59,222,200)"
        @click="$router.push('/dashboard/wallet/verify')"
      >
        Check
      </vs-button>
    </div>
    <a-divider></a-divider>
    <div class="content">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
        amet,
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet,
        </div>
      </div>

      <vs-button
        class="btn_started"
        color="rgb(59,222,200)"
        @click="$router.push('/dashboard/wallet/verify')"
      >
        Check
      </vs-button>
    </div>
    <a-divider></a-divider>
    <div class="content error">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
        amet,
      </div>
      <vs-button
        class="btn_started btn_danger"
        color="#EB5757"
        @click="$router.push('/dashboard/wallet/2FA')"
      >
        Check
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.accountStatus {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  margin: 0 10%;
  padding: 40px 30px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .status {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
    }
    .right {
      display: flex;
      align-items: center;
      .level {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: $green-black-01;
        margin-right: 10px;
      }
      .point {
        background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
        border-radius: 20px;
        width: 40px;
        height: 7px;
        margin-left: 5px;
      }
      .unactive {
        background: #e0e0e0;
      }
    }
  }
  .quote {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $green-black-01;
    margin: 20px 0 40px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    .btn_started {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 20px;
      padding: 0 12px;
    }
    .btn_danger {
      background: $red-text-01;
    }
  }
  .error {
    color: $red-text-01;
  }
  .ant-divider-horizontal {
    margin: 6px 0 !important;
  }
}
</style>
