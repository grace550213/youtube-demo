import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import './quasar';
import VueLazyLoad from 'vue-lazyload';
import './assets/fontawesome-pro-5.13.0-web/css/all.min.css';

Vue.config.productionTip = false;
Vue.use(VueLazyLoad, {
  loading: require('./assets/img_loading.gif'),
  error: require('./assets/lale_journal/default_head.png')
});

// 以下功能目前部分以 v-lazy 取代
// 範例: <img src="預設圖片" v-real-img="真正要載入的圖片" />
//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('real-img', async function(el, binding) {
  //指令名称为：real-img
  let imgURL = binding.value; //获取图片地址
  if (imgURL) {
    let exist = await imageIsExist(imgURL);
    if (exist) {
      el.setAttribute('src', imgURL);
    }
  }
});

// 检测图片是否存在
let imageIsExist = function(url) {
  return new Promise(resolve => {
    var img = new Image();
    img.onload = function() {
      if (this.complete == true) {
        resolve(true);
        img = null;
      }
    };
    img.onerror = function() {
      resolve(false);
      img = null;
    };
    img.src = url;
  });
};

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app');
