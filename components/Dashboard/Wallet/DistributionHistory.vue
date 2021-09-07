<template>
  <div class="distribution_history">
    <div class="heading">
      <div class="distribution_title">Distribution History</div>
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
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Project Name </vs-th>
          <vs-th> Invest </vs-th>
          <vs-th> Value </vs-th>
          <vs-th> Status </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in tokens" @click="tr.open = !tr.open">
          <vs-td>
            <img :src="tr.image" alt="" />
            {{ tr.project }}
          </vs-td>
          <vs-td>
            {{ tr.invest }}
          </vs-td>
          <vs-td>
            {{ tr.value }}
          </vs-td>
          <vs-td>
            <div class="dropdown_btn">
              <div
                v-bind:class="{ adjust: tr.status == 'Done' }"
                v-if="tr.status == 'Done'"
              >
                {{ tr.status }}
              </div>
              <div v-else>
                {{ tr.status }}
              </div>
              <a href="javascript:;" v-if="tr.open"
                ><img src="@image/icons/up_icon.svg" alt="" />
              </a>

              <a href="javascript:;" v-else
                ><img src="@image/icons/down.svg" alt="" />
              </a>
            </div>
          </vs-td>

          <template #expand id="distribution_expand">
            <vs-table>
              <template #thead>
                <vs-tr>
                  <vs-th> Expect Distribution Time </vs-th>
                  <vs-th> Ditribution </vs-th>
                  <vs-th> Percent Of Pool </vs-th>
                  <vs-th> Value </vs-th>
                  <vs-th> State </vs-th>
                  <vs-th> Action </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr :key="i" v-for="(tr, i) in histories" :data="tr">
                  <vs-td>
                    {{ tr.time }}
                  </vs-td>
                  <vs-td>
                    {{ tr.distribution }}
                  </vs-td>
                  <vs-td>
                    <div style="width: 170px">
                      <a-progress
                        :percent="tr.percent"
                        :status="tr.percent != 100 ? 'active' : null"
                      />
                    </div>
                  </vs-td>
                  <vs-td>
                    {{ tr.value }}
                  </vs-td>
                  <vs-td>
                    <div
                      v-bind:class="{ adjust: tr.status == 'Done' }"
                      v-if="tr.status == 'Done'"
                    >
                      {{ tr.status }}
                    </div>
                    <div v-else>
                      {{ tr.status }}
                    </div>
                  </vs-td>
                  <vs-td>
                    <a href="javascript:;">
                      <img src="@image/icons/withdraw.svg" alt="" /> {{ tr.action }}
                    </a>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </template>
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
        project: "Vega",
        invest: "10 USDT",
        value: "500 VEGA",
        status: "Done",
        image: require("@/assets/images/icons/distribution_history_01.svg"),
        open: false,
      },
      {
        id: 2,
        project: "UNI",
        invest: "10 USDT",
        value: "550 UNI",
        status: "Done",
        image: require("@/assets/images/icons/distribution_history_02.svg"),
        open: false,
      },
      {
        id: 3,
        project: "Vega",
        invest: "10 USDT",
        value: "500 VEGA",
        status: "Pending",
        image: require("@/assets/images/icons/distribution_history_01.svg"),
        open: false,
      },
      {
        id: 4,
        project: "UNI",
        invest: "10 USDT",
        value: "550 UNI",
        status: "Done",
        image: require("@/assets/images/icons/distribution_history_02.svg"),
        open: false,
      },
      {
        id: 5,
        project: "Vega",
        invest: "10 USDT",
        value: "500 VEGA",
        status: "Pending",
        image: require("@/assets/images/icons/distribution_history_01.svg"),
        open: false,
      },
      {
        id: 6,
        project: "UNI",
        invest: "10 USDT",
        value: "550 UNI",
        status: "Done",
        image: require("@/assets/images/icons/distribution_history_02.svg"),
        open: false,
      },
      {
        id: 7,
        project: "Vega",
        invest: "10 USDT",
        value: "500 VEGA",
        status: "Pending",
        image: require("@/assets/images/icons/distribution_history_01.svg"),
        open: false,
      },
      {
        id: 8,
        project: "UNI",
        invest: "10 USDT",
        value: "550 UNI",
        status: "Done",
        image: require("@/assets/images/icons/distribution_history_02.svg"),
        open: false,
      },
      {
        id: 9,
        project: "Vega",
        invest: "10 USDT",
        value: "500 VEGA",
        status: "Pending",
        image: require("@/assets/images/icons/distribution_history_01.svg"),
        open: false,
      },
      {
        id: 10,
        project: "UNI",
        invest: "10 USDT",
        value: "550 UNI",
        status: "Done",
        image: require("@/assets/images/icons/distribution_history_02.svg"),
        open: false,
      },
    ],
    histories: [
      {
        id: 1,
        time: "05/05/2021 15:50:20",
        distribution: "250 VEGA",
        percent: "25",
        value: "100 USDT",
        status: "Done",
        action: "Withdraw",
      },
      {
        id: 2,
        time: "05/05/2021 15:50:20",
        distribution: "250 VEGA",
        percent: "65",
        value: "100 USDT",
        status: "Done",
        action: "Withdraw",
      },
      {
        id: 3,
        time: "05/05/2021 15:50:20",
        distribution: "250 VEGA",
        percent: "50",
        value: "100 USDT",
        status: "Done",
        action: "Withdraw",
      },
      {
        id: 4,
        time: "05/05/2021 15:50:20",
        distribution: "250 VEGA",
        percent: "100",
        value: "100 USDT",
        status: "Done",
        action: "Withdraw",
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
.distribution_history {
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
