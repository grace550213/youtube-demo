import actions from './actions';
import mutations from './mutations';
import getters from './getters';
const state = {
  // 搜尋後影片的列表
  searchResultList: [],
  // 搜尋後影片的列表下一頁的 token
  nextPageToken: '',
  // 搜尋第幾頁的結果 (目前一頁 10 個結果)
  searchPage: 0,
  // api 是否有在運行的 flag
  apiDoing: false
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
