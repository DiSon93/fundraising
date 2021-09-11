<template>
  <div class="landingpage_form">
    <div class="form">
      <div class="title">Register</div>
      <div class="round">Round 1</div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis
        congue vulputate pellentesque elit sed lectus felis sed. Sed a eu tempus viverra
        et ornare varius. Duis at nisi, erat sit. Vestibulum cursus eget et at ultricies
        eu posuere erat arcu.
      </div>
      <div class="share_social">
        <a-row :gutter="32">
          <a-col :span="12">
            <div class="social">
              <a-input
                placeholder="https://coinpad.io/hhl3434dkjf"
                size="large"
                @search="onSearch"
              >
              </a-input>
              <a-button>
                <img src="@image/icons/fa.svg" alt="" /> Share to Facebook
              </a-button>
            </div>
          </a-col>
          <a-col :span="12">
            <a-input placeholder="Insert your link" size="large" />
          </a-col>
        </a-row>
        <a-row :gutter="32">
          <a-col :span="12">
            <div class="social">
              <a-input
                placeholder="https://coinpad.io/hhl3434dkjf"
                size="large"
                @search="onSearch"
              >
              </a-input>
              <a-button
                ><img src="@image/icons/twitter.svg" alt="" /> Share to Twitter
              </a-button>
            </div>
          </a-col>
          <a-col :span="12">
            <a-input placeholder="Insert your link" size="large" />
          </a-col>
        </a-row>
        <a-row :gutter="32">
          <a-col :span="12">
            <div class="social">
              <a-input
                placeholder="https://coinpad.io/hhl3434dkjf"
                size="large"
                @search="onSearch"
              >
              </a-input>
              <a-button
                ><img src="@image/icons/tele.svg" alt="" /> Share to Telegram
              </a-button>
            </div>
          </a-col>
          <a-col :span="12">
            <a-input placeholder="Insert your link" size="large" />
          </a-col>
        </a-row>
      </div>
      <div class="round">Round 2</div>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis
        congue vulputate pellentesque elit sed lectus felis sed. Sed a eu tempus viverra
        et ornare varius. Duis at nisi, erat sit. Vestibulum cursus eget et at ultricies
        eu posuere erat arcu.
      </div>
      <div class="text">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ullamcorper sit
          lacus eget interdum maecenas magna suspendisse.
        </div>
        <a-input placeholder="Text" size="large" />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ullamcorper sit
          lacus eget interdum maecenas magna suspendisse.
        </div>
        <a-input placeholder="Text" size="large" />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo ullamcorper sit
          lacus eget interdum maecenas magna suspendisse.
        </div>
        <a-input placeholder="Text" size="large" />
        <div class="choice">
          <a-radio :style="radioStyle" :radio="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus habitant
            pellentesque vulputate molestie aliquet lorem mi.
          </a-radio>
        </div>
      </div>
      <vs-button
        class="btn_started"
        color="rgb(59,222,200)"
        @click="$router.push('/landingpage/incoming-submit')"
      >
        Submit
      </vs-button>
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
    radio: 0,
  }),
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.landingpage_form {
  padding: 20px 10%;

  .form {
    background: rgba(251, 251, 251, 0.93);
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    padding: 20px;
    .title {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      color: $green-black-01;
    }
    .round {
      color: $green-black-01;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      margin: 20px;
    }
    .content,
    .share_social {
      margin: 0 40px;
    }
    .content {
      text-align: justify;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: $green-black-01;
      margin-bottom: 10px;
    }
    .btn_started {
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 50px;
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      padding: 2px 24px;
      margin: 30px auto;
    }
    .text {
      margin: 20px 40px;
      text-align: justify;
      font-size: 16px;
      .choice {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
    }
  }
}
</style>
