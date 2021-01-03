<template>
  <div class="searchResult-wrap scroll-div" @scroll="scrollEvent">
    <!-- 歷史搜尋紀錄 -->
    <div v-if="keyword === ''" class="keywordHistoryList">
      <div v-if="keywordHistory.length !== 0" class="keywordHistoryTitle">搜尋紀錄</div>
      <div v-if="keywordHistory.length === 0" class="noKeywordHistory">目前無搜尋紀錄</div>
      <KeywordHistoryList v-if="keywordHistory.length !== 0" :data="keywordHistory" @searchThisKeyword="searchThisKeyword" />
      <div v-if="keywordHistory.length !== 0" class="cleanKeywordHistory" @click="clearKeyword">
        <i class="far fa-trash-alt q-mr-xs"></i>
        清空搜尋紀錄
      </div>
    </div>
    <!-- 相關 lale 通搜尋結果 -->
    <div v-if="keyword !== ''" class="accountResult-wrap q-mb-md">
      <div class="row items-center justify-between accountResult">
        <span class="accountResultTitle overflow-ellipsis">
          有關"
          <span style="color: #3BB4B7">{{ keyword }}</span>
          "的 Lale 通（{{ searchAccountsResult.length }}筆）
        </span>
        <span v-if="searchAccountsResult.length !== 0" @click="toMoreAccountSearch">
          更多
          <i class="far fa-angle-right"></i>
        </span>
      </div>
      <SubscribeList :data="searchAccountsResult.slice(0, 2)" :slogan="true" :keyword="keyword" />
    </div>
    <!-- 相關文章搜尋結果 -->
    <div v-if="keyword !== ''" class="accountResult-wrap">
      <div class="row items-center justify-between accountResult">
        <span class="accountResultTitle overflow-ellipsis">
          有關"
          <span style="color: #3BB4B7">{{ keyword }}</span>
          "的文章（{{ searchArticlesResultCount }}筆）
        </span>
      </div>
      <NewsArticle v-if="searchArticlesResult" :data="searchArticlesResult" :bookMark="false" :search="true" :keyword="keyword" />
    </div>
  </div>
</template>

<script>
import KeywordHistoryList from './KeywordHistoryList';
import SubscribeList from '../Subscribe/SubscribeList';
import NewsArticle from '../Home/NewsArticle';
import { mapState, mapActions, mapMutations } from 'vuex';
import router from '../../router';
export default {
  name: 'SearchResult',
  components: { KeywordHistoryList, SubscribeList, NewsArticle },
  data() {
    return {
      articleResultPage: 2
    };
  },
  created() {
    this.getKeywordHistory();
  },
  computed: {
    ...mapState('SearchModule', ['keywordHistory', 'searchAccountsResult', 'searchArticlesResult', 'searchArticlesResultCount', 'keyword']),
    ...mapState('HomeModule', ['apiDoing', 'noMoreJournalSubscribeData'])
  },
  methods: {
    ...mapActions('SearchModule', ['getKeywordHistory', 'insertKeyword', 'clearKeyword', 'getAccounts', 'findArticlesByKeyword', 'getSearchCountByKeyword']),
    ...mapMutations('SearchModule', ['SET_KEYWORD']),
    // 執行搜尋關鍵字相關的 lale 通與文章
    sendSearch(text) {
      // 取得相關 lale 通
      this.getAccounts(text);
      // 取得相關文章
      this.findArticlesByKeyword({ page: 1, keyword: text });
      // 取得相關文章結果的數量
      this.getSearchCountByKeyword(text);
      // 紀錄新的關鍵字，並重新拿取歷史搜尋紀錄
      this.insertKeyword(text);
    },
    // 按下歷史搜尋紀錄，搜尋該關鍵字
    searchThisKeyword(keyword) {
      this.SET_KEYWORD(keyword);
      this.sendSearch(keyword);
    },
    // 滾動事件
    scrollEvent(e) {
      if (this.keyword === '') {
        return;
      }
      if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 50) {
        // 若滾到最下面，則載下一頁的文章結果
        if (!this.apiDoing && !this.noMoreJournalSubscribeData) {
          this.findArticlesByKeyword({ page: this.articleResultPage, keyword: this.text });
          this.articleResultPage++;
          return;
        }
      }
    },
    toMoreAccountSearch() {
      router.push('/Search/MoreAccountSearch');
    }
  }
};
</script>

<style scoped lang="scss">
.scroll-div {
  // height: 100%;
  position: fixed;
  top: 62px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
}
.searchResult-wrap {
  // background-color: #e8e8e8;
  // min-height: 100vh;
  // height: 100%;
  padding-bottom: 50px;
}
.keywordHistoryList {
  background-color: $YTWhite;
  width: 100%;
  padding: 15px;
  .keywordHistoryTitle {
    margin-bottom: 15px;
    color: $YTTitleBlack;
  }
  .cleanKeywordHistory {
    text-align: center;
    margin-top: 25px;
    color: #bbbbbb;
    font-size: 16px;
  }
  .noKeywordHistory {
    font-size: 18px;
    color: #bbbbbb;
    padding: 15px 0;
  }
}
.accountResult-wrap {
  background-color: $YTWhite;
  font-size: 16px;
  .accountResult {
    color: $YTTitleBlack;
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 15px;
    .accountResultTitle {
      width: calc(100% - 55px);
      letter-spacing: 0.5px;
    }
  }
}
</style>

<style lang="scss"></style>
