<template>
  <div class="help submit_ticket">
    <div class="heading">
      <a-row :gutter="32">
        <a-col :xs="24" :sm="12">
          <div class="search">
            <a-input-search
              placeholder="Enter your search term here"
              style="width: 33%"
              @search="onSearch"
            />
          </div>
        </a-col>
        <a-col :xs="12" :sm="6">
          <vs-button
            class="btn_support"
            color="#0b9985"
            @click="$router.push('/help/submit-ticket')"
          >
            New Support Ticket
          </vs-button>
        </a-col>
        <a-col :xs="12" :sm="6">
          <vs-button class="btn_check" color="#BDBDBD" disabled>
            Check Ticket Status</vs-button
          >
        </a-col>
      </a-row>
    </div>
    <div class="contents">
      <a-badge :count="99" :number-style="{ backgroundColor: '#52c41a' }">
        <div class="message">
          <NuxtLink to="/help/check-ticket/1">
            <div class="name">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </div>
            <div class="info">Create: <span class="detail">04/04/2021</span></div>
            <div class="info">Issue Type: <span class="detail">Account</span></div>
          </NuxtLink>
        </div>
      </a-badge>
      <div class="message_empty message">
        <NuxtLink to="/help/check-ticket/1">
          <div class="name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
          <div class="info">Create: <span class="detail">04/04/2021</span></div>
          <div class="info">Issue Type: <span class="detail">Account</span></div>
        </NuxtLink>
      </div>
      <div class="message_empty message">
        <NuxtLink to="/help/check-ticket/1">
          <div class="name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
          <div class="info">Create: <span class="detail">04/04/2021</span></div>
          <div class="info">Issue Type: <span class="detail">Account</span></div>
        </NuxtLink>
      </div>
      <div class="message_empty message">
        <NuxtLink to="/help/check-ticket/1">
          <div class="name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
          <div class="info">Create: <span class="detail">04/04/2021</span></div>
          <div class="info">Issue Type: <span class="detail">Account</span></div>
        </NuxtLink>
      </div>
      <div class="message_empty message">
        <NuxtLink to="/help/check-ticket/1">
          <div class="name">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
          <div class="info">Create: <span class="detail">04/04/2021</span></div>
          <div class="info">Issue Type: <span class="detail">Account</span></div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  data: () => ({
    input: "",
    headers: {
      authorization: "authorization-text",
    },
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "submit-ticket" });
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handleChangeType(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.help {
  margin: 0 10%;
  margin-top: 20px;
  .heading {
    padding: 20px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    background: $background-grey;
  }
  .search {
    width: 100%;
  }
  .btn_check,
  .btn_support {
    border-radius: 50px;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    padding: 4px 12px;
    width: 100%;
  }
  .btn_check {
    margin-left: 10px;
  }
  .submit {
    margin-top: 30px;
    background: $background-grey;
    padding: 30px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    .title {
      font-weight: bold;
      font-size: 36px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 50px;
    }
    .ant-form {
      .btn_attach {
        border: none;
        box-shadow: none;
        color: $green-black-01;
      }
      .btn_submit {
        display: flex;
        .btn_send,
        .btn_cancel {
          border-radius: 50px;
          font-weight: bold;
          font-size: 24px;
          line-height: 24px;
          padding: 4px 20px;
          margin-top: 30px;
        }
        .btn_cancel {
          margin-left: 20px !important;
        }
      }
    }
  }
  .contents {
    margin-top: 50px;
    .ant-badge {
      width: 100%;
    }
    .message {
      background: #ecfff4;
      border: 1px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 20px 60px;
      margin-bottom: 20px;
      .name {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: $green-black-01;
      }
      .info {
        color: $grey-black-03;
        line-height: 24px;
        font-weight: 700;
        .detail {
          font-weight: 400;
        }
      }
    }
    .message_empty {
      background: $white-text-01;
      .name {
        color: $black-text-03;
      }
    }
  }
}
</style>
