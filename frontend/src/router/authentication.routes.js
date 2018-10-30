export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      authNotRequired: true
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () =>
      import(/* webpackChunkName: "user" */ '@/views/UserInfos.vue')
  }
];
