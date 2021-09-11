<template>
  <div class="rewarts">
    <Refer />
    <RewartsTable />
    <Ranking />
    <div class="banner">
      <div>Banner</div>
      <div>765 x 180</div>
    </div>
  </div>
</template>

<script>
import Refer from "@component/Dashboard/Rewarts/Refer";
import RewartsTable from "@component/Dashboard/Rewarts/RewartsTable";
import Ranking from "@component/Dashboard/Rewarts/Ranking";

export default {
  layout: "dashboard",
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  components: {
    Refer,
    RewartsTable,
    Ranking,
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.rewarts {
  padding: 10px 10%;
  .banner {
    margin-top: 30px;
    height: 180px;
    width: 100%;
    background: #c4c4c4;
    border: 1px solid #000000;
    box-sizing: border-box;
    font-style: normal;
    font-weight: bold;
    font-size: 36.0205px;
    line-height: 54px;
    color: $grey-white;
    text-align: center;
    padding-top: 3.5%;
  }
}
</style>
