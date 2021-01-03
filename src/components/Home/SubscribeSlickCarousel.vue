<template>
  <div class="subscribeSlickCarousel-slick-wrap">
    <VueSlickCarousel v-if="data" v-bind="settings">
      <div class="slick column" v-for="item in data" :key="item.id" @click="toChatroomOrSubscribe(item.userId, item.id, item.firmId, item.name, item.firmsType, item.follow)">
        <img class="serviceImg" v-lazy="item.images" />
        <div class="servicetitle overflow-ellipsis-2">{{ item.name }}</div>
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
import { mapMutations, mapState } from 'vuex';
import router from '../../router/index';
export default {
  name: 'SubscribeSlickCarousel',
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
        slidesToShow: 4,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 4,
        // focusOnSelect: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        arrows: false
      }
    };
  },
  computed: {
    ...mapState(['isIOS'])
  },
  methods: {
    ...mapMutations(['GO_TO_SERVICE_CHAT_ROOM']),
    // 若為服務號則去聊天室，若為消息號則顯示介紹卡
    toChatroomOrSubscribe(userId, id, firmId, name, firmType, follow) {
      let jsonStr = `{ "firmId": ${firmId}, "name": "${name}", "cid": "${userId}", "pid":${id}}`;
      if (firmType === 2 && follow) {
        this.GO_TO_SERVICE_CHAT_ROOM(jsonStr);
      } else if (firmType === 2 || this.slogan) {
        router.push({ path: '/SubscribeAccount', query: { pid: id, showCard: true } });
      } else {
        router.push({ path: '/SubscribeAccount', query: { pid: id, showCard: false } });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.subscribeSlickCarousel-slick-wrap {
  text-align: center;
  margin: 0 0 21px 0px;
  height: 277px;
  background: $YTWhite;
  box-shadow: 0px 4px 4px #e7e7e7;
  border-radius: 6px;
  padding: 24px 21px;
}
.slick {
  height: 113px;
  margin-bottom: 13px;
  outline: none;
  .serviceImg {
    height: 60px;
    width: 60px;
    border-radius: 60px;
    margin: 0 auto;
    object-fit: cover;
  }
  .servicetitle {
    margin-top: 9px;
    color: $YTDefaultGray;
    font-size: 12px;
  }
}
div {
  outline: none;
}
</style>

<style lang="scss">
.subscribeSlickCarousel-slick-wrap .slick-dots li {
  width: 0px;
}
.subscribeSlickCarousel-slick-wrap .slick-dots li.slick-active button:before {
  background-color: #ffca63;
  content: ' ';
  width: 8px;
  height: 4px;
  margin-top: 7px;
  margin-left: 5px;
  border-radius: 25px;
  opacity: 1;
}
.subscribeSlickCarousel-slick-wrap .slick-dots li button:before {
  color: $YTSeparatorLine;
  opacity: 1;
  font-size: 18px;
  /* 下面的字體改回我們自己的，即可以改變點點的大小 */
  font-family: Roboto;
}
.subscribeSlickCarousel-slick-wrap .slick-dots {
  bottom: -39px;
}
</style>
