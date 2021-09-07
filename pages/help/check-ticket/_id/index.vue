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
      <div class="tilte">Check Ticket Status</div>
      <div class="message">
        <div class="name">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div class="info">Create: <span class="detail">04/04/2021</span></div>
        <div class="info">Issue Type: <span class="detail">Account</span></div>
      </div>
      <a-divider />
      <div class="mess">
        <div class="text_mess">
          <div class="message_content">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="time">04/04/2021</div>
          </div>
          <div class="image">
            <img src="@image/layouts/check-ticket.svg" alt="" />
            <div class="time">04/04/2021</div>
          </div>
        </div>
        <div class="text_mess_02">
          <div class="message_content">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="time">04/04/2021</div>
          </div>
        </div>
        <div class="text_mess">
          <div class="message_content">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="time">04/04/2021</div>
          </div>
        </div>
      </div>
      <a-divider />
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-textarea
            placeholder="Description * "
            allow-clear
            v-decorator="[
              'description',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input description of yours',
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item>
          <a-upload
            name="file"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :headers="headers"
            @change="handleChange"
          >
            <a-button class="btn_attach">
              <a-icon type="plus-circle" /> Attach a file
            </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item class="form_submit">
          <a-row>
            <a-col :xs="24" :sm="12">
              <div class="form_submit">
                <div
                  class="g-recaptcha"
                  data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                ></div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="12">
              <div class="btn_submit">
                <vs-button class="btn_send" color="#0B9985"> Send Ticket </vs-button>
                <vs-button class="btn_cancel" color="#BDBDBD"> Cancel </vs-button>
              </div>
            </a-col>
          </a-row>
        </a-form-item>
      </a-form>
    </div>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
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
  }
  .contents {
    padding: 30px;
    margin-top: 30px;
    background: rgba(251, 251, 251, 0.93);
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    .tilte {
      font-weight: bold;
      font-size: 36px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 30px;
    }
    .message {
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
    .mess {
      padding: 60px 0;
      .text_mess {
        text-align: right;
      }
      .text_mess_02 {
        .message_content {
          margin-left: 0 !important;
          margin-bottom: 20px !important;
          text-align: left;
          background: $background-green;
        }
      }
    }

    .message_content {
      margin: 0 0 0 auto !important;
      background: $background-grey;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      padding: 20px 20px 10px;
      text-align: right;
      width: 760px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      .time {
        text-align: left;
        color: $black-text-05;
        font-size: 13px;
        line-height: 24px;
      }
    }
    .image {
      background: $background-grey;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      padding: 10px 20px 10px;
      margin: 20px 0 20px auto !important;
      width: 245px;
      .time {
        text-align: left;
        color: $black-text-05;
        font-size: 13px;
        line-height: 24px;
      }
    }
  }
  .ant-form {
    position: relative;
    .btn_attach {
      border: none;
      box-shadow: none;
      color: $green-black-01;
    }
    .btn_submit {
      position: absolute;
      bottom: -70px;
      right: 0;
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
</style>
