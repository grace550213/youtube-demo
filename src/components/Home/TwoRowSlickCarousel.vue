<template>
  <div class="twoRowSlickCarousel-slick-wrap">
    <VueSlickCarousel v-bind="settings">
      <div class="slick" v-for="item in data" :key="item.id">
        <a :href="`${activityDomain}/activity/detail?id=${item.id}&from=share&token=$token`">
          <img v-lazy="`${activityDomain}${item.coverImage}`" alt="活動圖片" />
          <div class="content">
            <div class="title overflow-ellipsis-2">{{ item.name }}</div>
            <div class="detail row items-center">
              <img src="../../assets/lale_journal/AP_icon/calander.png" alt="日期 icon" />
              <span class="overflow-ellipsis">{{ item.startTime }}</span>
            </div>
            <div class="detail row items-center">
              <img src="../../assets/lale_journal/AP_icon/map_icon.png" alt="位置 icon" />
              <span class="overflow-ellipsis">{{ `${item.city}${item.district}` || '線上' }}</span>
            </div>
            <div class="bottomDetail row items-center justify-between">
              <span>{{ item.catalog }}/{{ item.free ? '免費' : '付費' }}</span>
              <span class="online">{{ item.online ? '線上' : '線下' }}</span>
            </div>
          </div>
        </a>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
// 若還需調整 slick UI 可能會需要
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: 'TwoRowSlickCarousel',
  components: { VueSlickCarousel },
  props: ['data'],
  data() {
    return {
      // 輪播 style 的設定
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        // 下面是有顯示下一個輪播的樣式
        // centerMode: true,
        // centerPadding: '30px',
        // 下面兩個為不顯示下一個輪播的樣式
        edgeFriction: 0.35,
        slidesToScroll: 2,
        slidesToShow: 2,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: false
      },
      activityDomain: process.env.VUE_APP_ACTIVITY_SHOW_PATH
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.twoRowSlickCarousel-slick-wrap {
  text-align: center;
  margin: 0 0 21px 0px;
  height: 180px;
}
.slick {
  height: 237px;
  text-align: left;
  padding-right: 16px;
  a {
    text-decoration: none;
    img {
      height: 111px;
      object-fit: cover;
      border-radius: 6px 6px 0px 0px;
    }
    .content {
      background-color: $YTWhite;
      box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.25);
      border-radius: 0px 0px 6px 6px;
      padding: 8px 15px;
      .title {
        color: #636363;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        height: 36px;
      }
      .detail {
        font-weight: 500;
        font-size: 11px;
        line-height: 18px;
        color: #969696;
        img {
          height: 10px;
          width: auto;
          margin-right: 6px;
        }
        span {
          width: 80%;
        }
      }
      .bottomDetail {
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        color: $YTSeparatorLine;
        padding-top: 8px;
        border-top: 1px dashed #e7e7e7;
        margin-top: 8px;
        .online {
          width: 40px;
          height: 20px;
          background: $YTPrimary;
          border-radius: 10px;
          color: $YTWhite;
          display: inline-block;
          text-align: center;
          line-height: 21px;
        }
      }
    }
  }
}
div {
  outline: none;
}
</style>

<style lang="scss">
.twoRowSlickCarousel-slick-wrap .slick-dots li {
  width: 0px;
}
.twoRowSlickCarousel-slick-wrap .slick-dots li.slick-active button:before {
  background-color: $YTPrimary;
  content: ' ';
  width: 8px;
  height: 4px;
  margin-top: 7px;
  margin-left: 5px;
  border-radius: 25px;
  opacity: 1;
}
.twoRowSlickCarousel-slick-wrap .slick-dots li button:before {
  color: $YTSeparatorLine;
  opacity: 1;
  font-size: 18px;
  /* 下面的字體改回我們自己的，即可以改變點點的大小 */
  font-family: Roboto;
}
.twoRowSlickCarousel-slick-wrap .slick-dots {
  bottom: -27px;
  width: 96%;
}
.twoRowSlickCarousel-slick-wrap > .slick-slider > .slick-list {
  margin: 0px -16px 0px 0px;
}
.twoRowSlickCarousel-slick-wrap .slick-slide img {
  width: 100%;
}
</style>
