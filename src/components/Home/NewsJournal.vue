<template>
  <div class="newsJournal-wrap">
    <div>
      <!-- 沒有任何期刊文章 -->
      <template v-if="data.length === 0">
        <div class="noData">您未關注任何 Lale 通或您關注的 Lale 通未發佈任何消息 ! 建議您可以點選右上角功能鈕關注其他 Lale 通 .</div>
      </template>
      <!-- 期刊只有一則文章 -->
      <template v-else-if="data.tinyArticles.length === 1">
        <div class="newsJournal row items-center" v-for="innerItem in data.tinyArticles" :key="innerItem.artId" @click="toArticle(innerItem.artId)">
          <img v-lazy="`${newsDomain}/${innerItem.cover.replace('getfile=', 'getthumb=')}`" alt="文章圖片" />
          <div class="item-wrap column justify-between">
            <div style="width:100%" class="row items-center">
              <img class="iconImg" :src="`${data.creatorImg}`" alt="企業號 icon" />
              <span class="itemAccount overflow-ellipsis" @click.stop="toAccountPage(data.lalePassId)">{{ data.creatorName }}</span>
            </div>
            <div class="itemTitle overflow-ellipsis-2">{{ innerItem.title }}</div>
            <span class="itemTime">{{ changePublishTime(data.publishTime) }}</span>
          </div>
        </div>
      </template>
      <!-- 期刊多於一則文章 -->
      <template v-else-if="data.tinyArticles.length > 1">
        <div class="creatorData row items-center justify-between">
          <div style="width: calc(100% - 70px)" class="row items-center">
            <img class="iconImg" :src="`${data.creatorImg}`" alt="企業號 icon" />
            <span class="itemAccount overflow-ellipsis" @click.stop="toAccountPage(data.lalePassId)">{{ data.creatorName }}</span>
          </div>
          <div class="publishTime">{{ changePublishTime(data.publishTime) }}</div>
        </div>
        <!-- 期刊先顯示三篇文章 -->
        <template v-for="(innerItem, index) in data.tinyArticles">
          <div v-if="index < 3" class="newsJournal row items-center" :style="index === 2 ? 'margin-bottom:15px' : ''" :key="innerItem.artId" @click="toArticle(innerItem.artId)">
            <img class="smallerImg" v-lazy="`${newsDomain}/${innerItem.cover.replace('getfile=', 'getthumb=')}`" alt="文章圖片" />
            <div class="itemTitle item-longerWrap overflow-ellipsis-2">{{ innerItem.title }}</div>
          </div>
        </template>
        <!-- 顯示更多文章按鈕 -->
        <div v-if="data.tinyArticles.length > 3 && !showMoreArticle" class="showMoreArticleLine row items-center justify-between" @click="showMoreArticle = !showMoreArticle">
          <span>還有{{ data.tinyArticles.length - 3 }}筆</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.76532 0.484438C9.80024 0.519272 9.82795 0.560654 9.84685 0.606213C9.86576 0.651771 9.87549 0.700612 9.87549 0.749938C9.87549 0.799263 9.86576 0.848104 9.84685 0.893663C9.82795 0.939222 9.80024 0.980604 9.76532 1.01544L5.26532 5.51544C5.23048 5.55036 5.1891 5.57807 5.14354 5.59697C5.09798 5.61588 5.04914 5.62561 4.99982 5.62561C4.95049 5.62561 4.90165 5.61588 4.85609 5.59697C4.81053 5.57807 4.76915 5.55036 4.73432 5.51544L0.23432 1.01544C0.163904 0.945022 0.124346 0.849519 0.124346 0.749937C0.124346 0.650356 0.163904 0.554852 0.23432 0.484437C0.304734 0.414022 0.400238 0.374464 0.49982 0.374464C0.599401 0.374464 0.694904 0.414022 0.76532 0.484437L4.99982 4.71969L9.23432 0.484438C9.26915 0.449515 9.31053 0.421808 9.35609 0.402903C9.40165 0.383998 9.45049 0.374268 9.49982 0.374268C9.54914 0.374268 9.59798 0.383998 9.64354 0.402903C9.6891 0.421808 9.73048 0.449515 9.76532 0.484438Z"
              fill="#3BB4B7"
            />
          </svg>
        </div>
        <!-- 按下按鈕，期刊再顯示剩下的文章 -->
        <template v-for="(innerItem, index) in data.tinyArticles">
          <div v-if="index >= 3 && showMoreArticle" class="newsJournal row items-center" :key="innerItem.artId" @click="toArticle(innerItem.artId)">
            <img class="smallerImg" v-lazy="`${newsDomain}/${innerItem.cover.replace('getfile=', 'getthumb=')}`" alt="文章圖片" />
            <div class="itemTitle item-longerWrap overflow-ellipsis-2">{{ innerItem.title }}</div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import tool from '../../tool';
import router from '../../router/index';
export default {
  name: 'NewsJournal',
  components: {},
  props: ['data'],
  data() {
    return {
      newsDomain: process.env.VUE_APP_NEWS_SHOW_PATH,
      showMoreArticle: false
    };
  },
  computed: {},
  methods: {
    changePublishTime(publishTime) {
      return tool.getPublishTime(publishTime);
    },
    toAccountPage(id) {
      router.push({ path: '/SubscribeAccount', query: { pid: id, showCard: false } });
    },
    toArticle(artId) {
      router.push({ path: '/Article', query: { artId } });
    }
  }
};
</script>

<style scoped lang="scss">
.newsJournal-wrap {
  padding: 0px 26px 0px 12px;
}
.newsJournal {
  margin-bottom: 24px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 13px;
  }
  .smallerImg {
    width: 40px;
    height: 40px;
  }
  .itemTitle {
    font-size: 13px;
    line-height: 18px;
    color: $YTDefaultGray;
    height: 36px;
    width: 100%;
  }
  .item-wrap {
    width: calc(100% - 93px);
    height: 80px;
  }
  .itemTime {
    font-size: 12px;
    line-height: 18px;
    color: #969696;
  }
}
.itemTitle.item-longerWrap {
  height: auto;
  width: calc(100% - 53px);
}
.creatorData {
  height: 41px;
  border-bottom: 1px dashed $YTSeparatorLine;
  margin-bottom: 11px;
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
  .publishTime {
    font-size: 12px;
    line-height: 18px;
    color: #969696;
  }
}
.newsJournal .iconImg,
.creatorData .iconImg {
  width: 22px;
  height: 22px;
  border-radius: 22px;
  object-fit: cover;
  margin-right: 6px;
}
.newsJournal .itemAccount,
.creatorData .itemAccount {
  font-weight: 500;
  font-size: 13px;
  color: $YTPrimary;
  line-height: 18px;
  width: calc(100% - 28px);
}
.showMoreArticleLine {
  border-top: 1px dashed $YTSeparatorLine;
  height: 46px;
  margin-bottom: 17px;
}
.noData {
  margin: 90px 0px;
  font-size: 18px;
  color: #676a6c;
}
</style>

<style lang="scss"></style>
