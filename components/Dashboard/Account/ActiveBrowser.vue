<template>
  <div class="rewartsTable">
    <div class="title">Active browser sessions</div>
    <div class="quote">
      These browsers are currently signed in to your account.
      <a href="javascript:;">Sign out all other sessions »</a>
    </div>
    <vs-table>
      <template #thead>
        <vs-tr>
          <vs-th> Time </vs-th>
          <vs-th> Location </vs-th>
          <vs-th> IP address </vs-th>
          <vs-th> Browser </vs-th>
          <vs-th> Status </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in tokens">
          <vs-td>
            {{ tr.time }}
          </vs-td>
          <vs-td>
            {{ tr.location }}
          </vs-td>
          <vs-td>
            {{ tr.address }}
          </vs-td>
          <vs-td>
            {{ tr.browser }}
          </vs-td>
          <vs-td>
            <img src="@image/icons/right.svg" alt="" v-if="tr.status == 'active'" />
            <img src="@image/icons/wrong.svg" alt="" v-else />
          </vs-td>
        </vs-tr>
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
        location: "Vũng Tàu, Vietnam",
        status: "active",
        address: "1.53.48.32",
        browser: "Chrome (Windows)",
      },
      {
        id: 2,
        time: "05/05/2021 15:50:20",
        location: "Ho Chi Minh City",
        status: "unactive",
        address: "14.186.111.208",
        browser: "Chrome (Windows)",
      },
      {
        id: 3,
        time: "05/05/2021 15:50:20",
        location: "Da Nang, Vietnam",
        status: "unactive",
        address: "1.53.48.32",
        browser: "Chrome (Windows)",
      },
      {
        id: 4,
        time: "05/05/2021 15:50:20",
        location: "Vũng Tàu, Vietnam",
        status: "unactive",
        address: "45.119.81.225",
        browser: "Chrome (Windows)",
      },
      {
        id: 5,
        time: "05/05/2021 15:50:20",
        location: "Vũng Tàu, Vietnam",
        status: "unactive",
        address: "1.53.48.32",
        browser: "Chrome (Windows)",
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
  margin: 30px 10%;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin: 10px 0 20px;
  }
  .quote {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 20px;
    a {
      color: $green-black-01;
    }
  }
}
.paginator {
  background-color: $white-text-01;
}
</style>
