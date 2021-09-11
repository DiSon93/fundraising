<template>
  <div class="ranking">
    <a-row :gutter="32">
      <a-col :xs="24" :sm="12">
        <div class="title">Ranking</div>
        <div class="total">
          <div class="name">Your Rank</div>
          <div class="figure">105</div>
        </div>
        <div class="campaign">
          <a-divider>Campaign</a-divider>
        </div>
        <div class="bonus">
          <img src="@image/icons/bonus_01.svg" alt="" />
          <div class="money">$30.000</div>
          <div class="number">Bonus: $3000</div>
        </div>
        <div class="bonus">
          <img src="@image/icons/bonus_02.svg" alt="" />
          <div class="money">$20.000</div>
          <div class="number">Bonus: $2000</div>
        </div>
        <div class="bonus">
          <img src="@image/icons/bonus_03.svg" alt="" />
          <div class="money">$10.000</div>
          <div class="number">Bonus: $1000</div>
        </div>
      </a-col>
      <a-col :xs="24" :sm="12">
        <div class="title">Top Rank</div>

        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th> ID </vs-th>
              <vs-th> Rank </vs-th>
              <vs-th> Commision </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr :key="i" v-for="(tr, i) in tokens">
              <vs-td>
                {{ tr.token }}
              </vs-td>
              <vs-td>
                {{ tr.rank }}
              </vs-td>
              <vs-td>
                {{ tr.commision }}
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <div class="paginator">
              <div>
                <vs-pagination v-model="page" :length="max" color="#0b9985" />
              </div>
              <div class="numberPage">
                Rows Per page:
                <span>
                  <a-select
                    default-value="10"
                    style="width: 120px"
                    @change="handleChange"
                  >
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
      </a-col>
    </a-row>
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
        token: "24151213545",
        rank: 1,
        commision: "$5000",
      },
      {
        id: 2,
        token: "24151213545",
        rank: 2,
        commision: "$4500",
      },
      {
        id: 3,
        token: "24151213545",
        rank: 3,
        commision: "$4000",
      },
      {
        id: 4,
        token: "24151213545",
        rank: 4,
        commision: "$3500",
      },
      {
        id: 5,
        token: "24151213545",
        rank: 5,
        commision: "$3000",
      },
      {
        id: 6,
        token: "24151213545",
        rank: 6,
        commision: "$2500",
      },
      {
        id: 7,
        token: "24151213545",
        rank: 7,
        commision: "$2000",
      },
      {
        id: 8,
        token: "24151213545",
        rank: 8,
        commision: "$1500",
      },
      {
        id: 9,
        token: "24151213545",
        rank: 9,
        commision: "$1000",
      },
      {
        id: 10,
        token: "24151213545",
        rank: 10,
        commision: "$950",
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
.ranking {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 40px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 20px;
  }
  .total {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 25px;
    text-align: center;
    .name {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
      margin-bottom: 10px;
    }
    .figure {
      font-weight: 500;
      font-size: 36px;
      line-height: 24px;
    }
  }
  .bonus {
    margin: 20px 0;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid $green-black-01;
    align-items: center;
    .money {
      font-weight: bold;
      font-size: 21.9131px;
      line-height: 15px;
      color: $green-black-01;
    }
    .number {
      font-weight: bold;
      font-size: 14px;
      line-height: 15px;
    }
  }
}
</style>
