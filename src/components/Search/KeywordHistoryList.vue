<template>
  <div class="keywordHistoryList-wrap">
    <div class="keyword-wrap row items-center" v-for="item in data" :key="item.searchTime" @click="searchThisKeyword(item.keyword, item.searchTime)">
      <i class="fal fa-clock q-mr-md"></i>
      <span class="overflow-ellipsis">{{ item.keyword }}</span>
      <i class="far fa-times q-ml-auto"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'KeywordHistoryList',
  components: {},
  props: ['data'],
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions('SearchModule', ['deleteKeyword']),
    searchThisKeyword(keyword, searchTime) {
      console.log(event.target);
      if (event.target.closest('.fa-times')) {
        this.deleteKeyword(searchTime);
        return;
      }
      this.$emit('searchThisKeyword', keyword);
    }
  }
};
</script>

<style scoped lang="scss">
.keyword-wrap {
  font-size: 18px;
  color: #bbbbbb;
  padding: 15px 0;
  border-bottom: solid 1px #eee;
  span {
    color: $YTDefaultGray;
    width: 80%;
    display: inline-block;
  }
}
</style>

<style lang="scss"></style>
