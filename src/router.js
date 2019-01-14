import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      children: [
        {
          path: 'my',
          name: 'my',
          component: () => import('./views/My.vue'),
          children: [
            {
              path: 'bb',
              name: 'bb',
              component: () => import('./views/Bb.vue'),
            },
          ],
        },
        {
          path: 'my2',
          name: 'my2',
          component: () => import('./views/my2.vue'),
          children: [
            {
              path: 'bb2',
              name: 'bb2',
              component: () => import('./views/bb2.vue'),
            },
          ],
        },
      ],
    },
  ],
});
