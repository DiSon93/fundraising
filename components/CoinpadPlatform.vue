<template>
  <div class="coinpad_platform">
    <div class="title">Previously on the Coinpad Platform</div>

    <div class="center">
      <vs-table v-model="selected">
        <template #thead>
          <vs-tr>
            <vs-th> Project </vs-th>
            <vs-th> On Coinpad </vs-th>
            <vs-th> Current Price </vs-th>
            <vs-th> Change Since Coinpad</vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in users"
            :data="tr"
            :danger="tr.id == 3"
            :success="tr.id == 5"
            :primary="tr.id == 8"
            :warn="tr.id == 9"
            :is-selected="selected == tr"
          >
            <vs-td>
              <img :src="tr.image" alt="" />
              {{ tr.project }}
            </vs-td>
            <vs-td>
              {{ tr.coinpad }}
            </vs-td>
            <vs-td>
              {{ tr.price }}
            </vs-td>
            <vs-td>
              <vs-button flat id="btn_percent" color="rgb(59,222,200)">
                {{ tr.percent }}
              </vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    users: [
      {
        id: 1,
        project: "Mina",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/mina_icon.svg"),
      },
      {
        id: 2,
        project: "Casper",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/casper_icon.svg"),
      },
      {
        id: 3,
        project: "Flow",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/flow-coin.svg"),
      },
      {
        id: 4,
        project: "Mina",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/mina_icon.svg"),
      },
      {
        id: 5,
        project: "Casper",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/casper_icon.svg"),
      },
      {
        id: 6,
        project: "Flow",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/flow-coin.svg"),
      },
      {
        id: 7,
        project: "Mina",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/mina_icon.svg"),
      },
      {
        id: 8,
        project: "Casper",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/casper_icon.svg"),
      },
      {
        id: 9,
        project: "Flow",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/flow-coin.svg"),
      },
      {
        id: 10,
        project: "Mina",
        coinpad: "Apr 2021",
        price: "$3.10",
        percent: "+1.11255%",
        image: require("@/assets/images/icons/mina_icon.svg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.coinpad_platform {
  margin-top: 60px;
  padding-top: 40px;
  padding-bottom: 30px;
  background: $background;
  .title {
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: center;
  }
}
.vs-table {
  tr th {
    background-color: $background-green !important;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
  }
  #btn_percent.vs-button {
    background: $green-black-01;
    font-weight: bold;
    font-size: 16px;
    color: $white-text-01;
    // .vs-button__content {
    padding: 0px 20px;
    // }
  }
  tr td {
    font-size: 16px;
  }
  tr td:nth-child(1) {
    font-weight: 700;
    padding-left: 200px;
    img {
      margin-right: 10px;
    }
  }
  tr th:first-child {
    padding-left: 200px;
  }
}
</style>
