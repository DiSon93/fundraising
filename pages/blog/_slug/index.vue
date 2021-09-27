<template>
  <div class="blog_detail">
    <a-row :gutter="32">
      <a-col :xs="24" :sm="16" class="main_content" v-if="blogDetailRender.length != 0">
        <div class="quote">2018 Ford Mustang GT/EcoBoost</div>
        <div class="blog_title"></div>
        <div class="users">
          <img src="@image/icons/blog_avatar.svg" alt="" />
          <div class="username">
            <div class="name">
              {{ blogDetailRender.user ? blogDetailRender.user.username : null }}
            </div>
            <div class="time">{{ blogDetailRender.created_at }}</div>
          </div>
        </div>
        <div class="content" v-html="blogDetailRender.content"></div>
      </a-col>
      <a-col :xs="24" :sm="8">
        <RecentNews />
        <NewsCategories />
      </a-col>
    </a-row>

    <div></div>
  </div>
</template>

<script>
import RecentNews from "@component/Blog/RecentNews.vue";
import NewsCategories from "@component/Blog/NewsCategories.vue";
import { mapState, mapActions } from "vuex";
import moment from "moment";
export default {
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  components: {
    RecentNews,
    NewsCategories,
  },
  data() {
    return {
      blogDetailRender: {},
    };
  },
  mounted() {
    this.getParams();
  },
  computed: {
    ...mapState("blogs", ["blogDetail"]),
  },
  methods: {
    getParams() {
      const getIdOfBlog = this.$route.params.slug.split("-");
      const _id = getIdOfBlog[0];
      this.getBlogDetail(_id);
    },
    async getBlogDetail(_id) {
      try {
        await this.$store.dispatch("blogs/getBlogDetail", _id);
        console.log("blogDetail", this.blogDetail);
        this.blogDetailRender = {
          ...this.blogDetail,
          created_at: moment(this.blogDetail.created_at).format("LLL"),
        };
      } catch {}
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.blog_detail {
  padding: 0 5%;
  margin-top: 20px;
  .main_content {
    .quote {
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 10px;
      line-height: 16px;
      color: $black-text-04;
      margin-bottom: 10px;
    }
    .blog_title {
      font-weight: bold;
      font-size: 34px;
      line-height: 41px;
      display: flex;
      align-items: center;
      letter-spacing: 0.25px;
      margin-bottom: 20px;
    }
    .users {
      display: flex;
      margin-bottom: 15px;
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .username {
        margin: auto 0;
        .name {
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.25px;
        }
        .time {
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.4px;
          color: $black-text-04;
        }
      }
    }
    .content {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      text-align: justify;
      letter-spacing: 0.1px;
      margin-bottom: 20px;
      .link {
        color: $green-black-01;
        font-weight: 700;
      }
    }
    .photos {
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      margin-top: 10px;
      margin-bottom: 20px;
      letter-spacing: 0.1px;
      img {
        width: 100%;
        margin-top: 10px;
      }
      .explains {
        margin-top: 10px;
        display: flex;
        .left {
          width: 70%;
        }
        .right {
          width: 30%;
          text-align: right;
        }
      }
    }
    .highlight {
      font-size: 20px;
      line-height: 30px;
    }
    .claim {
      display: flex;
      font-weight: bold;
      font-size: 24px;
      line-height: 132%;
      margin: 40px 0;
      img {
        margin-right: 30px;
      }
      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
