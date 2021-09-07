<template>
  <div class="blog_detail">
    <a-row :gutter="32">
      <a-col :xs="24" :sm="16" class="main_content">
        <div class="quote">2018 Ford Mustang GT/EcoBoost</div>
        <div class="blog_title">
          Driven: 2018 Ford Mustang GT and EcoBoost (European Version)
        </div>
        <div class="users">
          <img src="@image/icons/blog_avatar.svg" alt="" />
          <div class="username">
            <div class="name">Jorge Russell</div>
            <div class="time">October 31, 2017 5:23 AM</div>
          </div>
        </div>
        <div class="content">
          If you're American, chances are you know somebody who owns a 'Stang, or might
          have driven one yourself. If, however, you live on the Old Continent, the Ford
          Mustang was, most likely, a distant dream to you until the carmaker decided to
          bring the pony car to Europe three years ago. And now that the time for the
          machine's mid-cycle facelift has arrived, Ford has chosen to take the global
          approach one step further, adding more Euro-style refinement to the Mustang. So
          how does the car feel while tackling the twisty European roads and tight urban
          areas found in this part of the globe?
        </div>
        <div class="photos">
          <img src="@image/layouts/blog_image_01.svg" alt="" />
          <div class="explains">
            <div class="left">
              Image / Photo / Video Caption Dolore eiusmod officia ipsum aute irure
              nostrud dolor reprehenderit dolor in consequat ad sit. Eiusmod dolor
              adipisicing pariatur occaecat commodo labore officia anim aute esse mollit
              excepteur.
            </div>
            <div class="right">
              <div>Photo by Author Name</div>
              <a href="javascript:;">https://www.unsplash.com</a>
            </div>
          </div>
        </div>
        <div class="content">
          To answer the questions above, along with a few others, I spent a couple of
          hours throwing the 2018 Ford Mustang around in the South of France. The melange
          of twisty mountain roads, generous highways, tiny villages and glamorous urban
          landscapes allowed me to get a good taste of how this US icon feels when tasked
          with catering to the needs of Europeans.
        </div>
        <div class="content">
          Telling the <span class="link">facelifted model</span> apart from the car it
          replaces doesn't require too much effort, at least not when you get to check out
          the car's face.
        </div>
        <div class="content highlight">
          What about the (Eco)Boost and the revised manual?
        </div>
        <div class="content">
          It's no secret that the <span class="link">Mustang's new appearance</span> has
          received mixed opinions and I'm putting things mildly. Sure, the design is more
          aggressive, but it seems to take the machine further away from its ancestors and
          closer to the image of a sportscar.
        </div>
        <div class="content">
          Oh well, at least the Blue Oval team managed to integrate the hood vents with
          the European legislation (yes, the vents are functional).
        </div>
        <div class="claim">
          <img src="@image/icons/claim.svg" alt="" />
          <div>
            You will never be happy if you continue to search for what happiness consists
            of. You will never live if you are looking for the meaning of life.
            <p>Albert Camus</p>
          </div>
        </div>
        <div class="content">
          The motor's displacement was slightly increased, jumping from 4,951 to 5,038 cc,
          while the unit now mixes port and direct injection. As such, the power is up,
          with the engine now delivering 450 instead of 422 PS (if you're reading this
          from the US, you should know the Euro 'Stang now has 444 hp). Still, due to the
          stricter European emission regulations, the maximum output still sits below the
          466 PS (460 hp) the <span class="link">Mustang GT</span> offers on its home
          turf.
        </div>
        <div class="content">
          In its trip across the ocean, the revised Mustang has also lost some torque,
          delivering 527 Nm (389 lb-ft) instead of 569 Nm (420 lb-ft).
        </div>
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
export default {
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
  components: {
    RecentNews,
    NewsCategories,
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
