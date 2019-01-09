export default [
  {
    path: '/podcasts',
    name: 'podcasts',
    meta: {
      authRequired: false
    },
    component: () =>
      import(/* webpackChunkName: "podcasts-list" */ '@/views/TrackList.vue')
  },
  {
    path: '/podcasts/:podcastId',
    name: 'podcast',
    meta: {
      authRequired: false
    },
    props: true,
    component: () =>
      import(/* webpackChunkName: "podcast" */ '@/views/Track.vue')
  }
];
