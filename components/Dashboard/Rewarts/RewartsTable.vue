<template>
  <div class="rewartsTable">
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Time </vs-th>
          <vs-th> ID </vs-th>
          <vs-th> Amount </vs-th>
          <vs-th> Status </vs-th>
          <vs-th> Action </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in tokens">
          <vs-td>
            {{ tr.time }}
          </vs-td>
          <vs-td>
            {{ tr.token }}
          </vs-td>
          <vs-td>
            {{ tr.amount }}
          </vs-td>
          <vs-td>
            <div
              v-if="tr.status == 'Active'"
              v-bind:class="{ status_active: tr.status == 'Active' }"
            >
              {{ tr.status }}
            </div>
            <div
              v-if="tr.status == 'Pending'"
              v-bind:class="{ status_pending: tr.status == 'Pending' }"
            >
              {{ tr.status }}
            </div>
            <div
              v-if="tr.status == 'Earned Bonus'"
              v-bind:class="{ status_bonus: tr.status == 'Earned Bonus' }"
            >
              {{ tr.status }}
            </div>
          </vs-td>
          <vs-td>
            <img :src="tr.image" alt="" />
            <a
              href="javascript:;"
              @click="$router.push('/dashboard/wallet')"
              v-if="tr.status == 'Active'"
              v-bind:class="{ status_active: tr.status == 'Active' }"
            >
              {{ tr.action }}
            </a>
            <a
              href="javascript:;"
              @click="$router.push('/dashboard/wallet')"
              v-if="tr.status == 'Pending'"
              v-bind:class="{ status_pending: tr.status == 'Pending' }"
            >
              {{ tr.action }}
            </a>
            <a
              href="javascript:;"
              @click="$router.push('/dashboard/wallet')"
              v-if="tr.status == 'Earned Bonus'"
              v-bind:class="{ status_bonus: tr.status == 'Earned Bonus' }"
            >
              {{ tr.action }}
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
export default {
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  data: () => ({
    page: 1,
    max: 3,
    active: 0,
    selected: [],
    tokens: [
      {
        id: 1,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$100",
        status: "Active",
        image: require("@/assets/images/icons/get_green.svg"),
        action: "Get",
      },
      {
        id: 2,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$200",
        status: "Pending",
        image: require("@/assets/images/icons/get_grey.svg"),
        action: "Get",
      },
      {
        id: 3,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$250",
        status: "Earned Bonus",
        image: require("@/assets/images/icons/get_dark.svg"),
        action: "Get",
      },
      {
        id: 4,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$100",
        status: "Active",
        image: require("@/assets/images/icons/get_green.svg"),
        action: "Get",
      },
      {
        id: 5,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$200",
        status: "Pending",
        image: require("@/assets/images/icons/get_grey.svg"),
        action: "Get",
      },
      {
        id: 6,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$250",
        status: "Earned Bonus",
        image: require("@/assets/images/icons/get_dark.svg"),
        action: "Get",
      },
      {
        id: 7,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$100",
        status: "Active",
        image: require("@/assets/images/icons/get_green.svg"),
        action: "Get",
      },
      {
        id: 8,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$200",
        status: "Pending",
        image: require("@/assets/images/icons/get_grey.svg"),
        action: "Get",
      },
      {
        id: 9,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$250",
        status: "Earned Bonus",
        image: require("@/assets/images/icons/get_dark.svg"),
        action: "Get",
      },
      {
        id: 10,
        time: "05/05/2021 15:50:20",
        token: "24151213545",
        amount: "$100",
        status: "Active",
        image: require("@/assets/images/icons/get_green.svg"),
        action: "Get",
      },
    ],
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
.rewartsTable {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 30px;
  margin: 30px 0;
}
.paginator {
  background-color: $white-text-01;
}
</style>
