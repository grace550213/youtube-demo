// const path = require('path');
// // 載入 prerender-spa-plugin (第一步)
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// // 載入 PuppeteerRenderer (第二步)
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
module.exports = {
  // build輸出目錄
  outputDir: 'dist',

  // 靜態資源目錄（js, css, img）
  assetsDir: 'assets',

  // 是否開啟eslint
  lintOnSave: false,

  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '/upfrd/WebAgenda/dau/' : '/',
  // indexPath: 'index.html',
  // publicPath: '/WebAgenda/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    open: true, // 是否自動彈出瀏覽器頁面
    // host: 'localhost',
    host: '192.168.50.154',
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      '/Memia': {
        target: 'https://memia.lale.im', // 測試機接口域名
        ws: true, // 代理websockets
        secure: true, // 如果是 https 接口，需要配置這個??
        changeOrigin: true // 虛擬的站點需要更管origin //是否跨域
        // pathRewrite: {
        //   //重寫路徑 比如'/api/aaa/ccc'重寫為'/aaa/ccc'
        //   '^/api': ''
        // }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // 官方文件有提到prependData是v8 sass-loader的option，v9以後改叫additionalData
        prependData: `@import "~@/assets/styles/myVariables";`
      }
    }
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: ['quasar']
  // configureWebpack(config) {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.plugins.push(
  //       // 創建實例 (第三步)
  //       new PrerenderSPAPlugin({
  //         staticDir: path.join(__dirname, 'dist'),
  //         routes: ['/', '/Subscribe', '/NewsArticleList', '/SubscribeAccount', '/Search', '/Article'],
  //         minify: {
  //           collapseBooleanAttributes: true,
  //           collapseWhitespace: true,
  //           decodeEntities: true,
  //           keepClosingSlash: true,
  //           sortAttributes: true
  //         },
  //         renderer: new Renderer({
  //           renderAfterDocumentEvent: 'render-event',
  //           renderAfterTime: 5000,
  //           headless: false, // Display the browser window when rendering. Useful for debugging.
  //           // Optional - The name of the property to add to the window object with the contents of `inject`.
  //           injectProperty: '__PRERENDER_INJECTED',
  //           // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
  //           inject: {
  //             foo: 'bar'
  //           }
  //         })
  //       })
  //     );
  //   }
  // }
};
