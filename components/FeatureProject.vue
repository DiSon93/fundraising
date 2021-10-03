<template>
  <div class="feature">
    <a-row>
      <a-col :span="6" class="list">
        <div><a href="javascript:;">Feature & Technology </a></div>
        <div><a href="javascript:;">Team </a></div>
        <div><a href="javascript:;">Tokenomics </a></div>
        <div><a href="javascript:;"> Backers , Partner & Ecosystem </a></div>
        <div><a href="javascript:;"> About </a></div>
        <div><a href="javascript:;"> Documents,Video & More details </a></div>
      </a-col>
      <a-col :span="18" class="content">
        <div class="title">Feature</div>
        <img src="@image/layouts/feature.svg" alt="" />
        <div class="title">Team</div>
        <img src="@image/layouts/team.svg" alt="" />
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img src="@image/layouts/team_02.svg" alt="" />
      </a-col>
    </a-row>
    <a-divider></a-divider>
    <div class="social_media">
      <div class="app">
        <span>Share Now:</span>
        <img src="@image/icons/fa.svg" alt="" />
        <img src="@image/icons/twitter.svg" alt="" />
        <img src="@image/icons/E-mail.svg" alt="" />
        <img src="@image/icons/tele.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "@asset/variables.scss";
  .feature {
    margin-top: 30px;
    background: rgba(251, 251, 251, 0.93);
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    padding: 30px 20px;
    width: 101.2%;
    .list {
      display: block;
      margin-top: 30px;
      a {
        color: $green-black-01;
        font-weight: bold;
        font-size: 18px;
        line-height: 47px;
      }
    }
    .content {
      .title {
        font-weight: bold;
        font-size: 36px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 20px;
        color: $green-black-01;
      }
      img {
        margin-bottom: 20px;
        width: 100%;
      }
      .text {
        margin-bottom: 20px;
        text-align: justify;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: $green-black-01;
      }
    }
    .social_media {
      display: flex;
      justify-content: right;

      .app {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        img {
          margin-left: 20px;
          width: 54px;
          height: 54px;
        }
      }
    }
  }
</style>
