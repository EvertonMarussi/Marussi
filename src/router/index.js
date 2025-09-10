import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Marussi/',
      name: 'paginaPrincipal',
      // Lazy load da rota
      component: () => import(/* webpackChunkName: "home" */ '../views/paginaPrincipal.vue')
    },
//    {
//      path: '/about',
//      name: 'About',
//      // Lazy load da rota
//      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//    }
  ]
});
