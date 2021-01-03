<template>
  <div class="singleSlickCarousel-slick-wrap">
    <VueSlickCarousel v-if="data" v-bind="from === 'article' ? articleSettings : settings">
      <div class="slickImg" v-for="item in data" :key="item.url">
        <a :href="from === 'article' ? item.ad_url : item.url">
          <img v-lazy="from === 'article' ? item.images : item.img" alt="banner" />
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
  name: 'SingleSlickCarousel',
  components: { VueSlickCarousel },
  props: ['data', 'from'],
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
        slidesToScroll: 1,
        slidesToShow: 1,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: false
      },
      articleSettings: {
        dots: false,
        // dotsClass: 'slick-dots custom-dot-class',
        // 下面是有顯示下一個輪播的樣式
        // centerMode: true,
        // centerPadding: '30px',
        // 下面兩個為不顯示下一個輪播的樣式
        edgeFriction: 0.35,
        slidesToScroll: 1,
        slidesToShow: 1,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false
      }
    };
  },
  computed: {},
  mounted() {
    // 防止圖片被拖動
    document.querySelectorAll('img').forEach(item => {
      item.onmousedown = function() {
        event.preventDefault();
      };
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.singleSlickCarousel-slick-wrap {
  text-align: center;
  margin: 0 0 21px 0px;
  height: 180px;
  outline: none;
}
.slickImg {
  height: 180px;
  outline: none;
  a {
    outline: none;
    img {
      height: 180px;
      object-fit: cover;
      border-radius: 7px;
      outline: none;
    }
  }
}
div {
  outline: none;
}
</style>

<style lang="scss">
.singleSlickCarousel-slick-wrap .slick-dots li {
  width: 0px;
}
.singleSlickCarousel-slick-wrap .slick-dots li.slick-active button:before {
  background-color: $YTWhite;
  content: ' ';
  width: 8px;
  height: 4px;
  margin-top: 7px;
  margin-left: 5px;
  border-radius: 25px;
  opacity: 1;
}
.singleSlickCarousel-slick-wrap .slick-dots li button:before {
  color: $YTSeparatorLine;
  opacity: 1;
  font-size: 18px;
  /* 下面的字體改回我們自己的，即可以改變點點的大小 */
  font-family: Roboto;
}
.singleSlickCarousel-slick-wrap .slick-dots {
  bottom: 12px;
}

.singleSlickCarousel-slick-wrap .slick-slide img {
  width: 100%;
}
</style>
