// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
// carco 配置 https://blog.csdn.net/guozhicaice/article/details/109593964
// https://stackoverflow.com/questions/47846209/webpack-with-less-and-postcss-autoprefixer webpack with less and postcss autoprefixer
// craco https://cloud.tencent.com/developer/article/1749704
const CracoLessPlugin = require('craco-less')
// 引入步骤2安装的依赖们
// const postcssImport = require('postcss-import')
// const postcssUrl = require('postcss-url')
// const postcssAspectRatioMini = require('postcss-aspect-ratio-mini')
// const postcssWriteSvg = require('postcss-write-svg')
// const postcsscssnext = require('postcss-cssnext')
// const pxToViewPort = require('postcss-px-to-viewport')
// const cssnano = require('cssnano')
const path = require('path')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
module.exports = {
  //   {
  //   autoprefixer: {},
  //   "postcss-px-to-viewport": {
  //     unitToConvert: 'px',
  //     viewportWidth: 750,
  //     unitPrecision: 8,
  //     propList: ["*"],
  //     viewportUnit: 'vw',
  //     fontViewportUnit: 'vw',
  //     selectorBlackList: ['.ignore', '.hairlines'],
  //     minPixelValue: 1,
  //     mediaQuery: true,
  //     replace: true,
  //     exclude: [/node_modules/],
  //     landscape: false,
  //   }
  // },
  // require('postcss-px-to-viewport')(
  //   postcssImport({}),
  //   postcssUrl({}),
  //   postcssAspectRatioMini({}),
  //   postcssWriteSvg({ utf8: false }),
  //   postcsscssnext({}),
  //   pxToViewPort({
  //     viewportWidth: 750, // (Number) The width of the viewport.
  //     viewportHeight: 1334, // (Number) The height of the viewport.
  //     unitPrecision: 8, // (Number) The decimal numbers to allow the REM units to grow to.
  //     viewportUnit: 'rem', // (String) Expected units.
  //     selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
  //     minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
  //     mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
  //   }),
  //   cssnano({
  //     preset: 'advanced',
  //     autoprefixer: false,
  //     'postcss-zindex': false,
  //     zindex: false
  //   }),
  // ),
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils'),
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin()
    ],
    configure: (webpackConfig, {env, paths }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        // ...{
        //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
        //   chunkFilename: 'static/js/[name].js'
        // },
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/'
      }
      return webpackConfig
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          'libraryName': 'antd',
          'libraryDirectory': 'es',
          'style': true //设置为true即是less
        }
      ]
    ]
  },
  devServer: {
    port: 7001,
  }
}
