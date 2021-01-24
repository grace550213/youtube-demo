export default {
  namespaced: true,
  state: {
    // 喜歡的影片
    favoriteVideo: [],
    // 喜歡的播放清單
    favoritePlaylist: [],
    // 喜歡的頻道
    favoriteChannel: []
  },
  getters: {},
  actions: {},
  mutations: {
    // 新增喜歡的影片
    ADD_FAVORITE_VIDEO(state, data) {
      state.favoriteVideo.push(data);
    },
    // 刪除喜歡的影片
    DELETE_FAVORITE_VIDEO(state, data) {
      const newArray = state.favoriteVideo.filter(item => item.etag !== data.etag);
      state.favoriteVideo = newArray;
    },
    // 新增喜歡的播放清單
    ADD_FAVORITE_PLAYLIST(state, data) {
      state.favoritePlaylist.push(data);
    },
    // 刪除喜歡的播放清單
    DELETE_FAVORITE_PLAYLIST(state, data) {
      const newArray = state.favoritePlaylist.filter(item => item.etag !== data.etag);
      state.favoritePlaylist = newArray;
    },
    // 新增喜歡的頻道
    ADD_FAVORITE_CHANNEL(state, data) {
      state.favoriteChannel.push(data);
    },
    // 刪除喜歡的頻道
    DELETE_FAVORITE_CHANNEL(state, data) {
      const newArray = state.favoriteChannel.filter(item => item.etag !== data.etag);
      state.favoriteChannel = newArray;
    }
  }
};
