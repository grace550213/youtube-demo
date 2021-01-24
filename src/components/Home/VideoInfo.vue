<template>
  <div class="'videoInfo-wrap'">
    <template v-if="data.length !== 0">
      <div v-for="(item, index) in data" class="videoInfo row items-center" :key="item.id.videoId">
        <!-- 影片列表 -->
        <a target="_blank" :href="updateLink(index)" :title="item.snippet.title" class="article-wrap row items-center">
          <!-- 結果縮圖 -->
          <img v-lazy="`${item.snippet.thumbnails.medium.url}`" :style="type === 'channel' ? 'border-radius:110px;width:110px' : ''" alt="影片縮圖" />
          <!-- 播放清單顯示有幾首的區塊(灰色背景) -->
          <div v-if="type === 'playlist'" class="playlistCount column items-center justify-center">
            <span>{{ item.totalResults }}</span>
            <q-icon name="playlist_play" size="xs" />
          </div>
          <!-- 資訊列 -->
          <div :class="[type === 'channel' ? 'justify-center' : 'justify-between', 'item-wrap column ']">
            <div class="itemTitle overflow-ellipsis" v-html="item.snippet.title"></div>
            <div v-if="type !== 'playlist' && item.snippet.description !== ''" class="itemSummary overflow-ellipsis-2">{{ item.snippet.description }}</div>
            <div v-if="type !== 'channel'" class="itemTime overflow-ellipsis">
              {{ item.snippet.channelTitle }}
            </div>
            <div v-if="type !== 'playlist'" class="itemTime overflow-ellipsis">
              {{ type === 'channel' ? `頻道創建於 ${item.snippet.publishTime.substring(0, item.snippet.publishTime.indexOf('T'))}` : item.snippet.publishTime.replace('T', '    ').slice(0, -4) }}
            </div>
            <div v-if="type === 'playlist' && item.playlistInfo" class="itemPlaylist">
              <div class="overflow-ellipsis">
                {{ item.playlistInfo[0].snippet.title }}
              </div>
              <div class="overflow-ellipsis">
                {{ item.playlistInfo[1].snippet.title }}
              </div>
            </div>
          </div>
        </a>
        <q-icon class="favoriteIcon" :name="isFavorite(item.etag) ? 'favorite' : 'favorite_border'" size="sm" @click="toggleFavorite(item, isFavorite(item.etag))" />
      </div>
    </template>
    <template v-else-if="data.length === 0">
      <div :class="[keywordHistory.length === 0 && !favorite ? 'noKeywordHistory' : '', 'noArticle column items-center justify-center']">
        <!-- 若為收藏頁面 -->
        <template v-if="favorite">
          <i class="far fa-smile"></i>
          <span class="noArticleText">你還沒有收藏的{{ type === 'video' ? '影片' : type === 'playlist' ? '播放清單' : '頻道' }}</span>
        </template>
        <!-- 第一次進來頁面準備搜尋或是更改 search type -->
        <template v-else-if="startToSearch !== 'searched'">
          <i class="far fa-smile-wink"></i>
          <span v-if="startToSearch === 'first'" class="noArticleText">
            step 1.右下角選擇搜尋類型
            <br />
            step 2.上方搜尋框進行搜尋
          </span>
          <span v-else class="noArticleText">歡迎搜尋{{ type === 'video' ? '影片' : type === 'playlist' ? '播放清單' : '頻道' }}</span>
        </template>
        <!-- 沒有搜尋結果 -->
        <template v-else>
          <i class="fas fa-exclamation-circle"></i>
          <span class="noArticleText">沒有搜尋結果</span>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'VideoInfo',
  components: {},
  props: ['data', 'keyword', 'type', 'startToSearch', 'keywordHistory', 'favorite'],
  data() {
    return {};
  },
  computed: {
    ...mapState('FavoriteModule', ['favoriteVideo', 'favoritePlaylist', 'favoriteChannel'])
  },
  mounted() {
    // 搜尋後，關鍵字要改顏色
    if (this.keyword !== '') {
      let name = document.querySelectorAll('.item-wrap.column>div');
      name.forEach(item => {
        item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="88b4ab">${this.keyword}</font>`);
      });
    }
  },
  watch: {
    // 搜尋後，關鍵字要改顏色
    data: function() {
      if (this.keyword !== '') {
        let name = document.querySelectorAll('.item-wrap.column>div');
        name.forEach(item => {
          item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="88b4ab">${this.keyword}</font>`);
        });
      }
    }
  },
  updated() {
    // 搜尋後，關鍵字要改顏色
    if (this.keyword !== '') {
      let name = document.querySelectorAll('.item-wrap.column>div');
      name.forEach(item => {
        item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="88b4ab">${this.keyword}</font>`);
      });
    }
  },
  methods: {
    ...mapMutations(['CHANGE_ALERT_STATUS', 'CHANGE_ALERT_WORD']),
    ...mapMutations('FavoriteModule', ['ADD_FAVORITE_VIDEO', 'DELETE_FAVORITE_VIDEO', 'ADD_FAVORITE_PLAYLIST', 'DELETE_FAVORITE_PLAYLIST', 'ADD_FAVORITE_CHANNEL', 'DELETE_FAVORITE_CHANNEL']),
    // 因 playlist 的 playlistInfo 資料會較晚寫入，所以須等此資料寫入後，才可以拼出正確的網址
    updateLink(index) {
      setTimeout(() => {
        if (this.data.length === 0) {
          return;
        }
        const articleWrap = document.querySelectorAll('.article-wrap')[index];
        let value = '';
        if (this.type === 'playlist' && this.data[index].playlistInfo) {
          value = `https://www.youtube.com/watch?v=${this.data[index].playlistInfo[0].contentDetails.videoId}&list=${this.data[index].id.playlistId}`;
        } else if (this.type === 'channel') {
          value = `https://www.youtube.com/channel/${this.data[index].id.channelId}`;
        } else {
          value = `https://www.youtube.com/watch?v=${this.data[index].id.videoId}`;
        }
        articleWrap.setAttribute('href', value);
      }, 500);
    },
    // 判斷是否有加入收藏名單
    isFavorite(etag) {
      if (this.type === 'video') {
        return this.favoriteVideo.filter(item => item.etag === etag).length > 0;
      } else if (this.type === 'playlist') {
        return this.favoritePlaylist.filter(item => item.etag === etag).length > 0;
      } else {
        return this.favoriteChannel.filter(item => item.etag === etag).length > 0;
      }
    },
    // 收藏影片/播放清單/頻道或取消收藏
    toggleFavorite(data, isFavorite) {
      switch (this.type) {
        case 'video':
          if (isFavorite) {
            this.DELETE_FAVORITE_VIDEO(data);
            this.CHANGE_ALERT_STATUS(true);
            this.CHANGE_ALERT_WORD('取消收藏影片');
          } else {
            this.ADD_FAVORITE_VIDEO(data);
            this.CHANGE_ALERT_STATUS(true);
            this.CHANGE_ALERT_WORD('成功收藏影片');
          }
          break;
        case 'playlist':
          if (isFavorite) {
            this.DELETE_FAVORITE_PLAYLIST(data);
            this.CHANGE_ALERT_STATUS(true);
            this.CHANGE_ALERT_WORD('取消收藏播放清單');
          } else {
            this.ADD_FAVORITE_PLAYLIST(data);
            this.CHANGE_ALERT_STATUS(true);
            this.CHANGE_ALERT_WORD('成功收藏播放清單');
          }
          break;
        case 'channel':
          if (isFavorite) {
            this.DELETE_FAVORITE_CHANNEL(data);
            this.CHANGE_ALERT_STATUS(true);
            this.CHANGE_ALERT_WORD('取消收藏頻道');
          } else {
            this.ADD_FAVORITE_CHANNEL(data);
            this.CHANGE_ALERT_STATUS(true);
            this.CHANGE_ALERT_WORD('成功收藏頻道');
          }
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.videoInfo-wrap {
  padding: 0px 26px 0px 12px;
  min-height: 200px;
}

.videoInfo {
  padding-bottom: 30px;
  position: relative;
  .article-wrap {
    width: 100%;
    position: relative;
  }
  img {
    width: 120px;
    height: 110px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
  .playlistCount {
    position: absolute;
    // left: 145px;
    // width: 50px;
    left: 83px;
    width: 37px;
    height: 100%;
    border-radius: 0px 6px 6px 0px;
    background-color: rgba(0, 0, 0, 0.5);
    color: $YTWhite;
    span {
      font-size: 12px;
    }
  }
  .itemTitle {
    font-weight: 500;
    color: $YTTitleBlack;
    // line-height: 33px;
    width: calc(100%);
    font-size: 18px;
  }
  .itemSummary {
    line-height: 16px;
    color: $YTGray8;
    width: 100%;
    height: 32px;
    font-size: 13px;
  }
  .itemPlaylist {
    line-height: 16px;
    color: $YTGray8;
    width: 100%;
    height: 59px;
    font-size: 13px;
  }
  .item-wrap {
    width: calc(100% - 130px);
    height: 110px;
  }
  .itemTime {
    font-size: 12px;
    line-height: 18px;
    width: 100%;
    color: $YTNotActiveGray;
  }
}
@media screen and (min-width: 415px) {
  .videoInfo {
    img {
      width: 195px;
    }
    .item-wrap {
      width: calc(100% - 205px);
    }
    .playlistCount {
      left: 145px;
      width: 50px;
    }
  }
}
.noArticle {
  margin: 90px 0px;
  i {
    font-size: 70px;
    color: $YTPrimary;
  }
  .noArticleText {
    margin-top: 15px;
    font-size: 18px;
    color: $YTSecondaryGray;
    text-align: center;
    line-height: 38px;
  }
}
.noArticle.noKeywordHistory {
  margin: 203px 0px;
}
.favoriteIcon {
  position: absolute;
  right: 0;
  bottom: 28px;
  color: $YTPrimary;
  cursor: pointer;
}
</style>

<style lang="scss"></style>
