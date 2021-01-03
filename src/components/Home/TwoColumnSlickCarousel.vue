<template>
  <div class="twoColumnSlickCarousel-slick-wrap">
    <VueSlickCarousel v-bind="settings">
      <div class="slick" v-for="item in data" :key="item.storeItem.id">
        <div class="shoppingItem row items-center">
          <img v-lazy="`${shoppingDomain}/${item.storeItem.image1}`" alt="推薦商品圖片" />
          <div class="item-wrap column justify-between">
            <div class="itemName overflow-ellipsis-3">{{ item.storeItem.name }}</div>
            <div class="row justify-between items-center">
              <span class="itemPrice">${{ item.storeItem.minPrice }}</span>
              <a :href="`${shoppingDomain}/StoreItemShow.do?action=showItemOfMemia&itemID=${item.storeItem.id}&token=${laleToken}`"><input type="button" value="馬上搶" /></a>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel';
// 若還需調整 slick UI 可能會需要
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: 'TwoColumnSlickCarousel',
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
        slidesToScroll: 1,
        slidesToShow: 1,
        rows: 2,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: false
      },
      shoppingDomain: process.env.VUE_APP_MEMIA_SHOW_PATH
    };
  },
  computed: {
    ...mapState(['laleToken'])
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.twoColumnSlickCarousel-slick-wrap {
  text-align: center;
  margin: 0 0 21px 0px;
  // height: 180px;
}
.slick {
  // height: 97px;
  text-align: left;
  background-color: $YTWhite;
  margin-bottom: 24px;
  a {
    text-decoration: none;
  }
  .shoppingItem {
    img {
      width: 80px;
      height: 80px;
      border-radius: 6px;
      object-fit: cover;
      margin-right: 13px;
    }
    .item-wrap {
      width: calc(100% - 93px);
    }
    .itemName {
      font-size: 13px;
      line-height: 18px;
      color: $YTDefaultGray;
      height: 54px;
    }
    .itemPrice {
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      color: $YTPink;
    }
    input {
      width: 60px;
      height: 26.26px;
      background: $YTSecondaryPink;
      border-radius: 6px;
      color: $YTWhite;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0;
    }
  }
}
div {
  outline: none;
}
</style>

<style lang="scss">
.twoColumnSlickCarousel-slick-wrap .slick-dots li {
  width: 0px;
}
.twoColumnSlickCarousel-slick-wrap .slick-dots li.slick-active button:before {
  background-color: $YTPink;
  content: ' ';
  width: 8px;
  height: 4px;
  margin-top: 7px;
  margin-left: 5px;
  border-radius: 25px;
  opacity: 1;
}
.twoColumnSlickCarousel-slick-wrap .slick-dots li button:before {
  color: $YTSeparatorLine;
  opacity: 1;
  font-size: 18px;
  /* 下面的字體改回我們自己的，即可以改變點點的大小 */
  font-family: Roboto;
}
.twoColumnSlickCarousel-slick-wrap .slick-dots {
  bottom: -28px;
}
// .twoColumnSlickCarousel-slick-wrap > .slick-slider > .slick-list {
//   margin: 0px -16px 0px 0px;
// }
.twoColumnSlickCarousel-slick-wrap .slick-slide img {
  width: 100%;
}
</style>
