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
          <vs-button class="btn_support" color="#BDBDBD" disabled>
            New Support Ticket
          </vs-button>
        </a-col>
        <a-col :xs="12" :sm="6">
          <vs-button
            class="btn_check"
            color="#0b9985"
            @click="$router.push('/help/check-ticket')"
          >
            Check Ticket Status</vs-button
          >
        </a-col>
      </a-row>
    </div>
    <div class="submit">
      <div class="title">Submit a ticket</div>
      <a-form :form="form" @submit="handleSubmit">
        <a-row :gutter="16">
          <a-col :xs="24" :sm="12">
            <a-form-item>
              <a-input
                placeholder="Email Requester *"
                v-decorator="[
                  'email',
                  {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your Email Requester!',
                      },
                    ],
                    validateTrigger: 'blur',
                  },
                ]"
              />
            </a-form-item>
          </a-col>
          <a-col :xs="24" :sm="12">
            <a-form-item>
              <!-- <a-input
                placeholder="Issue Type *"
                v-decorator="[
                  'last_name',
                  {
                    rules: [{ required: true, message: 'Please input your Issue Type!' }],
                  },
                ]"
              /> -->
              <a-select
                show-search
                option-filter-prop="children"
                placeholder="Issue Type *"
                @change="handleChangeType"
              >
                <a-select-option value="wallet"> Wallet </a-select-option>
                <a-select-option value="account"> Account </a-select-option>
                <a-select-option value="audit"> Audit </a-select-option>
                <a-select-option value="see"> Coinpad see </a-select-option>
                <a-select-option value="pro"> Coinpad Pro </a-select-option>
                <a-select-option value="other"> Other </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-form-item>
          <a-input
            placeholder="Subject *"
            v-decorator="[
              'subject',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Subject!',
                  },
                ],
              },
            ]"
          />
        </a-form-item>
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
      position: relative;

      .btn_attach {
        border: none;
        box-shadow: none;
        color: $green-black-01;
      }
      .btn_submit {
        position: absolute;
        display: flex;
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
}
</style>
