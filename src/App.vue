<template>
  <div id="app">
    <router-view />
    <q-dialog v-model="myAlert">
      <q-card>
        <q-card-section>
          <img v-if="alertWord === '已收藏'" class="iconImg" src="./assets/lale_journal/AP_icon/bookmark_green.svg" alt="收藏 icon" />
          <i v-if="alertWord === '取消收藏'" class="fal fa-info-circle"></i>
          <div class="text-h6">{{ alertWord }}</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      myAlert: false
    };
  },
  computed: {
    ...mapState(['alert', 'alertWord'])
  },
  watch: {
    alert: function() {
      if (this.alert) {
        this.myAlert = true;
        setTimeout(() => {
          this.myAlert = false;
          this.CHANGE_ALERT_STATUS(false);
          this.CHANGE_ALERT_WORD('');
        }, 1000);
      }
    }
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Microsoft JhengHei;
  overflow-x: hidden;
}
.q-dialog .q-card {
  border-radius: 12px;
  .q-card__section.q-card__section--vert {
    text-align: center;
    min-width: 129px;
    .iconImg {
      width: 33px;
    }
    i {
      color: #cd5c5c;
      font-weight: 500;
      font-size: 41px;
    }
  }
}
</style>
