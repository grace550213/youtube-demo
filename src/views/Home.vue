<template>
  <div class="home-wrap scroll-div" @scroll="scrollEvent">
    <!-- 置頂搜尋，連至搜尋頁面 -->
    <div class="search-wrap row items-center">
      <q-icon name="format_align_justify" size="sm" @click="showPageList = !showPageList" />
      <div class="search row items-center">
        <svg class="q-mr-sm" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.16504 2.52506C9.24811 2.52407 10.3071 2.84433 11.2082 3.44533C12.1092 4.04633 12.8117 4.90106 13.2268 5.9014C13.642 6.90174 13.7511 8.00274 13.5405 9.06511C13.3298 10.1275 12.8087 11.1035 12.0432 11.8697C11.2777 12.6359 10.3022 13.1578 9.24 13.3695C8.17782 13.5811 7.07673 13.473 6.07601 13.0588C5.07529 12.6445 4.21992 11.9428 3.61809 11.0423C3.01627 10.1419 2.69504 9.08312 2.69504 8.00006C2.70161 6.55089 3.27986 5.16287 4.30412 4.13767C5.32838 3.11247 6.71588 2.53295 8.16504 2.52506ZM8.16504 1.50006C6.87946 1.50006 5.62276 1.88128 4.55384 2.59551C3.48492 3.30974 2.65179 4.3249 2.15983 5.51262C1.66786 6.70034 1.53913 8.00727 1.78994 9.26815C2.04074 10.529 2.65981 11.6872 3.56885 12.5963C4.47789 13.5053 5.63608 14.1244 6.89696 14.3752C8.15783 14.626 9.46477 14.4972 10.6525 14.0053C11.8402 13.5133 12.8554 12.6802 13.5696 11.6113C14.2838 10.5423 14.665 9.28564 14.665 8.00006C14.665 6.27615 13.9802 4.62285 12.7612 3.40387C11.5423 2.18488 9.88895 1.50006 8.16504 1.50006Z"
            fill="#c4c4c4"
          />
          <path
            d="M17.5 16.6449L13.815 12.9349L13.105 13.6399L16.79 17.3499C16.8363 17.3966 16.8913 17.4336 16.9519 17.459C17.0125 17.4843 17.0775 17.4975 17.1432 17.4977C17.2089 17.4979 17.274 17.4852 17.3348 17.4603C17.3956 17.4354 17.4509 17.3987 17.4975 17.3524C17.5441 17.3061 17.5811 17.2511 17.6065 17.1905C17.6319 17.1299 17.645 17.0649 17.6453 16.9992C17.6455 16.9335 17.6328 16.8684 17.6079 16.8076C17.5829 16.7468 17.5463 16.6916 17.5 16.6449Z"
            fill="#c4c4c4"
          />
        </svg>
        <input
          v-model="text"
          type="text"
          name="searchInput"
          :placeholder="searchType === 'video' ? '搜尋影片' : searchType === 'playlist' ? '搜尋播放清單' : '搜尋頻道'"
          @keyup.enter="sendSearch(text)"
        />
        <i v-if="text !== ''" class="fas fa-times-circle" @click="text = ''"></i>
      </div>
    </div>
    <!-- 歷史紀錄 -->
    <div v-if="keywordHistory.length > 0 && isHomePage()" class="keywordHistoryList">
      <KeywordHistory :data="keywordHistory" @searchThisKeyword="searchThisKeyword" @cleanKeyword="cleanKeyword" />
    </div>
    <!-- 中間內容呈現區塊 -->
    <router-view :keywordHistory="keywordHistory" :searchedKeyword="searchedKeyword" :searchType="searchType" :startToSearch="startToSearch"></router-view>
    <!-- 選擇搜尋類別的 btn -->
    <q-fab v-if="isHomePage()" class="chooseTypeButton" icon="search" v-model="chooseTypeButton" external-label label-class="bg-grey-3 text-white" color="primary" direction="up">
      <q-fab-action
        label-class="btnLabel text-white"
        external-label
        :text-color="searchType === 'channel' ? 'white' : 'primary'"
        :color="searchType === 'channel' ? 'primary' : 'white'"
        label-position="left"
        label="頻道"
        icon="face"
        @click="searchType = 'channel'"
      />
      <q-fab-action
        label-class="btnLabel text-white"
        external-label
        :text-color="searchType === 'playlist' ? 'white' : 'primary'"
        :color="searchType === 'playlist' ? 'primary' : 'white'"
        label-position="left"
        label="播放清單"
        icon="fact_check"
        @click="searchType = 'playlist'"
      />
      <q-fab-action
        label-class="btnLabel text-white"
        external-label
        :text-color="searchType === 'video' ? 'white' : 'primary'"
        :color="searchType === 'video' ? 'primary' : 'white'"
        label-position="left"
        label="影片"
        icon="movie"
        @click="searchType = 'video'"
      />
    </q-fab>
    <!-- 灰色背景 -->
    <div v-if="chooseTypeButton" class="backgroundGray" @click="backgroundGrayHide"></div>
    <div v-if="showPageList" class="backgroundGray allPage" @click="backgroundGrayHide"></div>
    <!-- 頁面列表 -->
    <transition name="moveL">
      <div v-if="showPageList" class="pageList">
        <q-icon class="alignIcon" name="format_align_justify" size="sm" @click="showPageList = !showPageList" />
        <div class="list row items-center" @click="toHome">
          <q-icon class="q-mr-lg" name="home" size="sm" />
          <span>首頁</span>
        </div>
        <div class="list row items-center" @click="toFavoriteVideo">
          <q-icon class="q-mr-lg" name="favorite" size="sm" />
          <span>收藏影片</span>
        </div>
        <div class="list row items-center" @click="toPlaylist">
          <q-icon class="q-mr-lg" name="fact_check" size="sm" />
          <span>收藏播放清單</span>
        </div>
        <div class="list row items-center" @click="toChannel">
          <q-icon class="q-mr-lg" name="sentiment_very_satisfied" size="sm" />
          <span>收藏頻道</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import KeywordHistory from '../components/Home/KeywordHistory';
import { mapState, mapActions, mapMutations } from 'vuex';
import router from '../router';
export default {
  name: 'Home',
  components: { KeywordHistory },
  data() {
    return {
      // 搜尋的關鍵字
      text: '',
      // 完成搜尋後的關鍵字
      searchedKeyword: '',
      // 是否是自己打字搜尋，還是點擊搜尋紀錄
      notfromTyping: false,
      // 搜尋紀錄
      keywordHistory: [],
      // 選擇搜尋類型的 btn 是否點開
      chooseTypeButton: false,
      // 搜尋的類型(channel/playlist/video)
      searchType: 'video',
      // 因 plalylistInfo 寫入時間有時間差，因此等 plalylistInfo 寫入後才放進 VideoInfo compponent 裡
      finalSearchResultList: [],
      // 第一次搜尋的 flag，或是換 searchType 搜尋
      startToSearch: 'first',
      // 頁面選擇列表顯示
      showPageList: false
    };
  },
  computed: {
    ...mapState('HomeModule', ['searchResultList', 'nextPageToken', 'apiDoing', 'searchPage'])
  },
  watch: {
    // 判斷是否正在打字，若沒有打字後一秒才發送 api
    // 因 youtube 有限訂每日發 api 的次數，所以關閉即時搜尋功能
    text: function() {
      // text: function(newData) {
      // console.log('typing');
      // let self = this;
      // setTimeout(function() {
      //   // 若沒在打字且內容不為空，另外也不是從"按下歷史搜尋紀錄來的"，則發送 api
      //   if (newData === self.text && self.text !== '' && !self.notfromTyping) {
      //     console.log('notTyping, keyword:' + self.text);
      //     self.sendSearch(self.text);
      //   }
      // }, 1000);
    },
    searchType: function() {
      // 若 type 更新，則搜尋結果要清空
      this.SET_SEARCH_RESULT_LIST([]);
      // 將搜尋 input 裡的值清空
      this.cleanTextValue();
      // 重新設定 startToSearch
      this.startToSearch = 'changeType';
    }
  },
  created() {
    this.keywordHistory.push('mamamoo');
    this.sendSearch('老高');
  },
  methods: {
    ...mapActions('HomeModule', ['getSearchResult']),
    ...mapMutations('HomeModule', ['SET_SEARCH_PAGE', 'SET_SEARCH_RESULT_LIST']),
    // 滾動事件
    scrollEvent(e) {
      if (this.apiDoing || this.searchResultList.length === 0 || window.location.href.slice(-3) !== '/#/') {
        return;
      }
      if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 50) {
        // console.log('searcheMore');
        this.getSearchResult({ keyword: this.text, nextPageToken: this.nextPageToken, type: this.searchType, page: this.searchPage + 1 });
        // 紀錄現在正在搜尋的頁數
        this.SET_SEARCH_PAGE(this.searchPage + 1);
      }
    },
    // 搜尋關鍵字的相關影片
    sendSearch(text) {
      if (text === '') {
        return;
      }
      if (!this.isHomePage()) {
        router.push('/');
      }
      // 搜尋過了，所以更改第一次搜尋 flag 的狀態
      if (this.startToSearch) {
        this.startToSearch = 'searched';
      }
      // 若歷史訊息已存在，則移除原有的，再次寫入至第一個
      if (this.keywordHistory.indexOf(text) > -1) {
        this.keywordHistory.splice(this.keywordHistory.indexOf(text), 1);
      }
      // 寫入歷史訊息
      this.keywordHistory.unshift(text);
      // 寫入搜尋後的關鍵字
      this.searchedKeyword = text;
      // 搜尋影片
      this.getSearchResult({ keyword: text, type: this.searchType, page: 1 });
      // 紀錄現在正在搜尋的頁數
      this.SET_SEARCH_PAGE(1);
    },
    // 按下歷史搜尋紀錄，搜尋該關鍵字
    searchThisKeyword(keyword) {
      this.text = keyword;
      this.notfromTyping = true;
      this.sendSearch(keyword);
      let self = this;
      setTimeout(function() {
        self.notfromTyping = false;
      }, 2000);
    },
    // 清除某個歷史紀錄
    cleanKeyword(keyword) {
      const index = this.keywordHistory.indexOf(keyword);
      this.keywordHistory.splice(index, 1);
    },
    // 將搜尋 input 裡的值清空
    cleanTextValue() {
      this.text = '';
    },
    // 灰色背景消失後，其他原本開起的按鈕或畫面也要消失
    backgroundGrayHide() {
      if (this.chooseTypeButton) {
        this.chooseTypeButton = false;
        return;
      } else if (this.showPageList) {
        this.showPageList = false;
        return;
      }
    },
    // 回首頁
    toHome() {
      this.backgroundGrayHide();
      router.push('/');
    },
    // 至收藏影片頁面
    toFavoriteVideo() {
      this.backgroundGrayHide();
      router.push('/Favorite/video');
    },
    // 至收藏播放清單頁面
    toPlaylist() {
      this.backgroundGrayHide();
      router.push('/Favorite/playlist');
    },
    // 至收藏頻道頁面
    toChannel() {
      this.backgroundGrayHide();
      router.push('/Favorite/channel');
    },
    // 判斷是不是在首頁(搜尋頁面)
    isHomePage() {
      return window.location.href.slice(-3) === '/#/';
    }
  }
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}
.scroll-div {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  overflow-x: hidden;
}
.home-wrap {
  background-color: #f8f8f8;
  height: 100%;
  padding-bottom: 60px;
}
.search-wrap {
  background-color: $YTWhite;
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 10px;
}
.search {
  background-color: #f2f2f2;
  padding: 7px 15px;
  border-radius: 25px;
  margin: 0 auto;
  width: calc(98% - 50px - 24px);
  color: $YTSeparatorLine;
  max-width: 500px;
  span {
    font-size: 15px;
  }
  input {
    width: calc(100% - 62px);
    outline: none;
    border: none;
    background-color: #f2f2f2 !important;
  }
  i {
    cursor: pointer;
    font-size: 18px;
  }
}
.keywordHistoryList {
  max-width: 700px;
  margin: 67px auto 0px auto;
  padding: 0px 10px;
}
@media screen and (min-width: 415px) {
  .keywordHistoryList {
    max-width: 100%;
  }
}
.content {
  max-width: 700px;
  margin: 0px auto;
  padding: 0px 15px 15px 15px;
}
.content.noKeywordHistoryList {
  margin: 67px auto 0px auto;
}
.searchResultTitle {
  margin-bottom: 15px;
  color: $YTGray8;
  span {
    color: $YTSecondary;
  }
}
.chooseTypeButton {
  position: fixed;
  right: 10%;
  bottom: 10%;
}
.backgroundGray {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  background: rgba(0, 0, 0, 0.4);
}
.backgroundGray.allPage {
  z-index: 1000;
}
.q-icon {
  color: $YTPrimary;
  margin-left: 2%;
  cursor: pointer;
}
.pageList {
  width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: $YTWhite;
  z-index: 1001;
  .alignIcon {
    padding: 16px 27px 8px 27px;
  }
  .list {
    padding: 16px 27px;
    cursor: pointer;
  }
  .list:hover {
    background-color: #9bc6bd2b;
  }
  span {
    color: $YTSecondaryGray;
  }
}
@media screen and (min-width: 415px) {
  .pageList {
    width: 240px;
  }
}
// 左向右進入，右向左滑出動畫
.moveL-enter-active,
.moveL-leave-active {
  transition: all 0.3s linear;
  transform: translateX(0%);
}
.moveL-enter,
.moveL-leave {
  transform: translateX(-100%);
}
.moveL-leave-to {
  transform: translateX(-100%);
}
</style>
<style></style>
