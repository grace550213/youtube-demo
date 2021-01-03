import Vue from 'vue';
import Vuex from 'vuex';
import HomeModule from './modules/Home/index';
// import { Loading } from 'quasar';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 彈跳視窗是否出現
    alert: false,
    // 彈跳視窗的字
    alertWord: '',
    // youtube key
    key: 'AIzaSyAp8dsZZBZZQAizI_fnEyDC8UysIjVuS1Y'
  },
  getters: {},
  mutations: {
    // 設定彈跳視窗的狀態
    CHANGE_ALERT_STATUS(state, data) {
      state.alert = data;
    },
    // 設定彈跳視窗的文字
    CHANGE_ALERT_WORD(state, data) {
      state.alertWord = data;
    }
  },
  actions: {},
  modules: { HomeModule }
});