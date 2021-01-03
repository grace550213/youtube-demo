import axios from 'axios';
import { Loading } from 'quasar';
export default {
  // 取得搜尋後的影片資訊
  getSearchResult(context, data) {
    Loading.show();
    context.commit('SET_API_DOING', true);
    let api = '';
    if (data.nextPageToken) {
      api = `${process.env.VUE_APP_YOUTUBE_PATH}/search?part=snippet&q=${data.keyword}&key=${context.rootState.key}&type=video&maxResults=20&pageToken=${data.nextPageToken}`;
    } else {
      api = `${process.env.VUE_APP_YOUTUBE_PATH}/search?part=snippet&q=${data.keyword}&key=${context.rootState.key}&type=video&maxResults=20`;
    }
    return axios
      .get(api)
      .then(async response => {
        console.log(response);
        // 若不為第一頁，則把資料累加上去
        if (data.nextPageToken) {
          let oldArray = context.state.searchResultList;
          context.commit('SET_SEARCH_RESULT_LIST', [...oldArray, ...response.data.items]);
        } else {
          context.commit('SET_SEARCH_RESULT_LIST', response.data.items);
        }
        context.commit('SET_API_DOING', false);
        context.commit('SET_NEXT_PAGE_TOKEM', response.data.nextPageToken);
        Loading.hide();
      })
      .catch(error => {
        console.error(error);
        Loading.hide();
      });
  }
};
