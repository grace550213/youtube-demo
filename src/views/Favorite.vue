<template>
  <div class="favorite-wrap">
    <div class="title">你收藏的{{ type === 'video' ? '影片' : type === 'playlist' ? '播放清單' : '頻道' }}</div>
    <VideoInfo :data="type === 'video' ? favoriteVideo : type === 'playlist' ? favoritePlaylist : favoriteChannel" :keywordHistory="[]" :type="type" :favorite="true" />
  </div>
</template>

<script>
import VideoInfo from '../components/Home/VideoInfo';
import { mapState } from 'vuex';
export default {
  name: 'Favorite',
  components: { VideoInfo },
  props: [],
  data() {
    return {
      type: ''
    };
  },
  created() {
    this.type = this.$route.params.type;
  },
  computed: {
    ...mapState('FavoriteModule', ['favoriteVideo', 'favoritePlaylist', 'favoriteChannel'])
  },
  watch: {
    $route: function() {
      this.type = this.$route.params.type;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.favorite-wrap {
  max-width: 700px;
  margin: 76px auto 0px auto;
  padding: 0px 15px 15px 15px;
}
.title {
  margin-bottom: 15px;
  color: #888888;
}
</style>

<style lang="scss"></style>
