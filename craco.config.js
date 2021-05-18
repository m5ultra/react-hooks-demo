// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
// carco 配置 https://blog.csdn.net/guozhicaice/article/details/109593964
// https://stackoverflow.com/questions/47846209/webpack-with-less-and-postcss-autoprefixer webpack with less and postcss autoprefixer
// craco https://cloud.tencent.com/developer/article/1749704

// 移动端适配方案 https://bubble93.github.io/2021/03/11/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D%E6%96%B9%E6%A1%88/
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
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const px2rem = require('postcss-px2rem-exclude')
// 通过其他合适的方式判断是否为本地调试环境也一样，自由选择。
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//   .ant-btn {
//   margin-right: 10px;
//   margin-bottom: 30px;
// }

//   .ant-btn {
//   margin-right: 3.125vw;
//   margin-bottom: 9.375vw;
// }
module.exports = {
  style: {
    postcss: {
      loaderOptions: {
        ident: 'postcss',
        // plugins: () => [
        //   require('postcss-px-to-viewport')(
        //     postcssImport({}),
        //     postcssUrl({}),
        //     postcssAspectRatioMini({}),
        //     postcssWriteSvg({ utf8: false }),
        //     postcsscssnext({}),
        //     pxToViewPort({
        //       viewportWidth: 750, // (Number) The width of the viewport.
        //       viewportHeight: 1334, // (Number) The height of the viewport.
        //       unitPrecision: 10, // (Number) The decimal numbers to allow the REM units to grow to.
        //       viewportUnit: 'rem', // (String) Expected units.
        //       selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
        //       minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        //       mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
        //       exclude: /(\/|\\)(node_modules)(\/|\\)/ig
        //     }),
        //     cssnano({
        //       preset: 'advanced',
        //       autoprefixer: false,
        //       'postcss-zindex': false,
        //       zindex: false
        //     }),
        //   ),
        // ],
        plugins: () => [
          px2rem({ remUtil: 75, exclude: /node_modules/i })
        ]
      },
    }
  },
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
    // 修改webpack配置
    configure: (webpackConfig, { env, paths }) => {
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
