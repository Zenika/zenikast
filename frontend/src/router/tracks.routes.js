export default [
  {
    path: '/tracks',
    name: 'tracks',
    component: () =>
      import(/* webpackChunkName: "track-list" */ '@/views/TrackList.vue')
  },
  {
    path: '/tracks/:trackId',
    name: 'track',
    props: true,
    component: () => import(/* webpackChunkName: "track" */ '@/views/Track.vue')
  }
];
