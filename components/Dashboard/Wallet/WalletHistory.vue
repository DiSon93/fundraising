<template>
  <div class="wallet_history">
    <div class="heading">
      <div class="distribution_title">Deposit & Withdraw History</div>
      <div class="select_option">
        <div class="overview type_options">
          <a-select @change="handleChange" placeholder="Select Type To View">
            <a-select-option value="widthdraw" id="select_wallet">
              Widthdraw
            </a-select-option>
            <a-select-option value="deposit" id="select_wallet">
              Deposit
            </a-select-option>
            <a-select-option value="commission" id="select_wallet">
              Commission
            </a-select-option>
          </a-select>
          <img src="@image/icons/filter.svg" alt="" />
        </div>
        <div class="overview type_options">
          <a-select @change="handleChange" placeholder="Select Token To View">
            <a-select-option value="widthdraw" id="select_token">
              <img src="@image/icons/USDT.svg" alt="" /> USDT
            </a-select-option>
            <a-select-option value="deposit" id="select_token">
              <img src="@image/icons/DOT.svg" alt="" /> DOT
            </a-select-option>
            <a-select-option value="commission" id="select_token">
              <img src="@image/icons/UNI.svg" alt="" /> UNI
            </a-select-option>
          </a-select>
          <img src="@image/icons/token_type.svg" alt="" />
        </div>
        <div class="overview">
          <a-date-picker :format="dateFormat" :placeholder="today">
            <template slot="dateRender" slot-scope="current, today">
              <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
                {{ current.date() }}
              </div>
            </template>
          </a-date-picker>
          <img src="@image/icons/arrows.svg" alt="" />
        </div>
      </div>
    </div>
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Time </vs-th>
          <vs-th> Token </vs-th>
          <vs-th> Amount </vs-th>
          <vs-th> Status </vs-th>
          <vs-th> Type </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in tokens">
          <vs-td>
            {{ tr.time }}
          </vs-td>
          <vs-td>
            <img :src="tr.image" alt="" />
            {{ tr.token }}
          </vs-td>
          <vs-td>
            {{ tr.amount }}
          </vs-td>
          <vs-td> {{ tr.status }} <img src="@image/icons/done.svg" alt="" /> </vs-td>
          <vs-td>
            {{ tr.type }}
          </vs-td>
        </vs-tr>
      </template>
      <template #footer>
        <div class="paginator">
          <div class="pageAmount">1-42 of 100</div>
          <div>
            <vs-pagination v-model="page" :length="max" color="#0b9985" />
          </div>
          <div class="numberPage">
            Rows Per page:
            <span>
              <a-select default-value="10" style="width: 120px" @change="handleChange">
                <a-select-option value="10"> 10 </a-select-option>
                <a-select-option value="20"> 20 </a-select-option>
                <a-select-option value="50"> 50 </a-select-option>
                <a-select-option value="100"> 100 </a-select-option>
              </a-select>
            </span>
          </div>
        </div>
      </template>
    </vs-table>
  </div>
</template>

<script>
import moment from "moment";
export default {
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  data: () => ({
    editActive: false,
    edit: null,
    editProp: "",
    search: "",
    allCheck: false,
    page: 1,
    max: 3,
    active: 0,
    selected: [],
    today: null,
    dateFormat: "MMM Do YY",
    tokens: [
      {
        id: 1,
        time: "05/05/2021 15:50:20",
        token: "USDT",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/USDT.svg"),
        type: "Withdraw",
      },
      {
        id: 2,
        time: "05/05/2021 15:50:20",
        token: "UNI",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/UNI.svg"),
        type: "Deposit",
      },
      {
        id: 3,
        time: "05/05/2021 15:50:20",
        token: "DOT",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/DOT.svg"),
        type: "Commission",
      },
      {
        id: 4,
        time: "05/05/2021 15:50:20",
        token: "USDT",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/USDT.svg"),
        type: "Withdraw",
      },
      {
        id: 5,
        time: "05/05/2021 15:50:20",
        token: "UNI",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/UNI.svg"),
        type: "Deposit",
      },
      {
        id: 6,
        time: "05/05/2021 15:50:20",
        token: "DOT",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/DOT.svg"),
        type: "Commission",
      },
      {
        id: 7,
        time: "05/05/2021 15:50:20",
        token: "USDT",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/USDT.svg"),
        type: "Withdraw",
      },
      {
        id: 8,
        time: "05/05/2021 15:50:20",
        token: "UNI",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/UNI.svg"),
        type: "Deposit",
      },
      {
        id: 9,
        time: "05/05/2021 15:50:20",
        token: "DOT",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/DOT.svg"),
        type: "Commission",
      },
      {
        id: 10,
        time: "05/05/2021 15:50:20",
        token: "USDT",
        amount: "$10.000",
        status: "Done",
        image: require("@/assets/images/icons/USDT.svg"),
        type: "Withdraw",
      },
    ],
  }),
  mounted() {
    this.setTodaySelect();
  },
  watch: {
    selected: function () {
      console.log("select", this.selected);
    },
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    setTodaySelect() {
      this.today = moment().format("MMM Do YY");
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = "1px solid #1890ff";
        style.borderRadius = "50%";
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.wallet_history {
  padding: 25px 20px;
  margin: 0 50px;
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  margin-top: 40px;
  .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    .distribution_title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
    }
  }
}
</style>
