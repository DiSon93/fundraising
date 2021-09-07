<template>
  <div class="recent_news">
    <div class="title">Recent News</div>
    <div class="recent_item">
      <img src="@image/layouts/recent_news_01.svg" alt="" />
      <div class="right">
        <div class="name">Duis irure et Lorem qui magna ullamco et.</div>
        <div class="times">October 27, 2015 12:08 PM</div>
      </div>
    </div>
    <div class="recent_item">
      <img src="@image/layouts/recent_news_02.svg" alt="" />
      <div class="right">
        <div class="name">
          Id esse culpa ex proident est non eu cillum exercitation minim tempor.
        </div>
        <div class="times">October 20, 2015 09:32 PM</div>
      </div>
    </div>
    <div class="recent_item">
      <img src="@image/layouts/recent_news_03.svg" alt="" />
      <div class="right">
        <div class="name">Ad adipisicing excepteur labore nisi aute irure.</div>
        <div class="times">November 17, 2015 12:19 PM</div>
      </div>
    </div>
    <div class="recent_item">
      <img src="@image/layouts/recent_news_04.svg" alt="" />
      <div class="right">
        <div class="name">
          Tempor fugiat sit qui veniam cupidatat cupidatat aliquip aute nostrud dolor.
        </div>
        <div class="times">October 27, 2015 12:08 PM</div>
      </div>
    </div>
    <div class="recent_item">
      <img src="@image/layouts/recent_news_05.svg" alt="" />
      <div class="right">
        <div class="name">Esse quis consequat do enim duis laboris irure quis.</div>
        <div class="times">December 24, 2015 11:08 PM</div>
      </div>
    </div>
    <vs-button class="btn_started" color="rgb(59,222,200)"> View All </vs-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.recent_news {
  padding: 30px 20px;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  margin-bottom: 30px;
  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 132%;
    color: $green-black-01;
    margin-bottom: 20px;
  }
  .recent_item {
    display: flex;
    margin-bottom: 30px;
    img {
      width: 156px;
      height: 128px;
      margin-right: 20px;
    }
    .right {
      margin: auto 0;
      .name {
        font-weight: normal;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        display: flex;
        align-items: center;
        letter-spacing: 0.25px;
        margin-bottom: 15px;
      }
      .times {
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: $black-text-04;
      }
    }
  }
  .btn_started {
    background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
    border-radius: 50px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    padding: 0 16px;
    margin: 0 auto;
  }
}
</style>
