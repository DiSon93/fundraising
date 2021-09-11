<template>
  <a-row>
    <a-col :xs="24" :sm="12">
      <div>
        <span class="label">Your Name:</span> <span class="name">Jonny Nguyen</span>
      </div>
      <div>
        <span class="label">Your Email:</span>
        <span class="detail">Jon...n@gmail.com</span>
      </div>
      <div>
        <span class="label">Your Phone:</span> <span class="detail">010...446</span>
      </div>
    </a-col>
    <a-col :xs="24" :sm="12">
      <div>
        <span class="label">Login Last:</span>
        <span class="name">02/05/2021 - 12:30:45 | 125.125.12.12</span>
      </div>
      <div>
        <span class="label">Your Password:</span>
        <span class="detail"><i>Has been changed for a week</i> </span>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
// .personal_info {
.label {
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  color: $black-text-04;
  margin-right: 10px;
  margin-bottom: 6px;
}
.name {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: $green-black-01;
}
.detail {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: $black-text-04;
}
// }
</style>
