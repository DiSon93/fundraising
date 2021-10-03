<template>
  <div class="your_account">
    <div class="account_selected">
      <vs-button success flat :active="active == 1" @click="active = 1" color="#6FCF97">
        Personal info
      </vs-button>
      <vs-button success flat :active="active == 2" @click="active = 2" color="#6FCF97">
        Security
      </vs-button>
      <vs-button success flat :active="active == 3" @click="active = 3" color="#6FCF97">
        Entities
      </vs-button>
      <vs-button success flat :active="active == 4" @click="active = 4" color="#6FCF97">
        Email preferences
      </vs-button>
    </div>
    <div v-if="active == 1">
      <div class="personal_info">
        <PersonalInfo />
      </div>
      <div class="form">
        <a-row :gutter="24">
          <a-col :xs="24" :sm="12">
            <ChangeEmail />
          </a-col>
          <a-col :xs="24" :sm="12">
            <ChangePassword />
          </a-col>
        </a-row>
      </div>
      <AccountStatus />
      <div class="submit_form">
        <InfoSubmit />
      </div>
      <div class="submit_form">
        <PersonalSubmit />
      </div>
    </div>
    <div v-if="active == 2">
      <TwoFactorAuthentication />
      <Disable2FA />
      <TwoFASubmit />
      <ActiveBrowser />
      <LastTenLogin />
      <CloseAccount />
    </div>
    <div v-if="active == 3">
      <VerifyStart v-on:continue="verify = 2" v-if="verify == 1" />
      <VerifyResident v-on:continue="verify = 3" v-if="verify == 2" />
      <VerifyIdentity v-on:continue="verify = 4" v-if="verify == 3" />
      <VerifyPhoto v-on:continue="verify = 5" v-if="verify == 4" />
      <VerifySecurity v-on:continue="verify = 6" v-if="verify == 5" />
      <VerifyStatus v-if="verify == 6" v-on:continue="verify = 1" />
    </div>
    <div v-if="active == 4">
      <EmailReferences />
    </div>
  </div>
</template>

<script>
  import ChangeEmail from "@component/Dashboard/Account/ChangeEmail";
  import ChangePassword from "@component/Dashboard/Account/ChangePassword";
  import AccountStatus from "@component/Dashboard/Account/AccountStatus";
  import InfoSubmit from "@component/Dashboard/Account/InfoSubmit";
  import PersonalSubmit from "@component/Dashboard/Account/PersonalSubmit";
  import PersonalInfo from "@component/Dashboard/Account/PersonalInfo";
  import TwoFactorAuthentication from "@component/Dashboard/Account/TwoFactorAuthentication";
  import ActiveBrowser from "@component/Dashboard/Account/ActiveBrowser";
  import LastTenLogin from "@component/Dashboard/Account/LastTenLogin";
  import CloseAccount from "@component/Dashboard/Account/CloseAccount";
  import Disable2FA from "@component/Dashboard/Account/Disable2FA";
  import TwoFASubmit from "@component/Dashboard/Account/TwoFASubmit";
  import EmailReferences from "@component/Dashboard/Account/EmailReferences";
  import VerifyIdentity from "@component/Dashboard/Account/VerifyIdentity";
  import VerifyResident from "@component/Dashboard/Account/VerifyResident";
  import VerifyStart from "@component/Dashboard/Account/VerifyStart";
  import VerifyPhoto from "@component/Dashboard/Account/VerifyPhoto";
  import VerifySecurity from "@component/Dashboard/Account/VerifySecurity";
  import VerifyStatus from "@component/Dashboard/Account/VerifyStatus";

  export default {
    layout: "dashboard",
    transition: {
      name: "slide-fade",
      mode: "out-in",
    },
    components: {
      ChangeEmail,
      ChangePassword,
      AccountStatus,
      InfoSubmit,
      PersonalSubmit,
      PersonalInfo,
      TwoFactorAuthentication,
      ActiveBrowser,
      LastTenLogin,
      CloseAccount,
      Disable2FA,
      TwoFASubmit,
      EmailReferences,
      VerifyIdentity,
      VerifyResident,
      VerifyStart,
      VerifyPhoto,
      VerifySecurity,
      VerifyStatus,
    },
    data: () => ({
      active: 1,
      verify: 1,
    }),
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: "login" });
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log("Received values of form: ", values);
          }
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@asset/variables.scss";
  .your_account {
    .account_selected {
      display: flex;
      margin: 0 10px;
      justify-content: center;
      margin-bottom: 40px;
      .vs-button {
        //   width: 150px;
        height: 32px;
        //   .vs-button__content {
        padding: 0 10px;
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
    .personal_info {
      background: rgba(255, 255, 255, 0.93);
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      padding: 40px;
      margin: 0 10%;
    }
    .submit_form {
      margin: 30px 0;
    }
  }
  .form {
    margin: 30px 10%;
  }
</style>
