import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Favorite from '../views/Favorite.vue';
import SearchResult from '../views/SearchResult.vue';

// 解除重複路由問題
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'SearchResult',
        component: SearchResult
      },
      {
        path: '/Favorite/:type',
        name: 'Favorite',
        component: Favorite
      }
    ]
  }
];
const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   window.document.title = to.meta.title;
//   let metaList = document.getElementsByTagName('meta');
//   metaList.forEach(item => {
//     if (item.getAttribute('property') === 'og:description') {
//       item.content = to.meta.description;
//     }
//   });
//   next();
// });

export default router;
