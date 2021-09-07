<template>
  <!-- <Lazy> -->
  <div class="market">
    <div class="market_title">Today's Cryptocurrency Prices by Market Cap</div>
    <div class="content">
      The global crypto market cap is $1.85T, a
      <span class="highlight">1.83%</span> increase over the last day.
    </div>
    <div>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th> Name </vs-th>
            <vs-th> Price </vs-th>
            <vs-th> 24h% </vs-th>
            <vs-th> 7d% </vs-th>
            <vs-th> Market Cap </vs-th>
            <vs-th> Volume(24h) </vs-th>
            <vs-th> Circulating Suplly </vs-th>
            <vs-th> Last 7 Days </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
            <vs-td>
              <img :src="tr.image" alt="" /> {{ tr.name }}
              <span id="coin">{{ tr.coin }}</span>
            </vs-td>
            <vs-td>
              {{ tr.price }}
            </vs-td>
            <vs-td v-bind:class="{ adjust: tr.decrease_date }">
              {{ tr.date }}
            </vs-td>
            <vs-td v-bind:class="{ adjust: tr.decrease_week }">
              {{ tr.week }}
            </vs-td>
            <vs-td>
              {{ tr.market }}
            </vs-td>
            <vs-td>
              {{ tr.volume }}
              <div id="coin">
                {{ tr.base }}
              </div>
            </vs-td>
            <vs-td>
              {{ tr.supply }}
            </vs-td>
            <vs-td v-if="tr.decrease_chart">
              <div class="chart">
                <DecreaseChart />
              </div>
            </vs-td>
            <vs-td v-else>
              <div class="chart">
                <Chart />
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
  <!-- </Lazy> -->
</template>

<script>
import Chart from "@component/Chart.vue";
import DecreaseChart from "@component/DecreaseChart.vue";
export default {
  components: {
    Chart,
    DecreaseChart,
  },
  data: () => ({
    users: [
      {
        id: 1,
        name: "Bitcoin",
        coin: "BTC",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: false,
        decrease_week: false,
        decrease_chart: false,
        image: require("@/assets/images/icons/bitcoin.svg"),
      },
      {
        id: 2,
        name: "Ethereum",
        coin: "ETH",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: true,
        decrease_week: false,
        decrease_chart: false,
        image: require("@/assets/images/icons/ethereum.svg"),
      },

      {
        id: 3,
        name: "Tether",
        coin: "USDT",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: false,
        decrease_week: true,
        decrease_chart: true,
        image: require("@/assets/images/icons/tether.svg"),
      },
      {
        id: 4,
        name: "Binance",
        coin: "BNB",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: false,
        decrease_week: false,
        decrease_chart: false,
        image: require("@/assets/images/icons/binance.svg"),
      },
      {
        id: 5,
        name: "Cardano",
        coin: "ADA",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: false,
        decrease_week: true,
        decrease_chart: true,
        image: require("@/assets/images/icons/cadanore.svg"),
      },
      {
        id: 6,
        name: "XRP",
        coin: "XRP",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: false,
        decrease_week: false,
        decrease_chart: true,
        image: require("@/assets/images/icons/XRP.svg"),
      },
      {
        id: 7,
        name: "Dogecoin",
        coin: "DOGE",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: true,
        decrease_week: false,
        decrease_chart: false,

        image: require("@/assets/images/icons/dogecoin.svg"),
      },
      {
        id: 8,
        name: "USD Coin",
        coin: "USDC",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: true,
        decrease_week: false,
        decrease_chart: true,
        image: require("@/assets/images/icons/USDCoin.svg"),
      },
      {
        id: 9,
        name: "Polkadot",
        coin: "DOT",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: true,
        decrease_week: false,
        decrease_chart: false,
        image: require("@/assets/images/icons/polkadot.svg"),
      },
      {
        id: 10,
        name: "Uniswap",
        coin: "UNI",
        price: " $45,381.16",
        date: "0.25%",
        week: "0.25%",
        market: "$855,819,400,358",
        volume: "$37,150,704,561",
        base: "815,310 BTC",
        supply: "18,781,825 BTC",
        diagram: "1111111111111111111111",
        decrease_date: false,
        decrease_week: false,
        decrease_date: true,
        decrease_week: false,
        decrease_chart: true,
        image: require("@/assets/images/icons/unixwap.svg"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.market {
  margin-top: 60px;
  color: $black-text-03;
  padding: 0 6%;
  .market_title {
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .content {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 40px;
    .highlight {
      color: $green-black-01;
      margin: 0 3px;
    }
  }
}
.vs-table {
  tr th {
    background-color: transparent;
    font-size: 18px;
    font-weight: 700;
  }
  tr td {
    font-weight: 500;
    font-size: 16px;
  }
  tr td:first-child {
    font-weight: 700;
    #coin {
      font-weight: 500;
      color: $black-text-05;
    }
    img {
      margin-right: 5px;
    }
  }
  tr td:nth-child(6) {
    #coin {
      font-weight: 500;
      color: $black-text-05;
      margin-left: 16px;
    }
  }
  tr td:nth-child(3) {
    color: $green-text-01;
  }
  tr td:nth-child(4) {
    color: $green-text-01;
  }
  tr td:nth-child(8) {
    .chart {
      width: 250px !important;
    }
  }
  .adjust {
    color: $red-text-01 !important;
  }
}
</style>
