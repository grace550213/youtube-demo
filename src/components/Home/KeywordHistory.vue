<template>
  <q-scroll-area horizontal :thumb-style="thumbStyle" style="height: 53px">
    <div class="keywordHistory-wrap">
      <div class="tag-scroll row items-center">
        <div class="row justify-between items-center tag" v-for="item in data" :key="item" @click="searchThisKeyword(item)">
          <span class="q-mr-sm">{{ item }}</span>
          <i class="fas fa-times-circle" @click.stop="cleanTag(item)"></i>
        </div>
      </div>
    </div>
  </q-scroll-area>
</template>

<script>
export default {
  name: 'KeywordHistory',
  components: {},
  props: ['data'],
  data() {
    return {
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#9BC6BD',
        width: '3px',
        opacity: 0.75
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.calcScrollWidth();
  },
  updated() {
    this.calcScrollWidth();
  },
  methods: {
    // 搜尋此歷史紀錄
    searchThisKeyword(keyword) {
      this.$emit('searchThisKeyword', keyword);
    },
    // 清除此歷史紀錄
    cleanTag(keyword) {
      this.$emit('cleanKeyword', keyword);
    },
    calcScrollWidth() {
      let toolsScroll = document.querySelector('.tag-scroll');
      let toolsIndex = document.querySelectorAll('.tag');
      let itemTotalLength = 0;
      toolsIndex.forEach(item => {
        itemTotalLength += item.offsetWidth + 15;
      });
      toolsScroll.style.width = itemTotalLength + 'px';
    }
  }
};
</script>

<style scoped lang="scss">
// .keywordHistory-wrap {
//   overflow: scroll;
//   overflow-y: hidden;
// }
// .keywordHistory-wrap::-webkit-scrollbar-thumb {
//   background-color: $YTPrimary;
// }
.tag-scroll {
  width: 1000px;
  overflow: scroll;
  overflow-y: hidden;
}
.tag-scroll::-webkit-scrollbar {
  display: none;
}
.tag {
  background-color: $YTSecondary;
  border-radius: 20px;
  min-width: 30px;
  color: $YTWhite;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
</style>

<style lang="scss"></style>
