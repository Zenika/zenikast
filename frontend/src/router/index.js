import Vue from 'vue';
import Router from 'vue-router';
import podcastsRoutes from './tracks.routes';
import authenticationRoutes from './authentication.routes';

Vue.use(Router);

const router = new Router({
  routes: [
    ...authenticationRoutes,
    ...podcastsRoutes,
    { path: '*', redirect: '/podcasts' }
  ]
});

export default router;
