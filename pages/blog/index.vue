<template>
  <transition name="home" mode="out-in">
    <div class="blog">
      <a-row class="carousel">
        <a-col :xs="24" :sm="16">
          <NuxtLink to="/blog/1">
            <div class="large_background">
              <a-row>
                <a-col :xs="24" :sm="16" class="main_content">
                  <div class="position">
                    <div class="review">
                      <vs-button class="btn_started" color="rgb(59,222,200)">
                        Review
                      </vs-button>
                    </div>
                    <div class="title">
                      <div>2020 Lincoln Aviator: Luxury done right</div>
                    </div>
                    <div class="quote">
                      <div class="name">By Mitchell Cooper / Annette Robertson</div>
                      <div class="time">|</div>
                      <div class="time">November 26, 2018 9:19 AM</div>
                    </div>
                    <div class="content">
                      Smooth, quiet and unintimidating, the 2020 Lincoln Aviator is
                      spearheading a renaissance at Lincoln, a comeback that's, oddly
                      enough, rooted in the brand's past.
                    </div>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="8" class="community">
                  <div class="social">
                    <div class="comment">
                      <img src="@image/icons/comment.svg" alt="" />
                      <span>248</span>
                    </div>
                    <div>
                      <img src="@image/icons/eyes.svg" alt="" />
                      <span>659</span>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </div>
          </NuxtLink>
        </a-col>
        <a-col :xs="24" :sm="8">
          <div class="small_background_01">
            <a-row>
              <a-col :xs="24" :sm="16" class="main_content">
                <div class="position">
                  <div class="title">
                    <div class="small">First Drive: 2020 Jeep Wrangler EcoDiesel</div>
                  </div>
                  <div class="quote">
                    <div class="name">By Jennie Black |</div>
                    <div class="time">November 26, 2018 9:19 AM</div>
                  </div>
                </div>
              </a-col>
              <a-col :xs="24" :sm="8" class="community"> </a-col>
            </a-row>
          </div>
          <div class="small_background_02">
            <a-row>
              <a-col :xs="24" :sm="16" class="main_content">
                <div class="position">
                  <div class="title">
                    <div class="small">First Drive: 2020 Jeep Wrangler EcoDiesel</div>
                  </div>
                  <div class="quote">
                    <div class="name">By Jennie Black |</div>
                    <div class="time">November 26, 2018 9:19 AM</div>
                  </div>
                </div>
              </a-col>
              <a-col :xs="24" :sm="8" class="community"> </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
      <a-row class="news" :gutter="32">
        <div class="news_title">Latest News</div>
        <a-col :xs="24" :sm="15">
          <div class="news_item">
            <!-- <a href="javascript:;"> -->
            <img src="@image/layouts/news_01.svg" alt="" />
            <!-- </a> -->
            <div class="item">
              <NuxtLink to="/blog/1" class="title">
                Et non incididunt ex sit pariatur labore do culpa excepteur.
              </NuxtLink>
              <div class="quote">
                <div>By Jennie Black</div>
                <div class="time">|</div>
                <div class="time">November 26, 2018 9:19 AM</div>
              </div>
              <div class="content">
                The software giant says it built the new technology for its corporate
                customers, but it could also someday end.
              </div>
              <a href="javascript:;" @click="$router.push('/blog/1')">Continue Reading</a>
            </div>
          </div>
          <div class="news_item">
            <img src="@image/layouts/news_02.svg" alt="" />
            <div class="item">
              <NuxtLink to="/blog/1" class="title">
                Deserunt ad fugiat irure excepteur consequat est officia sint.
              </NuxtLink>
              <div class="quote">
                <div>By Jennie Black</div>
                <div class="time">|</div>
                <div class="time">November 26, 2018 9:19 AM</div>
              </div>
              <div class="content">
                The software giant says it built the new technology for its corporate
                customers, but it could also someday end.
              </div>
              <a href="javascript:;" @click="$router.push('/blog/1')">Continue Reading</a>
            </div>
          </div>
          <div class="news_item">
            <img src="@image/layouts/news_03.svg" alt="" />
            <NuxtLink to="/blog/1" class="item">
              <NuxtLink to="/blog/1" class="title"
                >Occaecat tempor incididunt exercitation tempor.</NuxtLink
              >
              <div class="quote">
                <div>By Jennie Black</div>
                <div class="time">|</div>
                <div class="time">November 26, 2018 9:19 AM</div>
              </div>
              <div class="content">
                The software giant says it built the new technology for its corporate
                customers, but it could also someday end.
              </div>
              <a href="javascript:;" @click="$router.push('/blog/1')">Continue Reading</a>
            </NuxtLink>
          </div>
          <div class="news_item">
            <img src="@image/layouts/news_01.svg" alt="" />
            <div class="item">
              <NuxtLink to="/blog/1" class="title">
                Et non incididunt ex sit pariatur labore do culpa excepteur.
              </NuxtLink>
              <div class="quote">
                <div>By Jennie Black</div>
                <div class="time">|</div>
                <div class="time">November 26, 2018 9:19 AM</div>
              </div>
              <div class="content">
                The software giant says it built the new technology for its corporate
                customers, but it could also someday end.
              </div>
              <a href="javascript:;" @click="$router.push('/blog/1')">Continue Reading</a>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :sm="9">
          <NewsCategories />
          <NewsProject />
        </a-col>
      </a-row>
    </div>
  </transition>
</template>

<script>
import NewsCategories from "@component/Blog/NewsCategories.vue";
import NewsProject from "@component/Blog/NewsProject.vue";

export default {
  components: {
    NewsCategories,
    NewsProject,
  },
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>

<style lang="scss" scoped>
@import "@asset/variables.scss";
.blog {
  padding: 0 5%;
  margin-top: 10px;
  .carousel {
    border-radius: 10px;
    overflow: hidden;
  }
  .large_background {
    background-image: url("@image/layouts/blog_background.svg");
    height: 600px;
    background-position: center;
    background-size: cover;
    .main_content {
      position: relative;
      .position {
        position: absolute;
        top: 300px;
        left: 30px;
      }
    }
    .community {
      position: relative;
      .social {
        position: absolute;
        display: flex;
        color: $white-text-01;
        top: 520px;
        right: 30px;
        .comment {
          margin-right: 20px;
        }
        img {
          margin-right: 8px;
        }
      }
    }
  }
  .small_background_01 {
    background-image: url("@image/layouts/blog_background_02.svg");
    height: 300px;
    background-position: center;
    background-size: cover;
    .main_content {
      position: relative;
      .position {
        position: absolute;
        top: 170px;
        left: 20px;
      }
    }
  }
  .small_background_02 {
    background-image: url("@image/layouts/blog_background_03.svg");
    height: 300px;
    background-position: center;
    background-size: cover;
    .main_content {
      position: relative;
      .position {
        position: absolute;
        top: 170px;
        left: 20px;
      }
    }
  }

  .review {
    .btn_started {
      background: linear-gradient(90.62deg, #0b9985 -63.29%, #0b9985 100%);
      border-radius: 50px;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      padding: 0px 20px !important;
    }
  }
  .title {
    font-weight: bold;
    font-size: 48px;
    line-height: 57px;
    color: $white-text-01;
    .small {
      font-size: 24px;
      line-height: 30px;
    }
    &:hover {
      transition: all 0.5s;
      color: $green-text-01;
    }
  }
  .quote {
    margin-top: 15px;
    display: flex;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: $white-text-01;
    .time {
      margin-left: 6px;
    }
  }
  .content {
    margin-top: 10px;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: justify;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
    color: $white-text-01;
  }
  .news {
    .news_title {
      color: $green-black-01;
      font-weight: bold;
      font-size: 24px;
      line-height: 132%;
      margin: 30px 0;
      margin-left: 20px;
    }
    .news_item {
      display: flex;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      margin-bottom: 30px;
      img {
        width: 40%;
      }
      .item {
        margin: auto 20px;
        .title {
          color: $black-text-03;
          font-size: 24px;
          display: flex;
          align-items: center;
          text-align: justify;
          line-height: 132%;
          &:hover {
            transition: all 0.5s;
            color: $green-text-01;
          }
        }
        .quote {
          color: $grey-black-02;
          font-size: 14px;
          line-height: 16px;
          display: flex;
          margin: 20px 0;
          .time {
            margin-left: 6px;
          }
        }
        .content {
          font-size: 14px;
          line-height: 20px;
          text-align: justify;
          display: flex;
          align-items: center;
          letter-spacing: 0.25px;
          color: $black-text-03 !important;
          margin-bottom: 20px !important;
        }
        a {
          color: $green-black-01;
        }
      }
    }
  }
}

.home-enter-active {
  transition: opacity 0.5s;
}
.home-leave-active {
  transition: opacity 0.1s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
