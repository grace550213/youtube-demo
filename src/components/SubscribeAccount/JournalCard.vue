<template>
  <div class="journalCard-wrap">
    <template v-for="item in data">
      <div class="column items-center card" v-if="item.tinyArticles.length > 0" :key="item.jouId">
        <div class="publishTime">{{ changePublishTime(item.publishTime) }}</div>
        <!-- 期刊只有一則文章 -->
        <template v-if="item.tinyArticles.length === 1">
          <div class="card-inner" @click="toArticle(item.tinyArticles[0].artId)">
            <div class="img-wrap">
              <!-- <img src="../../assets/lale_journal/default_head.png" v-real-img="`${newsDomain}/${item.tinyArticles[0].cover}`" alt="期刊圖片" /> -->
              <img v-lazy="`${newsDomain}/${item.tinyArticles[0].cover}`" alt="期刊圖片" />
              <!-- 圖片漸層 -->
              <div class="imgBackground"></div>
            </div>
            <div class="cardContent">
              <div class="overflow-ellipsis title">{{ item.tinyArticles[0].title }}</div>
              <div class="overflow-ellipsis-2 summary">{{ item.tinyArticles[0].summary }}</div>
            </div>
          </div>
        </template>
        <!-- 期刊多於一則文章 -->
        <template v-else>
          <div class="card-inner">
            <div class="img-wrap" @click="toArticle(item.tinyArticles[0].artId)">
              <!-- <img src="../../assets/lale_journal/default_head.png" v-real-img="`${newsDomain}/${item.tinyArticles[0].cover}`" alt="期刊圖片" /> -->
              <img v-lazy="`${newsDomain}/${item.tinyArticles[0].cover}`" alt="期刊圖片" />
              <!-- 圖片漸層 -->
              <div class="imgBackground"></div>
              <div class="overflow-ellipsis titleInImg">{{ item.tinyArticles[0].title }}</div>
            </div>
            <template v-for="(innerItem, index) in item.tinyArticles">
              <div v-if="index > 0" :key="innerItem.artId" class="cardContent cardContentWithImg row items-center justify-between" @click="toArticle(innerItem.artId)">
                <div class="overflow-ellipsis-2 title titleWithImg">{{ innerItem.title }}</div>
                <!-- <img src="../../assets/lale_journal/default_head.png" v-real-img="`${newsDomain}/${innerItem.cover}`" alt="期刊圖片" /> -->
                <img v-lazy="`${newsDomain}/${innerItem.cover}`" alt="期刊圖片" />
              </div>
            </template>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import tool from '../../tool';
import router from '../../router/index';
export default {
  name: 'JournalCard',
  components: {},
  props: ['data'],
  data() {
    return {
      newsDomain: process.env.VUE_APP_NEWS_SHOW_PATH
    };
  },
  computed: {},
  created() {},
  methods: {
    changePublishTime(publishTime) {
      return tool.getPublishTime(publishTime);
    },
    toArticle(artId) {
      router.push({ path: '/Article', query: { artId } });
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 15px;
}
.publishTime {
  height: 22pt;
  text-align: center;
  color: $YTNotActiveGray;
  line-height: 22pt;
  font-size: 12px;
}
.card-inner {
  background: $YTWhite;
  border-radius: 7px;
  overflow: hidden;
  width: 100%;
}
.img-wrap {
  position: relative;
  width: 100%;
  height: 195px;
  overflow: hidden;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .imgBackground {
    position: absolute;
    bottom: 0px;
    background: linear-gradient(rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 1) 500%);
    width: 100%;
    height: 80%;
  }
  .titleInImg {
    width: 100%;
    color: $YTWhite;
    position: absolute;
    bottom: 6px;
    font-size: 18px;
    padding: 12px;
    text-align: left;
  }
}
.cardContent {
  padding: 16px 12px;
  .title {
    line-height: 24px;
    color: #444444;
    font-size: 16px;
    letter-spacing: 0.5px;
    text-align: left;
    margin-bottom: 5px;
  }
  .summary {
    color: #b1b1b1;
    line-height: 20px;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-align: left;
  }
  .title.titleWithImg {
    width: calc(100% - 71px);
    margin-bottom: 0px;
  }
  img {
    width: 71px;
    height: 46px;
    object-fit: cover;
  }
}
.cardContent.cardContentWithImg {
  border-bottom: 1px solid #eee;
  padding: 10px 12px;
}
</style>

<style lang="scss"></style>
