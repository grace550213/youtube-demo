<template>
  <div class="moreTools-bg">
    <div class="moreTools-wrap">
      <div class="tools-scroll row items-center">
        <div class="tools column items-center justify-between" v-for="item in toolsData" :key="item.title" @click="allEvent(item.event)">
          <template v-if="item.event !== 'copyUrl'">
            <div class="iconImg" v-html="item.icon"></div>
            <div class="title">{{ item.title }}</div>
          </template>
          <div v-else class="column items-center justify-between copyBtn" data-clipboard-text="">
            <div class="iconImg" v-html="item.icon"></div>
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router/index';
import iconMyFc from '../../assets/lale_journal/icon_my_fc.svg';
import { mapMutations, mapState } from 'vuex';
import ClipboardJS from 'clipboard';
export default {
  name: 'MoreTools',
  components: {},
  props: ['from', 'artId', 'accountPassId', 'firmsType'],
  data() {
    return {
      toolsData: [
        { icon: '<i class="far fa-share-square"></i>', title: '傳送給朋友', event: 'sendToChatroom' },
        { icon: `<img src="${iconMyFc}">`, title: '分享到友圈', event: 'toLaleFriend' },
        { icon: '<i class="far fa-browser" style="color:#e0941c"></i>', title: '另開瀏覽器', event: 'openWithBrowser' },
        { icon: '<i class="fab fa-line" style="color:#00b900"></i>', title: '分享到 Line', event: 'toLine' },
        { icon: '<i class="fab fa-facebook-square" style="color:#4267b2"></i>', title: '分享到 FB', event: 'toFb' },
        { icon: '<i class="far fa-building"></i>', title: '官方帳號', event: 'toAccountPage' },
        { icon: '<i class="far fa-link"></i>', title: '複製連結', event: 'copyUrl' },
        { icon: '<i class="far fa-sync-alt"></i>', title: '重新整理', event: 'reload' }
      ]
    };
  },
  computed: {
    ...mapState(['laleToken', 'isIOS'])
  },
  created() {
    // 若是在 Lale 通名片中叫出的，功能會變少
    if (this.from === 'subscribeAccount') {
      this.toolsData = this.toolsData.filter(item => {
        return item.title !== '分享到友圈' && item.title !== '另開瀏覽器' && item.title !== '官方帳號' && item.title !== '重新整理';
      });
      console.log(this.toolsData);
    }
  },
  mounted() {
    let toolsScroll = document.querySelector('.tools-scroll');
    let toolsIndex = document.querySelectorAll('.tools').length;
    toolsScroll.style.width = toolsIndex * 90 + 'px';
    // 初始化剪貼簿套件
    new ClipboardJS('.copyBtn');
    if (this.isIOS) {
      const moreToolsWrap = document.querySelector('.moreTools-wrap');
      moreToolsWrap.style.paddingBottom = '72px';
    }
  },
  methods: {
    ...mapMutations(['SHARE_TO_CHATROOM', 'CHANGE_ALERT_WORD', 'CHANGE_ALERT_STATUS', 'OPEN_WITH_BROWSER']),
    allEvent(toolEvent) {
      let pageUrl = '';
      // 若所在頁面為文章頁面
      if (this.from === 'article') {
        pageUrl = `${process.env.VUE_APP_FINAL_NEWS_PATH}/Article?artId=${this.artId}&token=$token`;
        // 若所在頁面為 Lale 通名片頁面
      } else if (this.from === 'subscribeAccount') {
        pageUrl = `${process.env.VUE_APP_FINAL_NEWS_PATH}/SubscribeAccount?pid=${this.accountPassId}&showCard=true&token=$token`;
      }
      console.log(toolEvent, pageUrl);
      let copyBtn = document.querySelector('.copyBtn');
      switch (toolEvent) {
        // 分享到朋友的聊天室
        case 'sendToChatroom':
          // 若所在頁面為文章
          if (this.from === 'article') {
            this.SHARE_TO_CHATROOM({ msgUrl: pageUrl.substring(0, pageUrl.indexOf('&token=')), typeStr: 'article' });
          } else if (this.from === 'subscribeAccount') {
            this.SHARE_TO_CHATROOM({ msgUrl: pageUrl.substring(0, pageUrl.indexOf('&token=')), typeStr: this.firmsType === 1 ? 'newsCard' : 'serviceCard' });
          }
          break;
        // 分享到友圈
        case 'toLaleFriend':
          // location.href = `https://gawbue.lale.im/api/share2gawbue/news/${this.artId}/${this.laleToken}`;
          location.href = `https://gawbue.lale.im/gawbueVue/index.html#/shareToGawbue/news/${this.artId}/token/${this.laleToken}`;
          break;
        // 分享到 FB TODO:無法到該頁面
        case 'toFb':
          location.href = `https://www.facebook.com/sharer.php?u=${pageUrl}`;
          break;
        // 另開瀏覽器
        case 'openWithBrowser':
          this.OPEN_WITH_BROWSER(pageUrl);
          break;
        // 分享到 Line
        case 'toLine':
          // line 的 url 不帶 token
          this.shareWithLine(pageUrl.substring(0, pageUrl.indexOf('&token=')));
          break;
        // 連至官方帳號頁面
        case 'toAccountPage':
          router.push({ path: '/SubscribeAccount', query: { pid: this.accountPassId, showCard: true } });
          break;
        // 複製連結
        case 'copyUrl':
          copyBtn.setAttribute('data-clipboard-text', pageUrl);
          this.CHANGE_ALERT_WORD('已複製連結');
          this.CHANGE_ALERT_STATUS(true);
          break;
        // 重新整理
        case 'reload':
          window.location.reload();
          break;
      }
    },
    // 分享到 Line
    shareWithLine(pageUrl) {
      if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
        window.location = 'http://line.naver.jp/R/msg/text/?' + document.title + '%0D%0A' + pageUrl;
      } else {
        window.open('https://lineit.line.me/share/ui?url=' + pageUrl);
      }
      return false;
    }
  }
};
</script>

<style scoped lang="scss">
.moreTools-bg {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}
.moreTools-wrap {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #f6f8f4;
  padding: 12px;
  overflow: scroll;
}
.tools-scroll {
  width: 1000px;
  overflow: scroll;
  overflow-y: hidden;
}
.tools {
  margin: 10px;
  width: 70px;
  .iconImg {
    width: 60px;
    height: 60px;
    border-radius: 22px;
    line-height: 60px;
    font-size: 26px;
    background-color: $YTWhite;
    color: $YTDefaultGray;
    margin: 5px 0;
    text-align: center;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .title {
    font-size: 12px;
  }
}
</style>

<style lang="scss">
.tools > .iconImg > img {
  width: 30px;
  height: 30px;
  margin-top: 16px;
}
</style>
