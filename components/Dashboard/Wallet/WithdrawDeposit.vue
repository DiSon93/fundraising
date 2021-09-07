<template>
  <div class="token_amount">
    <div class="heading">
      <div class="distribution_title">Token Amount</div>
      <div class="select_option">
        <div class="overview type_options">
          <vs-radio v-model="picked" val="1" color="#0b9985">
            Hide Balance Zero
          </vs-radio>
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
          <vs-th> Coin </vs-th>
          <vs-th> Available </vs-th>
          <vs-th> Action </vs-th>
          <vs-th> View </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in tokens">
          <vs-td>
            <img :src="tr.image" alt="" />
            {{ tr.token }}
          </vs-td>
          <vs-td>
            {{ tr.available }}
          </vs-td>
          <vs-td>
            <div class="action">
              <a href="javascript:;"
                ><img src="@image/icons/withdraw.svg" alt="" /> Widthdraw</a
              >
              <a href="javascript:;" class="deposit">
                <img src="@image/icons/deposit.svg" alt="" /> Deposit
              </a>
            </div>
          </vs-td>
          <vs-td>
            <a href="javascript:;">
              <img src="@image/icons/done.svg" alt="" /> {{ tr.view }}
            </a>
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
    picked: 0,
    tokens: [
      {
        id: 1,
        token: "USDT",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/USDT.svg"),
      },
      {
        id: 2,
        token: "UNI",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/UNI.svg"),
      },
      {
        id: 3,
        token: "DOT",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/DOT.svg"),
      },
      {
        id: 4,
        token: "USDT",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/USDT.svg"),
      },
      {
        id: 5,
        token: "UNI",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/UNI.svg"),
      },
      {
        id: 6,
        token: "DOT",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/DOT.svg"),
      },
      {
        id: 7,
        token: "USDT",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/USDT.svg"),
      },
      {
        id: 8,
        token: "UNI",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/UNI.svg"),
      },
      {
        id: 9,
        token: "DOT",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/DOT.svg"),
      },
      {
        id: 10,
        token: "USDT",
        available: "12.000.000",
        view: "View",
        image: require("@/assets/images/icons/USDT.svg"),
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
.token_amount {
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
