<template>
  <div class="moreAccountSearch-wrap">
    <!-- 以下顯示更多 lale 通搜尋結果 -->
    <div class="accountResultType">
      <span :class="[accountResultType === 0 ? 'active' : '']" @click="accountResultType = 0">全部</span>
      <span :class="[accountResultType === 1 ? 'active' : '']" @click="accountResultType = 1">消息號</span>
      <span :class="[accountResultType === 2 ? 'active' : '']" @click="accountResultType = 2">服務號</span>
    </div>
    <!-- 相關 lale 通"不同分類"(服務號、消息號)搜尋結果 -->
    <div class="accountType-wrap q-mb-md">
      <div class="row items-center justify-between accountType">
        <span class="accountTypeTitle overflow-ellipsis">
          有關"
          <span style="color: #3BB4B7">{{ keyword }}</span>
          "的{{ accountResultType === 0 ? '全部 Lale 通' : accountResultType === 1 ? '消息號' : '服務號' }}
        </span>
      </div>
      <SubscribeList :data="accountResultType === 0 ? searchAccountsResult : accountResultType === 1 ? accountsResultType1 : accountsResultType2" :slogan="true" :keyword="keyword" />
    </div>
  </div>
</template>

<script>
import SubscribeList from '../Subscribe/SubscribeList';
import { mapState } from 'vuex';
export default {
  name: 'MoreAccountSearch',
  components: { SubscribeList },
  data() {
    return {
      // 顯示更多 lale 通結果
      moreAccountResult: false,
      // 顯示更多 lale 通結果的分類(全部、消息號、服務號)
      accountResultType: 0,
      // 搜尋結果為消息號
      accountsResultType1: [],
      // 搜尋結果為服務號
      accountsResultType2: []
    };
  },
  created() {
    // 搜尋結果為消息號
    this.accountsResultType1 = this.searchAccountsResult.filter(item => {
      return item.firmsType === 1;
    });
    // 搜尋結果為服務號
    this.accountsResultType2 = this.searchAccountsResult.filter(item => {
      return item.firmsType === 2;
    });
  },
  computed: {
    ...mapState('SearchModule', ['searchAccountsResult', 'keyword'])
  },
  methods: {}
};
</script>

<style scoped lang="scss">
// .moreAccountSearch-wrap {
//   background-color: #e8e8e8;
//   min-height: 100vh;
//   height: 100%;
//   padding-bottom: 50px;
// }
.accountType-wrap {
  background-color: $YTWhite;
  padding: 10px 10px 50px 10px;
  .accountType {
    color: $YTTitleBlack;
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
    .accountTypeTitle {
      width: calc(100% - 55px);
      letter-spacing: 0.5px;
    }
  }
}
.accountResultType {
  background-color: $YTWhite;
  padding-top: 5px;
  border-bottom: 0.5px solid #fdfdfd;
  span {
    width: calc(100% / 3);
    text-align: center;
    color: rgba(85, 85, 85, 0.7);
    display: inline-block;
    padding: 10px 15px;
  }
  .active {
    color: $YTDefaultGray;
    border-bottom: 3px solid $YTPrimary;
  }
}
</style>

<style lang="scss"></style>
