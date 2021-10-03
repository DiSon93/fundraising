<template>
  <a-row>
    <a-col :xs="24" :sm="12">
      <div>
        <span class="label">Your Name:</span> <span class="name">
          {{ [currentUser.firstname, currentUser.lastname].join(' ') }}
        </span>
      </div>
      <div>
        <span class="label">Your Email:</span>
        <span class="detail">{{ currentUser.email }}</span>
      </div>
      <div>
        <span class="label">Your Phone:</span> <span class="detail">{{ currentUser.phone_number }}</span>
      </div>
    </a-col>
    <a-col :xs="24" :sm="12">
      <div>
        <span class="label">Login Last:</span>
        <span class="name">{{ [currentUser.last_login_at, currentUser.last_ip_address].join(' | ') }}</span>
      </div>
      <div>
        <span class="label">Your Password:</span>
        <span class="detail"><i>Has been changed for a week</i> </span>
      </div>
    </a-col>
  </a-row>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {

    computed: {
      ...mapState("auth", ["currentUser"]),
    }
  }
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
