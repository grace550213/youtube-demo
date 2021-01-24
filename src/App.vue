<template>
  <div id="app">
    <router-view />
    <q-dialog v-model="myAlert">
      <q-card>
        <q-card-section>
          <i v-if="alertWord.indexOf('成功收藏') > -1" class="far fa-smile"></i>
          <i v-if="alertWord.indexOf('取消收藏') > -1" class="far fa-sad-tear"></i>
          <div class="text-h6">{{ alertWord }}</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
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
        console.log(1);
        this.myAlert = true;
        setTimeout(() => {
          this.myAlert = false;
          this.CHANGE_ALERT_STATUS(false);
          this.CHANGE_ALERT_WORD('');
        }, 1000);
      }
    }
  },
  created() {
    if (this.alert) {
      this.CHANGE_ALERT_STATUS(false);
    }
  },
  methods: {
    ...mapMutations(['CHANGE_ALERT_STATUS', 'CHANGE_ALERT_WORD'])
  }
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
    i {
      font-weight: 500;
      font-size: 41px;
    }
    i.fa-sad-tear {
      color: #cd5c5c;
    }
    i.fa-smile {
      color: $YTPrimary;
    }
  }
}
</style>
