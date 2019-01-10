export default [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      authRequired: true
    },
    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/UserInfos.vue')
  }
];
