<template>
  <div class="wallet_deposit">
    <div class="myWallet_selected">
      <vs-button success flat :active="active == 1" @click="active = 1" color="#6FCF97">
        My Wallet
      </vs-button>
      <vs-button success flat :active="active == 2" @click="active = 2" color="#6FCF97">
        Report
      </vs-button>
    </div>
    <div class="form">
      <div class="title">Deposit</div>
      <div class="select_coin">
        <div class="label">Select Coin:</div>
        <div class="overview type_options">
          <a-select
            @change="handleChange"
            placeholder="Select Token To View"
            default-value="USDT"
          >
            <a-select-option value="USDT" id="select_deposit">
              <img src="@image/icons/USDT.svg" alt="" /> USDT
            </a-select-option>
            <a-select-option value="DOT" id="select_deposit">
              <img src="@image/icons/DOT.svg" alt="" /> DOT
            </a-select-option>
            <a-select-option value="UNI" id="select_deposit">
              <img src="@image/icons/UNI.svg" alt="" /> UNI
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div class="select_coin select_network">
        <div class="label">Deposit To:</div>
        <div class="overview type_options">
          <a-select @change="handleChange" placeholder="Select network">
            <a-select-option value="USDT" id="select_deposit">
              <img src="@image/icons/USDT.svg" alt="" /> USDT
            </a-select-option>
            <a-select-option value="DOT" id="select_deposit">
              <img src="@image/icons/DOT.svg" alt="" /> DOT
            </a-select-option>
            <a-select-option value="UNI" id="select_deposit">
              <img src="@image/icons/UNI.svg" alt="" /> UNI
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div class="address">
        <div class="copy">Copy Address</div>
        <div class="link">
          <div class="hash">TGbVf2iioluETB7EkqjiSmJd3ujWKcGsXZa</div>
          <a href="javascript:;">
            <img src="@image/icons/copyright.svg" alt="" />
          </a>
        </div>

        <a-row class="network_info">
          <a-col :span="8">
            <div class="label">Expected Arrival:</div>
            <div class="label">Expected Unlock:</div>
            <div class="label">Minimum Deposit:</div>
          </a-col>
          <a-col :span="16">
            <div class="confir">1 network confirmations</div>
            <div class="confir">1 network confirmations</div>
            <div class="confir">0.00000001 USDT</div>
          </a-col>
        </a-row>
      </div>
      <div class="QRCode">
        <div>
          <qrcode-vue :value="value" :size="size" level="H" />
        </div>
        <div class="besideCode">
          Or scan the code on the withdrawal page of the trading platform APP or wallet
          APP.
          <ul>
            <li>
              Send only <span class="highlight">USDT</span> to this deposit address.
            </li>
            <li>Ensure the network is <span class="highlight">TRC20</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  layout: "dashboard",
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  components: {
    QrcodeVue,
    // Qrcode,
  },
  data: () => ({
    active: 1,
    options: "",
    value: "https://example.com",
    size: 150,
  }),
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.wallet_deposit {
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
    padding: 40px;
    width: 700px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 24px;
    color: $green-black-01;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .select_coin {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .label {
      width: 150px;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
    }
  }
  .address {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px 30px;
    .copy {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 15px;
    }
    .link {
      display: flex;
      .hash {
        border: 1px solid #828282;
        box-sizing: border-box;
        border-radius: 5px;
        text-align: center;
        width: 540px;
        padding: 3.5px 0;
        margin-right: 0px;
      }
    }
    .network_info {
      margin: 10px 0;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: $grey-black-02;
      .label {
        font-weight: 700;
      }
    }
  }
  .QRCode {
    display: flex;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px 30px;
    margin-top: 30px;
    img {
    }
    .besideCode {
      margin-left: 40px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      .highlight {
        color: $green-black-01;
      }
      ul li {
        margin-left: 20px;
      }
    }
  }
}
</style>
