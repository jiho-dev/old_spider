import Vue from 'vue';
import Router from 'vue-router';
import paths from './paths';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '../store';

Vue.use(Router);
const router =  new Router({
  base: '/',
  mode: 'hash',
  // mode: 'history',
  linkActiveClass: 'active',
  routes: paths
});

// router gards
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  return;

  // if (to.name === 'Login') {
  //   next();
  //   return;
  // }
  // else if (store.getters.isAuthenticated) {
  //   next();
  //   return;
  // }

  // next('/login');
});

router.afterEach((to, from) => {
  // ...
  NProgress.done();
});

export default router;
