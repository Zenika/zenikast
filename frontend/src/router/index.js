import Vue from 'vue';
import Router from 'vue-router';
import tracksRoutes from './tracks.routes';
import authenticationRoutes from './authentication.routes';

Vue.use(Router);

const router = new Router({
  routes: [
    ...authenticationRoutes,
    ...tracksRoutes,
    { path: '*', redirect: '/tracks' }
  ]
});

export default router;
