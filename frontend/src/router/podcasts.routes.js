export default [
  {
    path: '/podcasts',
    name: 'podcasts',
    component: () =>
      import(/* webpackChunkName: "podcasts-list" */ '@/views/PodcastsList.vue')
  },
  {
    path: '/podcasts/:podcastId',
    name: 'podcast',
    props: true,
    component: () =>
      import(/* webpackChunkName: "podcast" */ '@/views/Podcast.vue')
  }
];
