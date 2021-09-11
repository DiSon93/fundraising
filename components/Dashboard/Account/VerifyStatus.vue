<template>
  <div class="identity_verify">
    <div class="title">Verify Your Identity</div>
    <div class="content">
      <div class="proccess">
        <a-steps :current="5">
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
      <div class="verifying">Active Wallet</div>
      <div class="content">
        <div class="item">
          <div class="name">Resident</div>
          <div class="quote">
            Due to local regulations, some tokens may not be available in all locations.
            We may ask you to provide proof of residence.
          </div>
        </div>
        <div class="btn_done">Done</div>
      </div>
      <div class="content">
        <div class="item">
          <div class="name">Identity</div>
          <div class="quote">
            This information is required to comply with International and US laws and
            financial regulations.
          </div>
        </div>
        <div class="btn_done">Done</div>
      </div>
      <div class="content">
        <div class="item">
          <div class="name">Photo</div>
          <div class="quote">
            Due to local regulations, some tokens may not be available in all locations.
            We may ask you to provide proof of residence.
          </div>
        </div>
        <div class="btn_done btn_pending">Pending</div>
      </div>
      <div class="content">
        <div class="item">
          <div class="name">Security</div>
          <div class="quote">
            Due to local regulations, some tokens may not be available in all locations.
            We may ask you to provide proof of residence.
          </div>
        </div>
        <div class="btn_done">Done</div>
      </div>
      <div class="btn_action">
        <vs-button class="btn_started" color="#BDBDBD" disabled>
          Active Wallet
        </vs-button>
        <vs-button class="btn_started" color="#BDBDBD" @click="continueFunc">
          Back To Start
        </vs-button>
      </div>
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
    .content {
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 20px 30px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        .name {
          font-size: 18px;
          line-height: 24px;
          color: $green-black-01;
          margin-bottom: 10px;
        }
      }
      .btn_done {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $green-black-01;
      }
      .btn_pending {
        color: $grey-black-03;
      }
    }
    .btn_started {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      background: $black-text-05;
      border-radius: 20px;
      padding: 0 12px;
      margin: 20px 10px 0 10px;
    }
  }
  .btn_action {
    display: flex;
    justify-content: center;
  }
}
</style>
