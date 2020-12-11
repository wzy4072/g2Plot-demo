const path = require('path')
const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const GitRevision = new GitRevisionPlugin()
const buildDate = JSON.stringify(new Date().toLocaleString())
const createThemeColorReplacerPlugin = require('./config/plugin.config')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
function resolve(dir) {
  return path.join(__dirname, dir)
}

const isProd = process.env.NODE_ENV === 'production'

const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    moment: 'moment',
  },
  css: [],
  // https://unpkg.com/browse/vue@2.6.10/
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
    '//cdn.jsdelivr.net/npm/moment@2.24.0/moment.min.js'
  ]
}

// vue.config.js
const vueConfig = {
  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        // GIT_HASH: JSON.stringify(GitRevision.version()),
        BUILD_DATE: buildDate
      })
    ],
    // if prod, add externals
    externals: isProd ? assetsCDN.externals : {}
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        // name: 'static/assets/[name].[hash:8].[ext]'
        name: 'assets/[name].[hash:8].[ext]'
      })

    // if prod is on
    // assets require on cdn
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN
        return args
      })
    }
    // config
    // .when(process.env.NODE_ENV === 'development',
    //   config => config.devtool('source-map')
    // )\
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end()
    }
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          'border-radius-base': '2px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    host: '192.168.2.149',
    // host: 'localhost',
    // development server port 8000
    port: 9999,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/api': {
        // target: 'http://localhost:7000', // 本地服务
        // target: 'http://192.168.1.121:7000', // zzm
        //target: 'http://192.168.1.128:7000',  // fcf
        // target: 'http://192.168.3.124:7000',  // fcf    // wifi
        // target: 'http://192.168.1.254:7000',  // mf    
        // target: 'http://192.168.1.211:7000',  // dmz
        // target: 'http://192.168.2.96:7000',  // KY
        // target: 'http://192.168.1.186:7000',  //dq
        // target: 'http://192.168.3.38:7000',  //dq
        target: 'http://192.168.0.72:7100',  // 72演示环境
        // target: 'http://192.168.2.105:7000',  //公司开发环境  新版的后端系统（对应vue） 
        // target: 'http://192.168.0.71:7000',     //  原版的后端系统(对应layui)        
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      // '/local': {
      //   target: `http://localhost:8000/mock`, // 前端模拟服务
      //   ws: false,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '/local': ''
      //   }
      // },
      // [process.env.VUE_APP_BASE_API]: {
      //   target: `http://localhost:8000/mock`,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ['^' + process.env.VUE_APP_BASE_API]: ''
      //   }
      // },
    },
    after: require('./mock/mock-server.js')
  },

  // disable source map in production
  productionSourceMap: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

// preview.pro.loacg.com only do not use in your production;
if (process.env.VUE_APP_PREVIEW === 'true') {
  console.log('VUE_APP_PREVIEW', true)
  // add `ThemeColorReplacer` plugin to webpack plugins
  vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin())
}

module.exports = vueConfig
