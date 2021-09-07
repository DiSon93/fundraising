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
    <div class="help_categories">
      <vs-button id="btn_select" color="#f2f2f2" @click="$router.push('/help')">
        Accreditation FAQs
      </vs-button>
      <vs-button id="btn_select" color="#f2f2f2" @click="$router.push('/help')">
        Accreditation
      </vs-button>
      <vs-button id="btn_select" color="#f2f2f2" @click="$router.push('/help')">
        Affiliate Program
      </vs-button>
      <vs-button id="btn_select" color="#f2f2f2" @click="$router.push('/help')">
        Legal & Compliance
      </vs-button>
    </div>
    <div class="help_content">
      <div class="header">
        <div class="department">Accounts & Security / Accreditation</div>
        <di class="name">Accreditation FAQs</di>
      </div>
      <div class="table">
        <div class="title">TABLE OF CONTENTS</div>
        <ul>
          <li>What is an accredited investor?</li>
          <li>What is a qualified purchaser?`</li>
        </ul>
      </div>
      <div class="main">
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse amet eu
          pulvinar faucibus sed ipsum, feugiat id. Pellentesque sed eget dictum id a.
          Libero, ut morbi non in metus euismod. Cras blandit vitae porta dui fermentum
          bibendum a bibendum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Habitasse amet eu pulvinar faucibus sed ipsum, feugiat id. Pellentesque
          sed eget dictum id a. Libero, ut morbi non in metus euismod. Cras blandit vitae
          porta dui fermentum bibendum a bibendum pulvinar.
        </div>
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse amet eu
          pulvinar faucibus sed ipsum, feugiat id. Pellentesque sed eget dictum id a.
          Libero, ut morbi non in metus euismod. Cras blandit vitae porta dui fermentum
          bibendum a bibendum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Habitasse amet eu pulvinar faucibus sed ipsum, feugiat id. Pellentesque
          sed eget dictum id a. Libero, ut morbi non in metus euismod. Cras blandit vitae
          porta dui fermentum bibendum a bibendum pulvinar.
        </div>
      </div>
      <div class="center con-pagination">
        <vs-pagination circle v-model="page" :length="20" color="#0b9985" />
      </div>
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
    page: 1,
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
  .help_categories {
    display: flex;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    background: $background-grey-02;
    justify-content: space-around;
    margin: 30px 10%;
    padding: 15px 0;
    #btn_select {
      background: $background-grey !important;
      border-radius: 50px;
      color: $black-text-02;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      padding: 2px 16px;
    }
  }
  .help_content {
    margin: 0 10%;
    background: rgba(251, 251, 251, 0.93);
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    padding: 30px;
    .header {
      margin-bottom: 20px;
      .department {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: $green-black-01;
        margin-bottom: 10px;
        margin-top: 40px;
      }
      .name {
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
      }
    }
    .table {
      padding: 10px 100px;
      background: $white-text-01;
      margin: 0 -30px;
      .title {
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        color: $black-text-03;
        text-align: left;
      }
      ul li {
        color: $green-black-01;
        margin-bottom: 5px;
      }
    }
  }
  .main {
    padding-top: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    .text {
      margin-bottom: 20px;
    }
  }
  .con-pagination {
    margin-top: 50px;
  }
}
</style>
