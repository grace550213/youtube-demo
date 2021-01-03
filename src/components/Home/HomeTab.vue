<template>
  <div class="homeTab-wrap row justify-between items-center">
    <div class="column tab" v-for="item in data" :key="item.title">
      <template v-if="item.url">
        <a :href="item.url">
          <img class="serviceImg" v-lazy="item.img" />
          <div class="servicetitle">{{ item.title }}</div>
        </a>
      </template>
      <template v-else>
        <div @click="allEvent(item.event)">
          <img class="serviceImg" v-lazy="item.img" />
          <div class="servicetitle">{{ item.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import router from '../../router';
export default {
  name: 'HomeTab',
  components: {},
  props: ['data'],
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    allEvent(myEvent) {
      console.log(myEvent);
      switch (myEvent) {
        case 'toSubscribe':
          router.push('/Subscribe');
          break;
        case 'toNewsArticleList':
          router.push('/NewsArticleList');
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
.tab {
  text-align: center;
}
.serviceImg {
  height: 40px;
  width: 40px;
  margin: 0 auto;
}
.servicetitle {
  margin-top: 4px;
  color: $YTDefaultGray;
  font-size: 13px;
}
</style>

<style lang="scss"></style>
