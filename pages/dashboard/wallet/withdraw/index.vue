<template>
  <div class="wallet_withdraw">
    <div class="myWallet_selected">
      <vs-button success flat :active="active == 1" @click="active = 1" color="#6FCF97">
        My Wallet
      </vs-button>
      <vs-button success flat :active="active == 2" @click="active = 2" color="#6FCF97">
        Report
      </vs-button>
    </div>
    <div class="form">
      <div class="title">Withdraw</div>
      <a-form :form="form" @submit="handleSubmit">
        <div class="select_coin">
          <div class="label">Select Coin:</div>
          <div class="overview type_options">
            <a-form-item>
              <a-select
                @change="handleChange"
                placeholder="Select Token To View"
                default-value="USDT"
              >
                <a-select-option value="USDT" id="select_withdraw">
                  <img src="@image/icons/USDT.svg" alt="" /> USDT
                </a-select-option>
                <a-select-option value="DOT" id="select_withdraw">
                  <img src="@image/icons/DOT.svg" alt="" /> DOT
                </a-select-option>
                <a-select-option value="UNI" id="select_withdraw">
                  <img src="@image/icons/UNI.svg" alt="" /> UNI
                </a-select-option>
              </a-select>
            </a-form-item>
          </div>
        </div>

        <div class="limit">Available limit:12,710 USDT</div>
        <div class="select_coin">
          <div class="label">Amount:</div>
          <div class="overview type_options">
            <a-form-item>
              <a-input
                placeholder="Balance"
                size="large"
                v-decorator="[
                  'balance',
                  {
                    rules: [{ required: true, message: 'Please input your balance!' }],
                  },
                ]"
              />
            </a-form-item>
          </div>
        </div>
        <div class="select_coin address">
          <div class="label">Address Wallet:</div>
          <div class="overview type_options">
            <a-form-item>
              <a-input
                size="large"
                v-decorator="[
                  'address',
                  {
                    rules: [{ required: true, message: 'Please input your address!' }],
                  },
                ]"
              />
            </a-form-item>

            <a href="javascript:;"> <img src="@image/icons/copywallet.svg" alt="" /></a>
          </div>
        </div>

        <div class="select_coin">
          <div class="transaction">
            <div class="label">Transaction Fee:</div>
            <div class="fee">0.01 USDT</div>
          </div>
          <div class="total">
            <div class="label">You Will Get:</div>
            <div class="fee">12.610 USDT</div>
          </div>
        </div>
        <div class="select_coin">
          <div class="label">Password:</div>
          <div class="overview type_options">
            <a-form-item>
              <a-input
                size="large"
                placeholder="Your Password"
                v-decorator="[
                  'password',
                  {
                    rules: [{ required: true, message: 'Please input your password!' }],
                  },
                ]"
              />
            </a-form-item>
          </div>
        </div>
        <div class="select_coin">
          <div class="label">2FA:</div>
          <div class="overview type_options">
            <a-form-item>
              <a-input
                size="large"
                placeholder="Authentication Code"
                v-decorator="[
                  'authentication',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your authentication code!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
          </div>
        </div>
        <div class="select_coin form_submit">
          <a-form-item>
            <vs-button class="btn_withdraw" color="#0b9985" type="submit">
              Withdraw
            </vs-button>
          </a-form-item>
        </div>
      </a-form>
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
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      console.log("OOO");
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.wallet_withdraw {
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
    margin-bottom: 10px;
    .label {
      width: 150px;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      margin-top: -25px;
    }

    .transaction,
    .total {
      display: flex;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px 20px;
      margin-bottom: 20px;
      .label {
        color: $black-text-04;
        font-weight: 700;
        margin-top: 0px;
      }
      .fee {
        margin-left: 5px;
      }
    }
    .total {
      color: $green-black-01;
      margin-left: 60px;
      .label {
        color: $green-black-01;
        font-weight: 700;
      }
    }
    .btn_withdraw {
      margin: 0 20px;
      border-radius: 50px;
      margin: 0 auto;
      margin-top: 10px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      padding: 4px 20px;
    }
  }
  .form_submit {
    display: flex;
    justify-content: center;
  }
  .address {
    position: relative;
    a {
      position: absolute;
      right: 15px;
      top: 8px;
    }
  }
  .limit {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $black-text-04;
    text-align: right;
    margin-top: -30px;
    margin-bottom: 15px;
  }
}
</style>
