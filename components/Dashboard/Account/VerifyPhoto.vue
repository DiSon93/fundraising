<template>
  <div class="identity_verify">
    <div class="title">Verify Your Identity</div>
    <div class="content">
      <div class="proccess">
        <a-steps :current="3">
          <a-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
            <template slot="content">
              <span>Step {{ index }} Status: {{ status }}</span>
            </template>
            <span :class="`${prefixCls}-icon-dot`" />
          </a-popover>
          <a-step title="Start" />
          <a-step title="Resident" />
          <a-step title="Identity" />
          <a-step title="Photo" />
          <a-step title="Security " />
          <a-step title="Status" />
        </a-steps>
      </div>
      <div class="verifying">About ahig</div>
      <div class="quote">
        <div>
          - We Will Require Your Government Issued Passport In Order To Further Assist
          With Our Verifcation Process.
        </div>
        <div>
          - Failure To Meet One Of The Requirements Listed Below Will Lead To Rejection Of
          Your Application.
        </div>
        <div>- Upload A Clear Image Of Your Passport To Each Category</div>
        <div>-Acceptable Formats: JPG, JPEG, PNG & Maximum Size: 10 MB</div>
      </div>
      <div class="dragger">
        <a-form :form="form" @submit="handleSubmit">
          <a-row :gutter="24">
            <a-col :xs="24" :sm="12">
              <div class="items_upload">
                <div class="upload">
                  <a-form-item>
                    <a-upload
                      name="avatar"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      :before-upload="beforeUpload"
                      @change="handleChange"
                    >
                      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                      <div v-else class="nonImage">
                        <a-icon :type="loading ? 'loading' : 'plus'" v-if="loading" />
                        <img src="@image/icons/dragger_01.svg" alt="" />
                      </div>
                    </a-upload>
                  </a-form-item>
                </div>
                <div class="info">
                  <div class="name">Back of identity card</div>
                  <ul>
                    <li>No modification</li>
                    <li>Full image of the passport front cover</li>
                    <li>Visible image</li>
                  </ul>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="12">
              <div class="items_upload">
                <div class="upload">
                  <a-form-item>
                    <a-upload
                      name="avatar"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      :before-upload="beforeUpload"
                      @change="handleChange"
                    >
                      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                      <div v-else class="nonImage">
                        <a-icon :type="loading ? 'loading' : 'plus'" v-if="loading" />
                        <img src="@image/icons/dragger_02.svg" alt="" />
                      </div>
                    </a-upload>
                  </a-form-item>
                </div>
                <div class="info">
                  <div class="name">Front of identity card</div>
                  <ul>
                    <li>No modification</li>
                    <li>Full image of the passport front cover</li>
                    <li>Visible image</li>
                  </ul>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="24">
              <div class="items_upload">
                <div class="upload">
                  <a-form-item>
                    <a-upload
                      name="avatar"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      :before-upload="beforeUpload"
                      @change="handleChange"
                    >
                      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                      <div v-else class="nonImage">
                        <a-icon :type="loading ? 'loading' : 'plus'" v-if="loading" />
                        <img src="@image/icons/dragger_01.svg" alt="" />
                      </div>
                    </a-upload>
                  </a-form-item>
                </div>
                <div class="info">
                  <div class="name">Selfie</div>
                  <div class="note">
                    <ul>
                      <li>No modification</li>
                      <li>The full face must be visible</li>
                      <li>The passport page showing details must be readable.</li>
                    </ul>
                    <ul>
                      <li>
                        Note must include the word "Get to KNOW me" and the current date
                        in handwriting
                      </li>
                      <li>The selfie must be clear & not blurry</li>
                      <li>Your fingers aren’t covering any text.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <vs-button class="btn_started" color="rgb(59,222,200)" @click="continueFunc">
        Continue
      </vs-button>
    </div>
  </div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  data() {
    return {
      loading: false,
      imageUrl: "",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "verifyPhoto" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    continueFunc() {
      this.$emit("continue");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.identity_verify {
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  padding: 30px;
  margin: 0 50px;
  .title {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: $green-black-01;
    margin-bottom: 25px;
  }
  .content {
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px 50px;
    .proccess {
      margin-bottom: 20px;
    }
    .verifying {
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }
    .quote {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: justify;
      a {
        color: $green-black-01;
      }
    }
    .entity {
      margin-top: 80px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .list {
      margin-left: 30px;
    }
    .btn_started {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 20px;
      padding: 0 12px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
}
.dragger {
  margin-top: 30px;
  .items_upload {
    display: flex;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    .upload {
      height: 130px;
    }
    .info {
      margin-left: 10px;
      .name {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: $green-black-01;
        margin-bottom: 10px;
      }
      ul li {
        margin-left: 20px;
        margin-right: 20px;
      }
      .note {
        display: flex;
      }
    }
  }
}
</style>
