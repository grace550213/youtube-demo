<template>
  <div class="subscribeList-wrap">
    <div
      class="item-wrap row items-center"
      :style="index === data.length - 1 ? 'border-bottom:none' : ''"
      v-for="(item, index) in data"
      :key="item.id"
      @click="toAccountPage(item.userId, item.id, item.firmId, item.name, item.firmsType, item.follow)"
    >
      <img :class="[slogan ? 'hasSlogan' : '', 'iconImg']" v-lazy="item.images" alt="消息號/服務號 icon" />
      <div v-if="!slogan" :class="[item.newArticleTitle === '' ? 'justify-center' : 'justify-between', 'itemContent column']">
        <span class="overflow-ellipsis itemName">{{ item.name }}</span>
        <span class="overflow-ellipsis">{{ item.newArticleTitle }}</span>
      </div>
      <div v-else :class="[item.slogan === '' ? 'justify-center' : 'justify-between', slogan ? 'hasSlogan' : '', 'itemContent column']">
        <span class="overflow-ellipsis itemName">{{ item.name }}</span>
        <span class="overflow-ellipsis">{{ item.slogan }}</span>
      </div>
      <div class="timeAndBtn column items-end justify-between">
        <span v-if="!slogan">{{ changePublishTime(item.publishTime) }}</span>
        <button v-if="item.firmsType === 1" :class="[item.follow ? 'newsBtn' : 'unFollowNewsBtn']">消息號</button>
        <button v-else-if="item.firmsType === 2" :class="[item.follow ? 'serviceBtn' : 'unFollowServiceBtn']">服務號</button>
      </div>
    </div>
  </div>
</template>

<script>
import tool from '../../tool';
import router from '../../router/index';
import { mapMutations } from 'vuex';
export default {
  name: 'SubscribeList',
  components: {},
  props: ['data', 'slogan', 'keyword'],
  data() {
    return {
      newsDomain: process.env.VUE_APP_NEWS_SHOW_PATH
    };
  },
  computed: {},
  mounted() {
    // 搜尋後，關鍵字要改顏色
    if (this.keyword !== '') {
      let name = document.querySelectorAll('.hasSlogan.itemContent>span');
      name.forEach(item => {
        item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="3BB4B7">${this.keyword}</font>`);
      });
    }
  },
  watch: {
    // 搜尋後，關鍵字要改顏色
    data: function() {
      if (this.keyword !== '') {
        let name = document.querySelectorAll('.hasSlogan.itemContent>span');
        name.forEach(item => {
          item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="3BB4B7">${this.keyword}</font>`);
        });
      }
    }
  },
  updated() {
    // 搜尋後，關鍵字要改顏色
    if (this.keyword !== '') {
      let name = document.querySelectorAll('.hasSlogan.itemContent>span');
      name.forEach(item => {
        item.innerHTML = item.innerHTML.replaceAll(this.keyword, `<font color="3BB4B7">${this.keyword}</font>`);
      });
    }
  },
  methods: {
    ...mapMutations(['GO_TO_SERVICE_CHAT_ROOM']),
    changePublishTime(publishTime) {
      return tool.getPublishTime(publishTime);
    },
    toAccountPage(userId, id, firmId, name, firmType, follow) {
      let jsonStr = `{ "firmId": ${firmId}, "name": "${name}", "cid": "${userId}", "pid":${id}}`;
      if (firmType === 2 && follow) {
        this.GO_TO_SERVICE_CHAT_ROOM(jsonStr);
      } else if (firmType === 2 || this.slogan) {
        router.push({ path: '/SubscribeAccount', query: { pid: id, showCard: true } });
      } else {
        router.push({ path: '/SubscribeAccount', query: { pid: id, showCard: false } });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.item-wrap {
  height: 91px;
  padding: 15px;
  border-bottom: solid 0.5px #d4d4d4;
  .iconImg {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 7px;
  }
  .iconImg.hasSlogan {
    width: 60px;
    height: 60px;
    border-radius: 60%;
  }
  .itemContent {
    width: calc(100% - 75px - 57px);
    color: #333333;
    height: 50px;
    span {
      width: 100%;
      color: #808080;
      font-size: 14px;
    }
    .itemName {
      font-size: 18px;
      color: #333333;
    }
  }
  .itemContent.hasSlogan {
    width: calc(100% - 75px - 67px);
    span {
      color: #444444;
      font-size: 14px;
    }
    .itemName {
      font-size: 18px;
      color: #333333;
    }
  }
  .timeAndBtn {
    font-size: 12px;
    width: 75px;
    text-align: right;
    color: #808080;
    height: 50px;
    button {
      width: 60px;
      padding: 2px 4px;
      font-size: 12px;
      border: none;
      border-radius: 4px;
    }
    .newsBtn {
      background-color: $YTPrimary;
      color: $YTWhite;
    }
    .unFollowNewsBtn {
      border: solid 1px $YTPrimary;
      color: $YTPrimary;
      background-color: $YTWhite;
    }
    .serviceBtn {
      background-color: #f36817;
      color: $YTWhite;
    }
    .unFollowServiceBtn {
      border: solid 1px #f36817;
      color: #f36817;
      background-color: $YTWhite;
    }
  }
}
</style>

<style lang="scss"></style>
