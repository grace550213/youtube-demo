// import Vue from 'vue';
export default {
  // 設定搜尋後影片的列表
  SET_SEARCH_RESULT_LIST(state, data) {
    state.searchResultList = data;
  },
  // 設定搜尋後影片的列表下一頁的 token
  SET_NEXT_PAGE_TOKEM(state, data) {
    state.nextPageToken = data;
  },
  // 設定 api 是否正在運行的 flag
  SET_API_DOING(state, data) {
    state.apiDoing = data;
  },
  // 設定搜尋第幾頁的結果
  SET_SEARCH_PAGE(state, data) {
    state.searchPage = data;
  }
};
