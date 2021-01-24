<template>
  <div>
    <!-- 搜尋後的影片列表 -->
    <div :class="[keywordHistory.length === 0 ? 'noKeywordHistoryList' : '', 'content']">
      <div v-if="searchResultList.length > 0" class="searchResultTitle">
        搜尋
        <span>{{ searchedKeyword }}</span>
        相關{{ searchType === 'video' ? '影片' : searchType === 'playlist' ? '播放清單' : '頻道' }}結果
      </div>
      <VideoInfo :data="finalSearchResultList" :keywordHistory="keywordHistory" :keyword="searchedKeyword" :type="searchType" :startToSearch="startToSearch" />
    </div>
  </div>
</template>

<script>
import VideoInfo from '../components/Home/VideoInfo';
import { mapState } from 'vuex';
export default {
  name: 'SearchResult',
  props: ['searchedKeyword', 'searchType', 'startToSearch', 'keywordHistory'],
  components: { VideoInfo },
  data() {
    return {
      // 因 plalylistInfo 寫入時間有時間差，因此等 plalylistInfo 寫入後才放進 VideoInfo compponent 裡
      finalSearchResultList: []
    };
  },
  created() {
    if (this.searchType !== 'playlist') {
      this.finalSearchResultList = this.searchResultList;
      return;
    }
    setTimeout(() => {
      this.finalSearchResultList = this.searchResultList;
    }, 500);
  },
  computed: {
    ...mapState('HomeModule', ['searchResultList'])
  },
  watch: {
    searchResultList: function() {
      if (this.searchType !== 'playlist') {
        this.finalSearchResultList = this.searchResultList;
        return;
      }
      setTimeout(() => {
        this.finalSearchResultList = this.searchResultList;
      }, 500);
    }
  },
  updated() {},
  methods: {}
};
</script>
<style scoped lang="scss">
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
</style>
<style></style>
