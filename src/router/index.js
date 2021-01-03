import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
