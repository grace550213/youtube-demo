import actions from './actions';
import mutations from './mutations';
import getters from './getters';
const state = {
  // 搜尋後影片的列表
  searchResultList: [],
  // 搜尋後影片的列表下一頁的 token
  nextPageToken: '',
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
