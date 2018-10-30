const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()]
  },
  pwa: {
    /* Example of dynamic caching : */
    workboxOptions: {
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://fonts'),
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'fonts.googleapis'
          }
        },
        {
          urlPattern: new RegExp('^https://firebasestorage.googleapis.com'),
          handler: 'cacheFirst',
          options: {
            cacheName: 'firebasestorage pictures'
          }
        }
      ]
    }
  }
};
