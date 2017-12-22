'use strict';
const path = require('path');
module.exports = {
  env: 'test',
  type: 'client',
  framework: 'vue',
  entry: {
    include: ['page', { app: 'page/app.js?loader=false' }],
    exclude: ['page/test'],
    template: 'view/layout.html',
    loader: {
      client: 'framework/vue/entry/client-loader.js'
    }
  },
  alias: {
    client: 'framework/vue/entry/client.js',
    app: 'framework/vue/app.js',
    asset: 'asset',
    mocks: 'mocks',
    component: 'component',
    framework: 'framework',
    store: 'store',
    utils: 'utils',
    router: 'router',
    page: 'page',
    icons: 'icons',
    api: 'api'
  },
  options: {},
  loaders: {
    eslint: false,
    less: false,
    stylus: false,
    svgSprite: {
      test: /\.svg$/,
      include: [path.resolve(__dirname, './asset/icons')],
      use: [
        {
          loader: 'svg-sprite-loader',
          options: { symbolId: 'icon-[name]' }
        }
      ]
    },
    urlimage: {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      exclude: [path.resolve(__dirname, './asset/icons')],
      use: [
        {
          loader: 'url-loader',
          options: { limit: 1024, name: 'img/[name].[ext]' }
        }
      ]
    }
  },
  plugins: {
  },
  create() {
  },
  done() {

  }
};
