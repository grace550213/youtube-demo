import axios from 'axios';
import { Loading } from 'quasar';
export default {
  // 取得搜尋後的影片/頻道/播放清單資訊
  getSearchResult(context, data) {
    Loading.show();
    context.commit('SET_API_DOING', true);
    let api = '';
    if (data.nextPageToken) {
      api = `${process.env.VUE_APP_YOUTUBE_PATH}/search?part=snippet&q=${data.keyword}&key=${context.rootState.key}&type=${data.type}&maxResults=10&pageToken=${data.nextPageToken}`;
    } else {
      api = `${process.env.VUE_APP_YOUTUBE_PATH}/search?part=snippet&q=${data.keyword}&key=${context.rootState.key}&type=${data.type}&maxResults=10`;
    }
    return axios
      .get(api)
      .then(async response => {
        // console.log(response);
        // 若不為第一頁，則把資料累加上去
        if (data.nextPageToken) {
          let oldArray = context.state.searchResultList;
          context.commit('SET_SEARCH_RESULT_LIST', [...oldArray, ...response.data.items]);
        } else {
          context.commit('SET_SEARCH_RESULT_LIST', response.data.items);
        }
        // 若為搜尋播放清單，要多跑它詳細資料的 api
        if (data.type === 'playlist') {
          response.data.items.forEach((item, index) => {
            // console.log('playlist', (data.page - 1) * 10 + index);
            context.dispatch('getPlaylistInfo', { playlistId: item.id.playlistId, index: (data.page - 1) * 10 + index });
          });
        }
        context.commit('SET_API_DOING', false);
        context.commit('SET_NEXT_PAGE_TOKEM', response.data.nextPageToken);
        if (data.type === 'playlist') {
          return;
        }
        Loading.hide();
      })
      .catch(error => {
        console.error(error);
        Loading.hide();
      });
  },
  // 取得某播放清單的詳細資訊
  getPlaylistInfo(context, data) {
    Loading.show();
    let api = `${process.env.VUE_APP_YOUTUBE_PATH}/playlistItems?part=snippet,contentDetails,status,id&key=${context.rootState.key}&playlistId=${data.playlistId}`;
    return axios
      .get(api)
      .then(async response => {
        // console.log(response);
        // 把資料寫進搜尋後對應的播放清單資料中
        context.state.searchResultList[data.index].playlistInfo = response.data.items;
        context.state.searchResultList[data.index].totalResults = response.data.pageInfo.totalResults;
        Loading.hide();
      })
      .catch(error => {
        console.error(error);
        Loading.hide();
      });
  }
};
