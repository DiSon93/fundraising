<template>
  <div class="newProject">
    <div class="title">Project</div>
    <div class="main_content">
      <img src="@image/layouts/project_01.svg" alt="" />
      <div class="heading">
        Away’s Expandable Suitcases Are Here – The Most Spacious Bags Yet
      </div>
      <div class="time">September 16, 2014 8:21 PM</div>
    </div>
    <a-row :gutter="32">
      <a-col :span="12">
        <div class="small_content">
          <img src="@image/layouts/project_02.svg" alt="" />
          <div class="heading">
            Business Travelers Actually Like Trips More Than 9to5 Office Life
          </div>
          <div class="time">September 16, 2014 8:21 PM</div>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="small_content">
          <img src="@image/layouts/project_03.svg" alt="" />
          <div class="heading">
            Disney Is Bringing Even More Magic to Its New Cruise Ship This Year
          </div>
          <div class="time">September 16, 2014 8:21 PM</div>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="small_content">
          <img src="@image/layouts/project_04.svg" alt="" />
          <div class="heading">
            How to Enjoy Eating by Yourself As a Solo Traveler On Your Holiday
          </div>
          <div class="time">September 16, 2014 8:21 PM</div>
        </div>
      </a-col>
      <a-col :span="12">
        <div class="small_content">
          <img src="@image/layouts/project_05.svg" alt="" />
          <div class="heading">
            20 Green Destinations Where You Can Have an Eco-friendly Vacation
          </div>
          <div class="time">September 16, 2014 8:21 PM</div>
        </div>
      </a-col>
    </a-row>
    <vs-button class="btn_started" color="rgb(59,222,200)"> View All </vs-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.newProject {
  margin-top: 30px;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 132%;
    color: $green-black-01;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
  }
  .main_content {
    .heading {
      font-weight: bold;
      font-size: 24px;
      line-height: 132%;
      margin: 10px 0 5px;
    }
    .time {
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.4px;
      color: $grey-black-02;
    }
    margin-bottom: 20px;
  }
  .small_content {
    .heading {
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.25px;
      margin: 10px 0px 5px;
    }
    .time {
      font-size: 13px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.4px;
      color: $grey-black-02;
    }
    margin-bottom: 20px;
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
