import router from './index';
import store from '@/store';

/**
 * Redirect user to login page if auth user is not set
 */
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    !store.state.authentication.userInfos
  )
    return next({ path: '/login' });
  next();
});
