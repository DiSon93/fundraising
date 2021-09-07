<template>
  <div class="categories">
    <div class="cate_title">Categories</div>
    <a-table
      :columns="columns"
      :data-source="data"
      :expanded-row-keys.sync="expandedRowKeys"
      :pagination="pagi"
    >
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    width: "16%",
  },
];

const data = [
  {
    key: 1,
    name: "Blog",
    amount: 24,
    children: [
      {
        key: 11,
        name: "Coinpad",
        amount: 8,
      },
    ],
  },
  {
    key: 2,
    name: "Project",
    amount: 54,
    children: [
      {
        key: 12,
        name: "Coinpad",
        amount: 8,
      },
      {
        key: 13,
        name: "Coinpad",
        amount: 8,
      },
      {
        key: 14,
        name: "Coinpad",
        amount: 12,
      },
    ],
  },
];
export default {
  data() {
    return {
      data,
      columns,
      expandedRowKeys: [1, 2],
      pagi: false,
    };
  },
  watch: {
    expandedRowKeys: function () {
      console.log(this.expandedRowKeys);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.categories {
  // padding-left: 20px;
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 20px 40px;
  .cate_title {
    font-weight: bold;
    font-size: 24px;
    line-height: 132%;
    color: $green-black-01;
    margin-bottom: 10px;
  }
}
</style>
