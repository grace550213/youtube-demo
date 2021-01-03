<template>
  <div class="search-wrap">
    <!-- 搜尋 input -->
    <div class="searchArea">
      <svg class="q-mr-sm" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.16504 2.52506C9.24811 2.52407 10.3071 2.84433 11.2082 3.44533C12.1092 4.04633 12.8117 4.90106 13.2268 5.9014C13.642 6.90174 13.7511 8.00274 13.5405 9.06511C13.3298 10.1275 12.8087 11.1035 12.0432 11.8697C11.2777 12.6359 10.3022 13.1578 9.24 13.3695C8.17782 13.5811 7.07673 13.473 6.07601 13.0588C5.07529 12.6445 4.21992 11.9428 3.61809 11.0423C3.01627 10.1419 2.69504 9.08312 2.69504 8.00006C2.70161 6.55089 3.27986 5.16287 4.30412 4.13767C5.32838 3.11247 6.71588 2.53295 8.16504 2.52506ZM8.16504 1.50006C6.87946 1.50006 5.62276 1.88128 4.55384 2.59551C3.48492 3.30974 2.65179 4.3249 2.15983 5.51262C1.66786 6.70034 1.53913 8.00727 1.78994 9.26815C2.04074 10.529 2.65981 11.6872 3.56885 12.5963C4.47789 13.5053 5.63608 14.1244 6.89696 14.3752C8.15783 14.626 9.46477 14.4972 10.6525 14.0053C11.8402 13.5133 12.8554 12.6802 13.5696 11.6113C14.2838 10.5423 14.665 9.28564 14.665 8.00006C14.665 6.27615 13.9802 4.62285 12.7612 3.40387C11.5423 2.18488 9.88895 1.50006 8.16504 1.50006Z"
          fill="#C4C4C4"
        />
        <path
          d="M17.5 16.6449L13.815 12.9349L13.105 13.6399L16.79 17.3499C16.8363 17.3966 16.8913 17.4336 16.9519 17.459C17.0125 17.4843 17.0775 17.4975 17.1432 17.4977C17.2089 17.4979 17.274 17.4852 17.3348 17.4603C17.3956 17.4354 17.4509 17.3987 17.4975 17.3524C17.5441 17.3061 17.5811 17.2511 17.6065 17.1905C17.6319 17.1299 17.645 17.0649 17.6453 16.9992C17.6455 16.9335 17.6328 16.8684 17.6079 16.8076C17.5829 16.7468 17.5463 16.6916 17.5 16.6449Z"
          fill="#C4C4C4"
        />
      </svg>
      <input v-model="text" type="text" name="searchInput" class="form-control" placeholder="搜尋 Lale 通和文章" />
      <i v-if="text !== ''" class="fas fa-times-circle" @click="cleanInput"></i>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import router from '../router/index';
export default {
  name: 'Search',
  data() {
    return {
      text: '',
      notfromTyping: false
    };
  },
  created() {
    this.CHANGE_TITLE('搜尋');
  },
  computed: {
    ...mapState('SearchModule', ['keyword'])
  },
  watch: {
    // 判斷是否正在打字，若沒有打字後一秒才發送 api
    text: function(newData) {
      // 如果在 "顯示更多 lale 通" 頁面，則導回顯示結果頁面
      if (location.href.indexOf('MoreAccountSearch') > -1) {
        router.push('/Search');
      }
      this.SET_KEYWORD(newData);
      console.log('typing');
      let self = this;
      setTimeout(function() {
        // 若沒在打字且內容不為空，另外也不是從"按下歷史搜尋紀錄來的"，則發送 api
        if (newData === self.text && self.text !== '' && !self.notfromTyping) {
          console.log('notTyping, keyword:' + self.text);
          self.sendSearch(self.text);
        }
      }, 1000);
    },
    // 按下歷史搜尋紀錄，搜尋該關鍵字，所以也需改變 input 的值，但不用從新發送搜尋 function
    keyword: function(newData) {
      if (newData !== this.text) {
        this.text = newData;
        this.notfromTyping = true;
        let self = this;
        setTimeout(function() {
          self.notfromTyping = false;
        }, 2000);
      }
    }
  },
  methods: {
    ...mapActions('SearchModule', ['insertKeyword', 'getAccounts', 'findArticlesByKeyword', 'getSearchCountByKeyword']),
    ...mapMutations('SearchModule', ['SET_KEYWORD']),
    ...mapMutations(['CHANGE_TITLE']),
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
      this.text = keyword;
      this.notfromTyping = true;
      this.sendSearch(keyword);
      let self = this;
      setTimeout(function() {
        self.notfromTyping = false;
      }, 2000);
    },
    // 清除 input 的字，並將頁面導回 Search
    cleanInput() {
      this.text = '';
      this.SET_KEYWORD('');
      // 如果在 "顯示更多 lale 通" 頁面，則導回顯示結果頁面
      if (location.href.indexOf('MoreAccountSearch') > -1) {
        router.push('/Search');
      }
    }
  }
};
</script>

<style scoped lang="scss">
.search-wrap {
  background-color: #e8e8e8;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 60px;
}
.searchArea {
  position: relative;
  background-color: rgba(142, 142, 147, 0.12);
  padding: 10px;
  input {
    width: 100%;
    padding-right: 40px;
    padding-left: 32px;
    height: 42px;
    font-size: 16px;
    border: none;
    outline: none;
  }
  ::placeholder {
    color: #c4c4c4;
  }
  svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  i.fa-times-circle {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    color: #878787;
    font-size: 18px;
  }
}
</style>

<style lang="scss"></style>
