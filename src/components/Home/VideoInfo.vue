<template>
  <div class="'videoInfo-wrap'">
    <template v-if="data.length !== 0">
      <div v-for="item in data" class="videoInfo row items-center" :key="item.id.videoId">
        <!-- 影片列表 -->
        <a target="_blank" :href="`https://www.youtube.com/watch?v=${item.id.videoId}`" :title="item.snippet.title" class="article-wrap row items-center">
          <img v-lazy="`${item.snippet.thumbnails.medium.url}`" alt="影片縮圖" />
          <div class="item-wrap column justify-between">
            <div class="itemTitle overflow-ellipsis" v-html="item.snippet.title"></div>
            <div class="itemSummary overflow-ellipsis-2">{{ item.snippet.description }}</div>
            <div class="itemTime overflow-ellipsis">
              {{ item.snippet.channelTitle }}
            </div>
            <div class="itemTime overflow-ellipsis">
              {{ item.snippet.publishTime.replace('T', '    ').slice(0, -4) }}
            </div>
          </div>
        </a>
      </div>
    </template>
    <template v-else-if="data.length === 0">
      <!-- 沒有搜尋結果的畫面 -->
      <div class="noArticle column items-center justify-center">
        <i class="fas fa-exclamation-circle"></i>
        <span class="noArticleText">沒有搜尋結果</span>
      </div>
    </template>
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex';
// import router from '../../router/index';
// import tool from '../../tool';
export default {
  name: 'VideoInfo',
  components: {},
  props: ['data', 'keyword'],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    // 搜尋後，關鍵字要改顏色
    if (this.keyword !== '') {
      let name = document.querySelectorAll('.item-wrap.column>div');
      name.forEach(item => {
        item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="88b4ab">${this.keyword}</font>`);
      });
    }
  },
  watch: {
    // 搜尋後，關鍵字要改顏色
    data: function() {
      if (this.keyword !== '') {
        let name = document.querySelectorAll('.item-wrap.column>div');
        name.forEach(item => {
          item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="88b4ab">${this.keyword}</font>`);
        });
      }
    }
  },
  updated() {
    // 搜尋後，關鍵字要改顏色
    if (this.keyword !== '') {
      let name = document.querySelectorAll('.item-wrap.column>div');
      name.forEach(item => {
        item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="88b4ab">${this.keyword}</font>`);
      });
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.videoInfo-wrap {
  padding: 0px 26px 0px 12px;
  min-height: 200px;
}
.article-wrap {
  width: 100%;
}
.videoInfo {
  padding-bottom: 30px;
  img {
    width: 120px;
    height: 110px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
  .itemTitle {
    font-weight: 500;
    color: $YTTitleBlack;
    // line-height: 33px;
    width: calc(100%);
    font-size: 18px;
  }
  .itemSummary {
    line-height: 16px;
    color: $YTGray8;
    width: 100%;
    height: 32px;
    font-size: 13px;
  }
  .item-wrap {
    width: calc(100% - 130px);
    height: 110px;
  }
  .itemTime {
    font-size: 12px;
    line-height: 18px;
    width: 100%;
    color: $YTNotActiveGray;
  }
}
@media screen and (min-width: 415px) {
  .videoInfo {
    img {
      width: 195px;
    }
    .item-wrap {
      width: calc(100% - 205px);
    }
  }
}
.noArticle {
  margin: 90px 0px;
  i {
    font-size: 70px;
    color: $YTPrimary;
  }
  .noArticleText {
    margin-top: 15px;
    font-size: 18px;
    color: $YTSecondaryGray;
  }
}
</style>

<style lang="scss"></style>
